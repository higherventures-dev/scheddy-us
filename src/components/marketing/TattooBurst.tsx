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
  "/assets/tattoos/1.png",
  "/assets/tattoos/2.png",
  "/assets/tattoos/3.png",
  "/assets/tattoos/4.png",
  "/assets/tattoos/5.png",
  "/assets/tattoos/6.png",
  "/assets/tattoos/7.png",
  "/assets/tattoos/8.png",
  "/assets/tattoos/9.png",
];

const TattooBurst = forwardRef<TattooBurstHandle>(function TattooBurst(_, ref) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number | null>(null);

  /* ===============================
     Setup
  ================================ */
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d")!;
    canvasRef.current = canvas;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    tattooSources.forEach((src) => {
      const img = new Image();
      img.src = src;
      imagesRef.current.push(img);
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

    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current.forEach((p, i) => {
      p.vy += 0.35;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.vr;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.drawImage(
        p.image,
        -p.size / 2,
        -p.size / 2,
        p.size,
        p.size
      );
      ctx.restore();

      if (p.y > canvas.height + 300) {
        particlesRef.current.splice(i, 1);
      }
    });

    rafRef.current = requestAnimationFrame(animate);
  };

  /* ===============================
     Fire burst
  ================================ */
  const fire = () => {
    const canvas = canvasRef.current;
    if (!canvas || imagesRef.current.length === 0) return;

    const cx = canvas.width / 2;
    const cy = canvas.height * 0.25;

    for (let i = 0; i < 24; i++) {
      const img =
        imagesRef.current[
          Math.floor(Math.random() * imagesRef.current.length)
        ];

      particlesRef.current.push({
        x: cx,
        y: cy,
        vx: (Math.random() - 0.5) * 14,
        vy: Math.random() * -18 - 6,
        rotation: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.25,
        size: 260 + Math.random() * 160, // 🔥 BIG TATTOOS
        image: img,
      });
    }

    if (!rafRef.current) animate();
  };

  /* ===============================
     Expose API
  ================================ */
  useImperativeHandle(ref, () => ({
    fire,
  }));

  return null;
});

export default TattooBurst;
