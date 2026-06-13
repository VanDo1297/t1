"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const engagementCards = [
  {
    tab: "Executives",
    title: "Ignite on Tour",
    desc: "Meet decision-makers, experts and practitioners for a day of hands-on learning, strategy building and networking.",
    cta: "Attend our global roadshow",
  },
  {
    tab: "Specialists",
    title: "Executive Briefing Center",
    desc: "Get a customized plan to see how our platform can support your organization's priorities.",
    cta: "Schedule a briefing",
  },
  {
    tab: "Partners",
    title: "Under Attack? We're Here.",
    desc: "Get immediate help from response experts when an active incident threatens your organization.",
    cta: "Get emergency assistance",
  },
  {
    tab: "Customers",
    title: "AI-powered security platforms",
    desc: "See demos, trials and guided experiences for the platforms built to secure what's next.",
    cta: "Visit the demo center",
  },
];

function EngagementCard({ card, index }: { card: (typeof engagementCards)[number]; index: number }) {
  const { ref, animationProps } = useScrollAnimation({
    preset: "fadeUpSm",
    delay: index * 0.08,
    once: true,
  });

  return (
    <motion.article
      ref={ref}
      {...animationProps}
      className="group relative flex min-h-[560px] flex-col overflow-hidden border border-white/12 bg-white/[0.04] p-7 text-white transition duration-300 hover:border-[#fa582d]"
    >
      <div
        className="absolute inset-x-0 top-0 h-40 opacity-[0.12]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #fa582d 0px, #fa582d 2px, transparent 2px, transparent 28px)",
        }}
      />
      <div className="relative z-10 flex h-full flex-col">
        <span className="mb-16 block text-[13px] font-semibold uppercase leading-[1.4] tracking-[2.6px] text-[#fa582d]">
          {card.tab}
        </span>
        <h3 className="mb-5 text-[30px] font-medium leading-[1.18] text-white">
          {card.title}
        </h3>
        <p className="text-[17px] font-medium leading-[1.5] text-white/65">
          {card.desc}
        </p>
        <a
          href="#contact"
          className="mt-auto inline-flex items-center pt-10 text-[14.8px] font-semibold leading-[1.4] text-white underline decoration-2 underline-offset-[10px] transition hover:text-[#fa582d]"
        >
          {card.cta}
          <ArrowRight size={18} className="ml-3 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </motion.article>
  );
}

export function CaseStudiesSection() {
  const { ref: headingRef, animationProps: headingAnim } = useScrollAnimation({
    preset: "fadeUp",
  });

  return (
    <section id="engage" className="relative overflow-hidden bg-[#f4f4f2] text-[#141414]">
      <div className="mx-auto w-full max-w-[1720px] px-5 py-24 sm:px-8 sm:py-28 lg:px-[10rem]">
        <motion.h2
          ref={headingRef}
          {...headingAnim}
          className="max-w-5xl text-[40px] font-medium leading-[1.15] text-[#141414] sm:text-[58px] lg:text-[70px]"
        >
          Here for you.
          <br />
          Here for what's next.
        </motion.h2>
      </div>

      <div className="bg-[#141414] py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1720px] px-5 sm:px-8 lg:px-[10rem]">
          <div className="mb-8 flex gap-4 overflow-x-auto pb-2 scrollbar-none">
            {engagementCards.map((card, index) => (
              <button
                key={card.tab}
                type="button"
                className={`shrink-0 border px-6 py-4 text-[18px] font-semibold leading-[1.35] transition ${
                  index === 0
                    ? "border-[#fa582d] bg-[#fa582d] text-black"
                    : "border-white/15 bg-white/[0.04] text-white/70 hover:border-[#fa582d] hover:text-white"
                }`}
              >
                {card.tab}
              </button>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {engagementCards.map((card, index) => (
              <EngagementCard key={card.title} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
