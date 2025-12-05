"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: "artist-1",
    name: "Mara Ortiz",
    role: "Tattoo Artist, Oakland",
    quote:
      "Scheddy finally killed the DM chaos. My clients book themselves, my day actually flows, and I can focus on drawing instead of juggling messages.",
    image: "/assets/images/testimonials/mara.jpg",
  },
  {
    id: "studio-1",
    name: "James Lee",
    role: "Owner, Night Shift Studio",
    quote:
      "We went from three different calendars and a whiteboard to one shared view. Scheddy keeps every artist, room, and walk-in in sync.",
    image: "/assets/images/testimonials/james.jpg",
  },
  {
    id: "guest-1",
    name: "Nova Vega",
    role: "Guest Artist & Traveler",
    quote:
      "On the road, I just drop my link and everything lines up — deposits, time zones, and travel days. Scheddy feels like a tour manager in my pocket.",
    image: "/assets/images/testimonials/nova.jpg",
  },
];

export default function Testimonials() {
  const [activeId, setActiveId] = useState<string>(testimonials[0].id);
  const active = testimonials.find((t) => t.id === activeId) ?? testimonials[0];

  return (
    <div className="max-w-4xl mx-auto px-4 text-center">
      {/* Quote + person */}
      <div className="relative">
        {/* Big quote mark */}
        <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 text-7xl md:text-8xl text-slate-700/40">
          &ldquo;
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20, rotateX: -8 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -20, rotateX: 8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="space-y-6 pt-6"
          >
            <p className="text-2xl md:text-3xl font-semibold leading-snug text-slate-50">
              {active.quote}
            </p>

            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-100">
                {active.name}
              </p>
              <p className="text-xs text-slate-400">{active.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Avatar selector */}
      <div className="mt-10 flex justify-center gap-4">
        {testimonials.map((t) => {
          const isActive = t.id === activeId;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveId(t.id)}
              className={cn(
                "relative h-12 w-12 rounded-2xl overflow-hidden border transition-all",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
                isActive
                  ? "border-sky-400 opacity-100 scale-100"
                  : "border-transparent opacity-50 hover:opacity-80 hover:scale-105"
              )}
            >
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
