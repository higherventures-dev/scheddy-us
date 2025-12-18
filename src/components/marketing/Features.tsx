"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

/* ===============================
   Props
================================ */
export type FeaturesProps = {
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
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
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
      <path d="M9 15 15 9" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function IconSync({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M5 8.5V5h3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M19 15.5V19h-3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5.5 11A6 6 0 0 1 17 7.5L19 9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M18.5 13A6 6 0 0 1 7 16.5L5 15" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function IconClockRules({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="6.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 9v3.2l2 1.3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function IconCurrency({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M9 7h4.5a2.5 2.5 0 0 1 0 5H10a2.5 2.5 0 0 0 0 5h5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M11.5 4v16" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function IconBellPolicy({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 4a4 4 0 0 0-4 4v2.9c0 .4-.13.8-.37 1.1L6.2 14.7A1 1 0 0 0 7 16h10a1 1 0 0 0 .8-1.6l-1.4-1.7a2 2 0 0 1-.37-1.1V8a4 4 0 0 0-4-4Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function IconDashboard({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M4 11a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

/* ===============================
   Component
================================ */
const Features: React.FC<FeaturesProps> = ({ onProductTourClick }) => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
          All-in-one platform for tattoo artists
        </h2>

        <p className="mt-4 text-slate-300 max-w-3xl mx-auto">
          Scheddy gives you everything you need to manage, share and sync schedules effortlessly.
        </p>

        {/* Row 1 */}
        <div className="mt-12 grid gap-8 md:grid-cols-3 text-left">
          <FeatureCard icon={<IconLink className="h-7 w-7 text-sky-400" />} title="Smart Booking Links">
            Give clients one link and Scheddy handles the rest including availability, references, and policies.
          </FeatureCard>

          <FeatureCard icon={<IconSync className="h-7 w-7 text-sky-400" />} title="Real-Time Schedule Sync">
            Your calendar updates instantly across devices so double-bookings never happen.
          </FeatureCard>

          <FeatureCard icon={<IconClockRules className="h-7 w-7 text-sky-400" />} title="Artist & Studio Availability">
            Block days off, travel time, preferred hours, and custom rules.
          </FeatureCard>
        </div>

        {/* Row 2 */}
        <div className="mt-8 grid gap-8 md:grid-cols-3 text-left">
          <FeatureCard icon={<IconCurrency className="h-7 w-7 text-sky-400" />} title="Deposit & Payment Tracking">
            Collect deposits securely and auto-flag unpaid bookings.
          </FeatureCard>

          <FeatureCard icon={<IconBellPolicy className="h-7 w-7 text-sky-400" />} title="Automated Reminders & Policies">
            Scheddy sends confirmations, reminders, and no-show warnings automatically.
          </FeatureCard>

          <FeatureCard icon={<IconDashboard className="h-7 w-7 text-sky-400" />} title="Unified Scheduling Dashboard">
            Manage your entire day from one clean, simple dashboard.
          </FeatureCard>
        </div>
      </div>

      {/* CTA — DEFINITIVELY WIRED */}
      <div className="flex justify-center mt-10">
        <Button
          type="button"
          onClick={() => {
            onProductTourClick?.();
          }}
          className="btn-pulse rounded-full px-8 bg-white text-slate-900 border-white hover:bg-slate-100"
        >
          Product Tour
        </Button>
      </div>
    </section>
  );
};

/* ===============================
   Card
================================ */
function FeatureCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-950/90 rounded-3xl border border-slate-800 shadow-sm p-6 flex flex-col gap-3">
      {icon}
      <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
      <p className="text-sm text-slate-400">{children}</p>
    </div>
  );
}

export default Features;
