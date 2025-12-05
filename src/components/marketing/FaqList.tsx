// src/components/marketing/FaqList.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Faq = {
  id: string;
  question: string;
  answer: string;
};

export default function FaqList({ faqs }: { faqs: Faq[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  if (!faqs || faqs.length === 0) {
    return (
      <p className="text-slate-400 text-sm">
        No questions yet. Check back soon.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {faqs.map((faq) => {
        const isOpen = faq.id === openId;

        return (
          <div key={faq.id} className="space-y-1">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              className="w-full text-left"
            >
              <div
                className={cn(
                  "flex items-center justify-between w-full rounded-3xl px-6 py-4 md:px-8 md:py-5",
                  "bg-slate-900 hover:bg-slate-900/80 border border-slate-800",
                  "transition-colors"
                )}
              >
                <span className="text-sm md:text-base text-slate-100">
                  {faq.question}
                </span>
                <span
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition-colors",
                    isOpen ? "bg-sky-400" : "bg-slate-500"
                  )}
                />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="px-6 md:px-8 pb-4"
                >
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
