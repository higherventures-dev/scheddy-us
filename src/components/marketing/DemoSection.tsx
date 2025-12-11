"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

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

export default function DemoSection() {
  const [activeId, setActiveId] = useState<string>(demos[0]?.id);
  const activeDemo = demos.find((demo) => demo.id === activeId) ?? demos[0];

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8" id="scheddy-overview">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-start">

        {/* LEFT: Text navigation */}
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

        {/* RIGHT: Screenshot preview */}
        <div className="relative md:mr-[-4rem] lg:mr-[-6rem]">
          <div
            className="
              relative w-full h-[420px] md:h-[520px] lg:h-[620px]
              overflow-hidden rounded-3xl border border-slate-800
              bg-slate-900 shadow-lg backdrop-blur-md
            "
          >
            {/* BLUE COLOR WASH */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-blue-900/20
                mix-blend-multiply
                z-10 pointer-events-none
              "
            />

            {/* Additional depth layer */}
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
                <Image
                  src={activeDemo.image}
                  alt={activeDemo.alt}
                  fill
                  className="object-cover opacity-[0.92]"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Label under screenshot */}
          <div className="mt-3 text-xs text-slate-400 max-w-full text-right">
            <span className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900 px-3 py-1 mr-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Live product view
            </span>
            <span>{activeDemo.alt}</span>
          </div>
        </div>
      </div>

      {/* Call to action below section */}
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
}
