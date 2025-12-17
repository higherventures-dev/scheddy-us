"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="py-20 bg-indigo-600 text-white text-center">
      <h2 className="text-3xl font-bold">
        Ready to simplify scheduling?
      </h2>

      <p className="mt-4">
        Start using Scheddy for free today, no credit card required.
      </p>

      <div className="mt-6 flex justify-center">
        <Button
          asChild
          className="
            bg-white
            text-indigo-600
            hover:bg-slate-100
            rounded-lg
            font-medium
            uppercase
            tracking-wide
            px-6
            py-2
          "
        >
          <Link href="https://app.scheddy.us/auth/sign-up">
            Get Started
          </Link>
        </Button>
      </div>
    </section>
  );
}
