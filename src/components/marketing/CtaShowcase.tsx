"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CtaShowcase() {
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Submitting:", email);
  }

  return (
    <section className="bg-black py-20">
      <div className="mx-auto px-4 text-center">

        <div className="space-y-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-50">
            Run your books like a pro,
            <br className="hidden md:block" /> even on your busiest days.
          </h2>

          <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto">
            Scheddy keeps artists and studios in sync so you can spend less time
            juggling DMs and more time on the work that actually matters.
          </p>

          {/* 👇 YOUR EMAIL INPUT NOW WORKS */}
          <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto space-y-4">

            <input
              type="email"
              required
              placeholder="Enter your email"
              className="
                w-full 
                px-4 
                py-3 
                rounded-md
                bg-slate-800 
                text-slate-100
                placeholder-slate-400
                border border-slate-700
                focus:ring-2 focus:ring-indigo-500 
                focus:border-indigo-500
                outline-none
                transition
              "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              type="submit"
              className="btn-pulse rounded-full px-8 py-3 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase"
            >
              Join Our Mailing List
            </Button>

          </form>
        </div>
      </div>
    </section>
  );
}
