"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type IconProps = {
  className?: string;
};

/* Simple representative icons */
function IconLink({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
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
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
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
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <circle
        cx="12"
        cy="12"
        r="6.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
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

function IconCurrency({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M9 7h4.5a2.5 2.5 0 0 1 0 5H10a2.5 2.5 0 0 0 0 5h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 4v16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBellPolicy({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 4a4 4 0 0 0-4 4v2.9c0 .4-.13.8-.37 1.1L6.2 14.7A1 1 0 0 0 7 16h10a1 1 0 0 0 .8-1.6l-1.4-1.7a2 2 0 0 1-.37-1.1V8a4 4 0 0 0-4-4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 18a2 2 0 0 0 4 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconDashboard({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 11a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 18h3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M15 13.5 12 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Features() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
          All-in-one platform for tattoo artists
        </h2>

        <p className="mt-4 text-slate-300 max-w-3xl mx-auto">
          Scheddy gives you everything you need to manage, share, and sync
          schedules effortlessly.
        </p>

        {/* Row 1 */}
        <div className="mt-12 grid gap-8 md:grid-cols-3 text-left">
          {/* Card 1 */}
          <div className="bg-slate-950/90 rounded-3xl border border-slate-800 shadow-sm p-6 flex flex-col gap-3">
            <IconLink className="h-7 w-7 text-sky-400" />
            <h3 className="text-lg font-semibold text-slate-50">
              Smart Booking Links
            </h3>
            <p className="text-sm text-slate-400">
              Give clients one link and Scheddy handles the rest—availability,
              project details, reference uploads, and booking rules
              automatically.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-950/90 rounded-3xl border border-slate-800 shadow-sm p-6 flex flex-col gap-3">
            <IconSync className="h-7 w-7 text-sky-400" />
            <h3 className="text-lg font-semibold text-slate-50">
              Real-Time Schedule Sync
            </h3>
            <p className="text-sm text-slate-400">
              Your calendar updates instantly across every device and every
              artist, keeping double-bookings and crossed wires impossible.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-950/90 rounded-3xl border border-slate-800 shadow-sm p-6 flex flex-col gap-3">
            <IconClockRules className="h-7 w-7 text-sky-400" />
            <h3 className="text-lg font-semibold text-slate-50">
              Artist & Studio Availability
            </h3>
            <p className="text-sm text-slate-400">
              Block healing days, travel time, preferred hours, and custom rules
              so every booking fits your actual workflow.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="mt-8 grid gap-8 md:grid-cols-3 text-left">
          {/* Card 4 */}
          <div className="bg-slate-950/90 rounded-3xl border border-slate-800 shadow-sm p-6 flex flex-col gap-3">
            <IconCurrency className="h-7 w-7 text-sky-400" />
            <h3 className="text-lg font-semibold text-slate-50">
              Deposit & Payment Tracking
            </h3>
            <p className="text-sm text-slate-400">
              Collect deposits securely, track balances, and auto-flag unpaid
              sessions so every booking is backed and every artist gets paid.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-slate-950/90 rounded-3xl border border-slate-800 shadow-sm p-6 flex flex-col gap-3">
            <IconBellPolicy className="h-7 w-7 text-sky-400" />
            <h3 className="text-lg font-semibold text-slate-50">
              Automated Reminders & Policies
            </h3>
            <p className="text-sm text-slate-400">
              Scheddy sends confirmations, reminders, and no-show warnings on
              your behalf, enforcing studio policies without awkward
              conversations.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-slate-950/90 rounded-3xl border border-slate-800 shadow-sm p-6 flex flex-col gap-3">
            <IconDashboard className="h-7 w-7 text-sky-400" />
            <h3 className="text-lg font-semibold text-slate-50">
              Unified Studio View
            </h3>
            <p className="text-sm text-slate-400">
              See every booking in one clean dashboard built for busy shops.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 mt-8">
          <Button
  asChild
  size="sm"
  variant="outline"
  className="btn-pulse rounded-full px-8 bg-white text-slate-900 border-white hover:bg-slate-100"
>
  <Link href="#scheddy-overview">Product Tour</Link>
</Button>

        </div>
    </section>
  );
}
