"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  getScrollAnimationProps,
  useScrollAnimation,
  type AnimationPreset,
} from "@/hooks/useScrollAnimation";
import { CLIENT_LOGOS } from "@/lib/constants";

const serviceStats = [
  { value: "200+", label: "threat researchers" },
  { value: "30 M", label: "malware samples analyzed per day" },
  { value: "1K+", label: "incident response engagements a year" },
  { value: "150+", label: "trusted partner of law firms" },
];

const trustedServiceClients = [...CLIENT_LOGOS, ...CLIENT_LOGOS].slice(0, 12);

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
      className="flex min-h-[156px] flex-col items-center justify-center border border-[#2563eb] bg-[linear-gradient(115deg,#2563eb_0%,#2563eb_100%)] px-6 py-7 text-center text-white shadow-[0_28px_80px_rgba(37,99,235,0.22)]"
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

function TrustedServiceClients() {
  const { ref: headingRef, animationProps: headingAnim } = useScrollAnimation({
    preset: "fadeUp",
  });

  return (
    <div className="mt-28 border-t border-white/10 pt-24 sm:mt-32 sm:pt-28 lg:mt-36 lg:pt-32">
      <motion.h2
        ref={headingRef}
        {...headingAnim}
        className="text-center text-[34px] font-bold leading-[1.2] text-white sm:text-[40px] lg:text-[44.666px]"
      >
        Trusted by <span className="text-[#2563eb]">the best</span>
      </motion.h2>

      <div className="mt-20 grid grid-cols-2 items-center gap-x-12 gap-y-16 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-20 lg:gap-y-20">
        {trustedServiceClients.map((client, index) => (
          <motion.div
            key={`${client.name}-${index}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.035, ease: "easeOut" }}
            className="flex h-20 items-center justify-center"
          >
            <div className="relative h-16 w-full max-w-[190px] opacity-88 grayscale brightness-0 invert transition hover:opacity-100">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function ServicesResponseSection() {
  return (
    <section className="relative overflow-hidden bg-primary-dark py-24 text-white sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-[-18%] right-[8%] h-[640px] w-[640px] rounded-full bg-[#2563eb]/10 blur-3xl" />
        <div
          className="absolute bottom-0 right-0 h-[58%] w-[56%] opacity-[0.12]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #2563eb 0px, #2563eb 3px, transparent 3px, transparent 18px)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1720px] px-5 sm:px-8 lg:px-[10rem]">
        <div className="mb-10 h-px w-80 bg-[#2563eb]" />
        <AnimatedSectionBlock
          preset="ttb"
          className="mb-24 max-w-5xl text-[34px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-[44.666px]"
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
            <span className="mb-7 block text-[14.4px] font-semibold uppercase leading-[1.4] tracking-[2.88px] text-[#2563eb]">
              SERVICES
            </span>
            <h3 className="mb-8 text-[30px] font-medium leading-[1.18] text-white sm:text-[36px] lg:text-[40px]">
              Threat Intel &
              <br />
              Incident Response
            </h3>
            <p className="max-w-[640px] text-[18px] font-semibold leading-[1.55] text-white/78 sm:text-[21px]">
              Unit 42&apos;s world-renowned threat researchers, elite incident
              responders and expert security consultants will guide you with a
              threat-informed approach before, during and after an incident.
            </p>

            <div className="mt-10 flex flex-wrap gap-12">
              <div>
                <p className="text-[42px] font-medium leading-none text-white sm:text-[52px]">
                  1K+
                </p>
                <p className="mt-2 text-[14px] font-semibold uppercase leading-[1.35] text-white/82">
                  Matters per year
                </p>
              </div>
              <div>
                <p className="text-[42px] font-medium leading-none text-white sm:text-[52px]">
                  24 / 7 / 365
                </p>
                <p className="mt-2 text-[14px] font-semibold uppercase leading-[1.35] text-white/82">
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
              className="group mb-20 ml-auto hidden w-fit items-center rounded-full border-2 border-[#2563eb] px-8 py-4 text-[14.8px] font-semibold leading-[1.4] text-white transition duration-300 hover:bg-[#2563eb] lg:flex"
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

        <TrustedServiceClients />
      </div>
    </section>
  );
}
