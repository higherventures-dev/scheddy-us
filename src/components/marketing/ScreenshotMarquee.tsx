"use client";

import Image from "next/image";

const screenshots = [
  { src: "/assets/images/screenshots/scheddy-onboarding.png", alt: "Scheddy onboarding" },
  { src: "/assets/images/screenshots/scheddy-calendar.png", alt: "Scheddy calendar" },
  { src: "/assets/images/screenshots/scheddy-request-flow.png", alt: "Client request flow" },
  { src: "/assets/images/screenshots/scheddy-studio-view.png", alt: "Studio schedule view" },
];

export default function ScreenshotMarquee() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative">
          {/* gradient mask so edges fade out nicely */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

          <div className="screenshot-marquee-wrapper mx-auto flex justify-center">
            <div className="screenshot-marquee-track">
              {[...screenshots, ...screenshots].map((shot, index) => (
                <div
                  key={`${shot.src}-${index}`}
                  className="relative h-[380px] w-[640px] max-w-full rounded-[32px] overflow-hidden border border-slate-800 bg-slate-900/60 shadow-xl"
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 640px, 100vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
