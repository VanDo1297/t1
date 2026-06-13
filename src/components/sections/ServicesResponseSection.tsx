"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cards = [
  {
    label: "SERVICES",
    title: "Threat Intel & Incident Response",
    desc: "Unit 42's world-renowned threat researchers, elite incident responders and expert security consultants guide you before, during and after an incident.",
    stats: ["1K+ matters per year", "24/7/365 incident response", "Global threat intelligence"],
  },
  {
    label: "SERVICES",
    title: "Advisory Services",
    desc: "Build a cybersecurity program that is threat-informed, business-aligned and ready for the next wave of AI-driven attacks.",
    stats: ["Board-ready strategy", "Risk reduction roadmap", "Operational maturity"],
  },
  {
    label: "SERVICES",
    title: "Managed Detection & Response",
    desc: "Extend your team with around-the-clock monitoring, investigation and response powered by AI-driven operations.",
    stats: ["Continuous monitoring", "Rapid containment", "Expert-led response"],
  },
];

function ServiceCard({ card, index }: { card: (typeof cards)[number]; index: number }) {
  const { ref, animationProps } = useScrollAnimation({
    preset: "fadeUpSm",
    delay: index * 0.08,
    once: true,
  });

  return (
    <motion.article
      ref={ref}
      {...animationProps}
      className={`group flex min-h-[620px] flex-col border border-black/15 p-8 transition duration-300 sm:p-10 ${
        index === 0
          ? "bg-[#141414] text-white"
          : "bg-white text-[#141414] hover:border-[#fa582d]"
      }`}
    >
      <span className="mb-8 block text-[13px] font-semibold uppercase leading-[1.4] tracking-[2.6px] text-[#fa582d]">
        {card.label}
      </span>
      <h3 className={`mb-6 text-[34px] font-medium leading-[1.15] sm:text-[42px] ${index === 0 ? "text-white" : "text-[#141414]"}`}>
        {card.title}
      </h3>
      <p className={`mb-10 text-[18px] font-medium leading-[1.55] ${index === 0 ? "text-white/68" : "text-[#565656]"}`}>
        {card.desc}
      </p>

      <div className="mt-auto space-y-4">
        {card.stats.map((stat) => (
          <div
            key={stat}
            className={`border-t py-4 text-[17px] font-semibold leading-[1.4] ${
              index === 0 ? "border-white/15 text-white" : "border-black/12 text-[#141414]"
            }`}
          >
            {stat}
          </div>
        ))}
      </div>

      <a
        href="#contact"
        className={`mt-10 inline-flex items-center text-[14.8px] font-semibold leading-[1.4] underline decoration-2 underline-offset-[10px] transition ${
          index === 0 ? "text-white hover:text-[#fa582d]" : "text-[#141414] hover:text-[#fa582d]"
        }`}
      >
        Learn more
        <ArrowRight size={18} className="ml-3 transition-transform group-hover:translate-x-1" />
      </a>
    </motion.article>
  );
}

export function ServicesResponseSection() {
  const { ref: headingRef, animationProps: headingAnim } = useScrollAnimation({
    preset: "fadeUp",
  });

  return (
    <section className="relative overflow-hidden bg-[#f4f4f2] py-24 text-[#141414] sm:py-28 lg:py-36">
      <div className="mx-auto w-full max-w-[1720px] px-5 sm:px-8 lg:px-[10rem]">
        <motion.h2
          ref={headingRef}
          {...headingAnim}
          className="mb-16 max-w-5xl text-[40px] font-medium leading-[1.15] text-[#141414] sm:text-[58px] lg:text-[76px]"
        >
          Intelligence-driven.
          <br />
          Response-ready.
        </motion.h2>

        <div className="grid gap-6 lg:grid-cols-3">
          {cards.map((card, index) => (
            <ServiceCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
