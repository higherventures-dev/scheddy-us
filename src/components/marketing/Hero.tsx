"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-70 pointer-events-none"
        src="assets/videos/tattoo-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Darker overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        <div className="flex justify-center mb-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/images/logo.svg"
              alt="Scheddy"
              width={48}
              height={48}
            />
          </Link>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-50">
          Run a better tattoo business with Scheddy
          <sup className="text-xs align-super ml-1">TM</sup>
        </h1>

        <p className="mt-4 text-sm md:text-base text-slate-200 max-w-2xl mx-auto">
          Whether you're solo or running a full studio, Scheddy brings clarity to
          your calendar and structure to your workflow. Every artist, every room,
          and every session stays in sync.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 mt-8">
          <Button
  asChild
  size="sm"
  variant="outline"
  className="btn-pulse rounded-full px-8 bg-white text-slate-900 border-white hover:bg-slate-100"
>
  <Link href="#features">Learn More</Link>
</Button>

        </div>
      </div>
    </section>
  );
}
