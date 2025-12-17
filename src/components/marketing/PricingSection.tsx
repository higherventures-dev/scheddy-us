"use client";

import { Button } from "@/components/ui/button";

const plans = [
  {
    id: "waitlist",
    name: "Early Access Waitlist",
    price: "Free",
    subtitle:
      "Reserve your spot for the first wave of studios and artists using Scheddy.",
    highlight: false,
    buttonLabel: "Get Started",
    features: [
      "Priority invite to the private beta",
      "Founding member pricing when we launch",
      "Early access demo and onboarding call",
      "Chance to influence the product roadmap",
    ],
  },
];

export default function PricingSection() {
  return (
    <div className="max-w-6xl mx-auto px-4" id="plans">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
          Pricing
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-50">
          Plans built for every Artist and Studio
        </h2>
        <p className="mt-3 text-slate-300">
          Start on the waitlist, grow as a solo artist, and scale seamlessly
          when you&apos;re ready to run a full studio on Scheddy.
        </p>
      </div>

      {/* Centered pricing card */}
      <div className="flex justify-center">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={[
              "flex flex-col rounded-3xl border px-6 py-7 md:px-8 md:py-9",
              "bg-slate-900/90 text-left shadow-lg",
              "w-full max-w-md",
              plan.highlight
                ? "border-sky-500/80 shadow-sky-900/40"
                : "border-slate-800",
            ].join(" ")}
          >
            {/* Title */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-300">
                {plan.name}
              </p>
              <p className="text-2xl md:text-3xl font-bold text-slate-50">
                {plan.price}
              </p>
              <p className="text-sm text-slate-400">{plan.subtitle}</p>
            </div>

            {/* Button – MATCHES CTA STYLE */}
            <div className="mt-6">
              <Button
                asChild
                className="
                  w-full
                  bg-white
                  text-indigo-600
                  hover:bg-slate-100
                  rounded-lg
                  font-medium
                "
              >
                <a href="https://app.scheddy.us/auth/sign-up">
                  {plan.buttonLabel}
                </a>
              </Button>
            </div>

            {/* Features */}
            <div className="mt-8">
              <p className="text-xs font-semibold tracking-[0.16em] text-slate-400 uppercase">
                Includes
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] text-emerald-400">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer (hidden for now) */}
            <div className="mt-6 pt-2 text-xs text-slate-400">
              <button className="underline underline-offset-4 hover:text-slate-200 hidden">
                See details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
