"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

type FeaturesProps = {
  onProductTourClick?: () => void;
};

type IconProps = {
  className?: string;
};

/* ===============================
   Icons
================================ */
function IconLink({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M9.5 14.5 7 17a3 3 0 1 1-4.24-4.24l3-3A3 3 0 0 1 9.5 11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 9.5 17 7a3 3 0 1 1 4.24 4.24l-3 3A3 3 0 0 1 14.5 13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 15 15 9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconSync({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M5 8.5V5h3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 15.5V19h-3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 11A6 6 0 0 1 17 7.5L19 9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 13A6 6 0 0 1 7 16.5L5 15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconClockRules({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="6.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 9v3.2l2 1.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 4h3M6 7h2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ===============================
   Component
================================ */
export default function Features({ onProductTourClick }: FeaturesProps) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
          All-in-one platform for tattoo artists
        </h2>

        <p className="mt-4 text-slate-300 max-w-3xl mx-auto">
          Scheddy gives you everything you need to manage, share and sync
          schedules effortlessly.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3 text-left">
          <div className="bg-slate-950/90 rounded-3xl border border-slate-800 p-6">
            <IconLink className="h-7 w-7 text-sky-400" />
            <h3 className="mt-3 text-lg font-semibold text-slate-50">
              Smart Booking Links
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Give clients one link and Scheddy handles the rest automatically.
            </p>
          </div>

          <div className="bg-slate-950/90 rounded-3xl border border-slate-800 p-6">
            <IconSync className="h-7 w-7 text-sky-400" />
            <h3 className="mt-3 text-lg font-semibold text-slate-50">
              Real-Time Schedule Sync
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Calendar updates across all devices instantly.
            </p>
          </div>

          <div className="bg-slate-950/90 rounded-3xl border border-slate-800 p-6">
            <IconClockRules className="h-7 w-7 text-sky-400" />
            <h3 className="mt-3 text-lg font-semibold text-slate-50">
              Artist & Studio Availability
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Control your time with real rules that match real workflows.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          {onProductTourClick ? (
            <Button
              size="sm"
              variant="outline"
              onClick={onProductTourClick}
              className="btn-pulse rounded-full px-8 bg-white text-slate-900 border-white hover:bg-slate-100"
            >
              Product Tour
            </Button>
          ) : (
            <Link href="#scheddy-overview">
              <Button
                size="sm"
                variant="outline"
                className="btn-pulse rounded-full px-8 bg-white text-slate-900 border-white hover:bg-slate-100"
              >
                Product Tour
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
