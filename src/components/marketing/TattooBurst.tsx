"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

/* ===============================
   Public handle
================================ */
export type TattooBurstHandle = {
  fire: () => void;
};

/* ===============================
   Types
================================ */
type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  vr: number;
  size: number;
  image: HTMLImageElement;
};

/* ===============================
   Assets
================================ */
const tattooSources = [
  "/assets/tattoos/1t.png",
  "/assets/tattoos/2t.png",
  "/assets/tattoos/3t.png",
  "/assets/tattoos/4t.png",
  "/assets/tattoos/5t.png",
  "/assets/tattoos/6t.png",
  "/assets/tattoos/7t.png",
  "/assets/tattoos/8t.png",
  "/assets/tattoos/9t.png",
];

const TattooBurst = forwardRef<TattooBurstHandle>(function TattooBurst(_, ref) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number | null>(null);
  const readyRef = useRef(false);

  /* ===============================
     Setup canvas + preload images
  ================================ */
  useEffect(() => {
    // Canvas
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";
    document.body.appendChild(canvas);
    canvasRef.current = canvas;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // 🔒 PRELOAD IMAGES (CRITICAL)
    Promise.all(
      tattooSources.map(
        (src) =>
          new Promise<HTMLImageElement>((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(img);
            img.onerror = reject;
          })
      )
    )
      .then((imgs) => {
        imagesRef.current = imgs;
        readyRef.current = true;
      })
      .catch((err) => {
        console.error("TattooBurst image load failed", err);
      });

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      canvas.remove();
    };
  }, []);

  /* ===============================
     Animation loop
  ================================ */
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current = particlesRef.current.filter((p) => {
      p.vy += 0.4;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.vr;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.drawImage(p.image, -p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();

      return p.y < canvas.height + 400;
    });

    rafRef.current = requestAnimationFrame(animate);
  };

  /* ===============================
     Fire burst (SAFE)
  ================================ */
  const fire = () => {
    if (!readyRef.current || !canvasRef.current) {
      console.warn("TattooBurst not ready yet");
      return;
    }

    const canvas = canvasRef.current;
    const cx = canvas.width / 2;
    const cy = canvas.height * 0.25;

    for (let i = 0; i < 28; i++) {
      const img =
        imagesRef.current[
          Math.floor(Math.random() * imagesRef.current.length)
        ];

      particlesRef.current.push({
        x: cx,
        y: cy,
        vx: (Math.random() - 0.5) * 16,
        vy: Math.random() * -22 - 8,
        rotation: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.35,
        size: 280 + Math.random() * 180, // BIG
        image: img,
      });
    }

    if (!rafRef.current) animate();
  };

  /* ===============================
     Expose API
  ================================ */
  useImperativeHandle(ref, () => ({ fire }));

  return null;
});

export default TattooBurst;
