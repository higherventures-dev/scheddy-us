"use client";

import {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useRef,
} from "react";
import NextImage from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import confetti from "canvas-confetti";

/* ===============================
   Public handle
================================ */
export type DemoSectionHandle = {
  fireConfetti: () => void;
};

/* ===============================
   Tattoo assets (simple names)
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
];

/* ===============================
   Demo content
================================ */
const demos = [
  {
    id: "overview",
    icon: "🗓️",
    title: "See every booking at a glance",
    description:
      "Get a clean, real-time view of your day, week or month so you always know who’s coming in and when.",
    image: "/assets/images/screenshots/dashboard-screenshot.png",
    alt: "Scheddy overview calendar",
  },
  {
    id: "availability",
    icon: "👥",
    title: "Share availability without the back-and-forth",
    description:
      "Send a single link that lets clients pick from your saved availability resulting in less DM’s and double-bookings.",
    image: "/assets/images/screenshots/calendar-screenshot.png",
    alt: "Scheddy availability sharing",
  },
  {
    id: "team",
    icon: "💫",
    title: "Know whats happening next",
    description:
      "A beautifully clear calendar view that helps every artist to stay aligned.",
    image: "/assets/images/screenshots/bookings-screenshot.png",
    alt: "Scheddy team scheduling",
  },
];

const DemoSection = forwardRef<DemoSectionHandle>(function DemoSection(_, ref) {
  const [activeId, setActiveId] = useState<string>(demos[0].id);
  const activeDemo = demos.find((d) => d.id === activeId) ?? demos[0];

  /* ===============================
     Confetti infra (NO worker)
  ================================ */
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const confettiInstanceRef = useRef<ReturnType<typeof confetti.create> | null>(
    null
  );
  const tattooImagesRef = useRef<HTMLImageElement[]>([]);
  const imagesReadyRef = useRef(false);

  useEffect(() => {
    // Create canvas
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";
    document.body.appendChild(canvas);
    canvasRef.current = canvas;

    // Create confetti instance (NO WORKER)
    confettiInstanceRef.current = confetti.create(canvas, {
      resize: true,
      useWorker: false,
    });

    // Preload tattoo images safely
    let loadedCount = 0;

    tattooSources.forEach((src) => {
      const img = new window.Image();
      img.onload = () => {
        tattooImagesRef.current.push(img);
        loadedCount += 1;
        if (loadedCount === tattooSources.length) {
          imagesReadyRef.current = true;
        }
      };
      img.src = src;
    });

    return () => {
      canvas.remove();
    };
  }, []);

  /* ===============================
     Public trigger
  ================================ */
  useImperativeHandle(ref, () => ({
    fireConfetti() {
      if (
        !confettiInstanceRef.current ||
        !imagesReadyRef.current ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      const particleCount = window.innerWidth < 768 ? 5 : 8;

      tattooImagesRef.current.forEach((img) => {
        confettiInstanceRef.current!({
          particleCount,
          startVelocity: 32,
          spread: 360,
          gravity: 1.25,
          scalar: 0.8,
          shapes: ["image"],
          shapeOptions: {
            image: img,
          },
          origin: { x: 0.5, y: 0.25 },
        });
      });
    },
  }));

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8" id="scheddy-overview">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-start">

        {/* LEFT */}
        <div className="space-y-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
            Product tour
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-slate-50">
            How Scheddy works.
          </h2>

          <div className="mt-4 space-y-3">
            {demos.map((demo) => {
              const isActive = demo.id === activeId;
              return (
                <button
                  key={demo.id}
                  type="button"
                  onClick={() => setActiveId(demo.id)}
                  className={cn(
                    "w-full text-left rounded-2xl border px-4 py-3 md:px-5 md:py-4 transition-all",
                    "hover:border-slate-500/70 hover:bg-slate-900/60",
                    isActive
                      ? "border-slate-200 bg-slate-900"
                      : "border-slate-800 bg-slate-950/60"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 text-lg md:text-xl">{demo.icon}</div>
                    <div className="space-y-1">
                      <h3 className="text-sm md:text-base font-semibold text-slate-50">
                        {demo.title}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-400">
                        {demo.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative md:mr-[-4rem] lg:mr-[-6rem]">
          <div className="relative w-full h-[420px] md:h-[520px] lg:h-[620px] overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-blue-900/20 z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-black/20 z-20 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeDemo.image}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 z-0"
              >
                <NextImage
                  src={activeDemo.image}
                  alt={activeDemo.alt}
                  fill
                  className="object-cover opacity-[0.92]"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col items-center justify-center gap-4 mt-8">
        <Button
          asChild
          size="sm"
          variant="outline"
          className="btn-pulse rounded-full px-8 bg-white text-slate-900 border-white hover:bg-slate-100"
        >
          <Link href="#plans">View Plans</Link>
        </Button>
      </div>
    </div>
  );
});

export default DemoSection;
