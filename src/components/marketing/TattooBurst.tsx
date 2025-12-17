"use client";

import { useEffect, useRef } from "react";

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

export default function TattooBurst() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number | null>(null); // ✅ FIX

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

    const ctx = canvas.getContext("2d")!;
    canvasRef.current = canvas;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Preload tattoo images
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

      if (p.y > canvas.height + 200) {
        particlesRef.current.splice(i, 1);
      }
    });

    rafRef.current = requestAnimationFrame(animate);
  };

  /* ===============================
     Public trigger
  ================================ */
  const fire = () => {
    const canvas = canvasRef.current;
    if (!canvas || imagesRef.current.length === 0) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height * 0.25;

    for (let i = 0; i < 22; i++) {
      const img =
        imagesRef.current[
          Math.floor(Math.random() * imagesRef.current.length)
        ];

      particlesRef.current.push({
        x: centerX,
        y: centerY,
        vx: (Math.random() - 0.5) * 12,
        vy: Math.random() * -14 - 6,
        rotation: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.2,
        size: 220 + Math.random() * 120, // 🔥 BIG TATTOOS
        image: img,
      });
    }

    if (!rafRef.current) animate();
  };

  /* Expose global trigger */
  useEffect(() => {
    (window as any).fireTattooBurst = fire;
  }, []);

  return null;
}
