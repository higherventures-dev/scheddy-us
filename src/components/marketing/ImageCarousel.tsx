"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Slide = {
  src: string;
  alt: string;
};

type ImageCarouselProps = {
  slides: Slide[];
  className?: string;
};

export function ImageCarousel({ slides, className }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  };

  const current = slides[index];

  return (
    <div
      className={cn(
        "relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl border border-slate-800 bg-slate-900",
        className
      )}
    >
      <div className="relative aspect-video">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.src}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-2 py-1 text-xs text-white hover:bg-black/90"
        aria-label="Previous slide"
      >
        ◀
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-2 py-1 text-xs text-white hover:bg-black/90"
        aria-label="Next slide"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-1 py-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={cn(
              "h-2 w-2 rounded-full",
              i === index ? "bg-slate-100" : "bg-slate-500"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
