"use client";

import {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

/* ===============================
   Public handle
================================ */
export type TattooBurstHandle = {
  fire: () => void;
};

/* ===============================
   Tattoo sources (transparent PNGs)
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

/* ===============================
   Particle model
================================ */
type Particle = {
  img: HTMLImageElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  vr: number;
  life: number;
  size: number;
};

const TattooBurst = forwardRef<TattooBurstHandle>(function TattooBurst(_, ref) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>();

  /* ===============================
     Setup canvas + preload images
  ================================ */
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";
    document.body.appendChild(canvas);

    canvasRef.current = canvas;
    ctxRef.current = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Preload tattoo PNGs
    tattooSources.forEach((src) => {
      const img = new Image();
      img.src = src;
      imagesRef.current.push(img);
    });

    const tick = () => {
      const ctx = ctxRef.current;
      if (!ctx || !canvasRef.current) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter(
        (p) => p.life > 0
      );

      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Ink-heavy gravity (slower fall)
        p.vy += 0.35;

        p.rotation += p.vr;
        p.life -= 1;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = Math.min(p.life / 120, 1);

        const s = p.size;
        ctx.drawImage(p.img, -s / 2, -s / 2, s, s);

        ctx.restore();
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(rafRef.current!);
      window.removeEventListener("resize", resize);
      canvas.remove();
    };
  }, []);

  /* ===============================
     Public trigger
  ================================ */
  useImperativeHandle(ref, () => ({
    fire() {
      // Respect reduced motion
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      const cx = window.innerWidth / 2;
      const cy = window.innerHeight * 0.25;

      imagesRef.current.forEach((img) => {
        // 2–3 particles per tattoo feels premium
        const count = window.innerWidth < 768 ? 1 : 2;

        for (let i = 0; i < count; i++) {
          particlesRef.current.push({
            img,
            x: cx,
            y: cy,
            vx: (Math.random() - 0.5) * 10,
            vy: -Math.random() * 14 - 8,
            rotation: Math.random() * Math.PI * 2,
            vr: (Math.random() - 0.5) * 0.08,
            life: 140,
            size: 220 + Math.random() * 120,
          });
        }
      });
    },
  }));

  return null;
});

export default TattooBurst;
