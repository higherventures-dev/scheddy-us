// src/components/marketing/FaqSection.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import FaqList from "./FaqList";
import { Reveal } from "./Reveal";

const staticFaqs = [
  {
    id: "1",
    question: "What is Scheddy and who is it for?",
    answer:
      "Scheddy is a scheduling and workflow tool built specifically for tattoo artists and studios. It helps you manage bookings, availability, deposits, and studio policies in one place so you can stop living in your DMs.",
  },
  {
    id: "2",
    question: "Will Scheddy integrate with my existing calendar?",
    answer:
      "Yes. Scheddy currently integrates with Google Calendar, allowing your bookings and availability to stay in sync automatically. Support for additional calendar platforms commonly used by artists and studio owners is part of our ongoing roadmap.",
  },
  {
    id: "3",
    question: "Can Scheddy handle deposits and cancellation policies?",
    answer:
      "Yes. You can set deposit requirements, cancellation windows, and no-show rules. Scheddy keeps track of who has paid, who is pending, and which bookings are out of policy so you don’t have to chase people manually.",
  },
  {
    id: "4",
    question: "Does Scheddy work for traveling or guest artists?",
    answer:
      "Scheddy is great for traveling artists. You can set limited-time availability, block travel and recovery days, and share a single booking link for each city or guest spot.",
  },
  {
    id: "5",
    question: "Do I have to move my whole studio to Scheddy on day one?",
    answer:
      "No. You can start with just one artist, one room, or a single booking link. As you get comfortable, you can add more artists, stations, and rules without breaking your current flow.",
  },
  {
    id: "6",
    question: "How can I participate for free?",
    answer:
      "You can participate by joining the Scheddy waitlist. As we open new beta groups, we invite artists, studio owners, teams, and early partners to test the platform at no cost.",
  },
];

export default function FaqSection() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Header */}
      <Reveal>
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-50">
            Frequently asked questions.
          </h2>
        </div>
      </Reveal>

      {/* FAQ List */}
      <Reveal delay={0.1}>
        <FaqList faqs={staticFaqs} />
      </Reveal>

      {/* CTA Button */}
      <Reveal delay={0.2}>
        <div className="mt-12 flex justify-center">
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
      </Reveal>
    </div>
  );
}
