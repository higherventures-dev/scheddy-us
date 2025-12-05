// src/components/marketing/FaqSection.tsx
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
    question: "Do I have to move my whole studio to Scheddy on day one?",
    answer:
      "No. You can start with just one artist, one room, or a single booking link. As you get comfortable, you can add more artists, stations, and rules without breaking your current flow.",
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
    question: "Will Scheddy integrate with my existing calendar?",
    answer:
      "Our goal is to sync with the calendars you already use so you don’t have to manage everything twice. During the beta, we’re focusing on the most common calendar tools used by artists and studio owners.",
  },
  {
    id: "6",
    question: "How do I join the beta or get early access?",
    answer:
      "Add your studio to the waitlist and we’ll reach out as we open new beta groups. Early studios get direct input into features, pricing, and how Scheddy evolves.",
  },
];

export default function FaqSection() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <Reveal>
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-50">
            Frequently asked questions.
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <FaqList faqs={staticFaqs} />
      </Reveal>
    </div>
  );
}
