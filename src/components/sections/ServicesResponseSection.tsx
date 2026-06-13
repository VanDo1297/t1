"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  getScrollAnimationProps,
  useScrollAnimation,
  type AnimationPreset,
} from "@/hooks/useScrollAnimation";

const serviceStats = [
  { value: "200+", label: "threat researchers" },
  { value: "30 M", label: "malware samples analyzed per day" },
  { value: "1K+", label: "incident response engagements a year" },
  { value: "150+", label: "trusted partner of law firms" },
];

function AnimatedSectionBlock({
  children,
  className = "",
  delay = 0,
  preset,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  preset: AnimationPreset;
}) {
  const { ref, isInView } = useScrollAnimation({
    preset,
    duration: 0.58,
    delay,
    margin: "-18% 0px -18% 0px",
  });

  return (
    <motion.div
      ref={ref}
      {...getScrollAnimationProps(preset, isInView, {
        duration: 0.58,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      })}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ServiceStatCard({ stat }: { stat: (typeof serviceStats)[number] }) {
  return (
    <div
      className="flex min-h-[156px] flex-col items-center justify-center border border-[#c85f42] bg-[linear-gradient(115deg,#c75435_0%,#93311f_100%)] px-6 py-7 text-center text-white shadow-[0_28px_80px_rgba(111,34,20,0.22)]"
    >
      <p className="text-[44px] font-medium leading-none text-white sm:text-[54px] lg:text-[62px]">
        {stat.value}
      </p>
      <p className="mt-3 max-w-[260px] text-[15px] font-semibold leading-[1.35] text-white/90 sm:text-[17px]">
        {stat.label}
      </p>
    </div>
  );
}

export function ServicesResponseSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 text-[#141414] sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-[-18%] right-[8%] h-[640px] w-[640px] rounded-full bg-[#c75435]/10 blur-3xl" />
        <div
          className="absolute bottom-0 right-0 h-[58%] w-[56%] opacity-[0.12]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #c75435 0px, #c75435 3px, transparent 3px, transparent 18px)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1720px] px-5 sm:px-8 lg:px-[10rem]">
        <div className="mb-10 h-px w-80 bg-[#c75435]" />
        <AnimatedSectionBlock
          preset="ttb"
          className="mb-24 max-w-5xl text-[40px] font-medium leading-[1.15] text-[#141414] sm:text-[58px] lg:text-[70px]"
        >
          Intelligence-driven.
          <br />
          Response-ready.
        </AnimatedSectionBlock>

        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(560px,1.1fr)] lg:items-center">
          <AnimatedSectionBlock
            preset="ltr"
            delay={0.08}
            className="max-w-[620px]"
          >
            <span className="mb-7 block text-[14.4px] font-semibold uppercase leading-[1.4] tracking-[2.88px] text-[#c75435]">
              SERVICES
            </span>
            <h3 className="mb-8 text-[38px] font-medium leading-[1.15] text-[#141414] sm:text-[50px] lg:text-[58px]">
              Threat Intel &
              <br />
              Incident Response
            </h3>
            <p className="max-w-[640px] text-[18px] font-semibold leading-[1.55] text-[#141414]/78 sm:text-[21px]">
              Unit 42&apos;s world-renowned threat researchers, elite incident
              responders and expert security consultants will guide you with a
              threat-informed approach before, during and after an incident.
            </p>

            <div className="mt-10 flex flex-wrap gap-12">
              <div>
                <p className="text-[42px] font-medium leading-none text-[#141414] sm:text-[52px]">
                  1K+
                </p>
                <p className="mt-2 text-[14px] font-semibold uppercase leading-[1.35] text-[#141414]">
                  Matters per year
                </p>
              </div>
              <div>
                <p className="text-[42px] font-medium leading-none text-[#141414] sm:text-[52px]">
                  24 / 7 / 365
                </p>
                <p className="mt-2 text-[14px] font-semibold uppercase leading-[1.35] text-[#141414]">
                  Incident response
                </p>
              </div>
            </div>
          </AnimatedSectionBlock>

          <AnimatedSectionBlock
            preset="rtl"
            delay={0.12}
            className="lg:pt-16"
          >
            <a
              href="#contact"
              className="group mb-20 ml-auto hidden w-fit items-center rounded-full border-2 border-[#c75435] px-8 py-4 text-[14.8px] font-semibold leading-[1.4] text-[#141414] transition duration-300 hover:bg-[#c75435] hover:text-white lg:flex"
            >
              Explore Unit 42
              <ArrowRight size={20} className="ml-4 transition-transform group-hover:translate-x-1" />
            </a>

            <div className="grid gap-6 sm:grid-cols-2">
              {serviceStats.map((stat) => (
                <ServiceStatCard key={stat.label} stat={stat} />
              ))}
            </div>
          </AnimatedSectionBlock>
        </div>
      </div>
    </section>
  );
}
