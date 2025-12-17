"use client";

import { useRef } from "react";

import Hero from "@/components/marketing/Hero";
import FeatureAlt from "@/components/marketing/FeatureAlt";
import Features from "@/components/marketing/Features";
import Cta from "@/components/marketing/Cta";
import Testimonials from "@/components/marketing/Testimonials";
import { Reveal } from "@/components/marketing/Reveal";
import DemoSection from "@/components/marketing/DemoSection";
import PricingSection from "@/components/marketing/PricingSection";
import FaqSection from "@/components/marketing/FaqSection";
import CtaShowcase from "@/components/marketing/CtaShowcase";

import TattooBurst, {
  TattooBurstHandle,
} from "@/components/marketing/TattooBurst";

export default function HomePage() {
  const tattooBurstRef = useRef<TattooBurstHandle>(null);

  const handleProductTourClick = () => {
    // 1️⃣ Fire tattoo burst (REAL PNG particles)
    tattooBurstRef.current?.fire();

    // 2️⃣ Scroll to demo section
    const target = document.getElementById("demo");
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  };

  return (
    <>
      {/* GLOBAL TATTOO CANVAS */}
      <TattooBurst ref={tattooBurstRef} />

      {/* HERO */}
      <section id="hero" className="scroll-mt-24">
        <Reveal>
          <Hero />
        </Reveal>
      </section>

      {/* FEATURES */}
      <section id="features" className="scroll-mt-24 py-16">
        <Reveal>
          <Features onProductTourClick={handleProductTourClick} />
        </Reveal>
      </section>

      {/* DEMO / PRODUCT TOUR */}
      <section id="demo" className="scroll-mt-24 py-20 bg-black/75">
        <Reveal>
          <DemoSection />
        </Reveal>
      </section>

      {/* PRICING */}
      <section id="pricing" className="scroll-mt-24 py-20">
        <Reveal>
          <PricingSection />
        </Reveal>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 py-20">
        <Reveal>
          <Cta />
        </Reveal>
      </section>

      {/* FAQS */}
      <section id="faqs" className="scroll-mt-24 py-20">
        <Reveal>
          <FaqSection />
        </Reveal>
      </section>

      {/* TESTIMONIALS */}
      {/* <section id="testimonials" className="scroll-mt-24 py-20">
        <Reveal>
          <Testimonials />
        </Reveal>
      </section> */}

      {/* WAITLIST */}
      <section className="scroll-mt-24" id="waitlist">
        <Reveal>
          <CtaShowcase />
        </Reveal>
      </section>
    </>
  );
}
