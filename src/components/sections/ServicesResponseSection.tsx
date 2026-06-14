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
import { useTranslations } from "next-intl";

const statKeys = ["researchers", "malware", "incidents", "partners"] as const;

const trustedServiceClients = [...CLIENT_LOGOS, ...CLIENT_LOGOS].slice(0, 12);
const mobileTrustedServiceClients = CLIENT_LOGOS.slice(0, 8);

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

function ServiceStatCard({ statKey }: { statKey: string }) {
  const t = useTranslations("servicesResponse.stats");
  return (
    <div
      className="flex min-h-[156px] flex-col items-center justify-center border border-[#2563eb] bg-[linear-gradient(115deg,#2563eb_0%,#2563eb_100%)] px-6 py-7 text-center text-white shadow-[0_28px_80px_rgba(37,99,235,0.22)]"
    >
      <p className="text-[32px] font-medium leading-none text-white sm:text-[40px] lg:text-[52px]">
        {t(`${statKey}.value`)}
      </p>
      <p className="mt-3 max-w-[260px] text-[14px] font-semibold leading-[1.35] text-white/90 sm:text-[15px] lg:text-[17px]">
        {t(`${statKey}.label`)}
      </p>
    </div>
  );
}

function TrustedServiceClients() {
  const t = useTranslations("partnersSlider");
  const { ref: headingRef, animationProps: headingAnim } = useScrollAnimation({
    preset: "fadeUp",
  });

  return (
    <div className="mt-28 border-t border-white/10 pt-24 sm:mt-32 sm:pt-28 lg:mt-36 lg:pt-32">
      <motion.h2
        ref={headingRef}
        {...headingAnim}
        className="text-center text-[28px] font-bold leading-[1.2] text-white sm:text-[40px] lg:text-[44.666px]"
      >
        {t("heading")} <span className="text-[#2563eb]">{t("headingAccent")}</span>
      </motion.h2>

      <div className="mt-12 overflow-hidden sm:hidden">
        <div className="trusted-logo-marquee flex w-max gap-3">
          {[0, 1].map((track) => (
            <div key={track} className="flex shrink-0 gap-3">
              {mobileTrustedServiceClients.map((client) => (
                <div
                  key={`${client.name}-${track}`}
                  className="flex h-36 w-[72vw] max-w-[320px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-8"
                >
                  <div className="relative h-14 w-full max-w-[150px] opacity-90 grayscale brightness-0 invert">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 hidden items-center gap-x-12 gap-y-16 sm:grid sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-20 lg:gap-y-20">
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
  const t = useTranslations("servicesResponse");

  return (
    <section className="relative overflow-hidden bg-primary-dark py-12 text-white sm:py-16 lg:py-24">
      {/* Animated background — fast grid glide + glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-[-18%] right-[8%] h-[640px] w-[640px] rounded-full bg-[#2563eb]/10 blur-3xl" />
        <div
          className="bg-grid-glide absolute inset-0"
          style={{
            maskImage: "radial-gradient(ellipse at 65% 70%, black 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute -bottom-[10%] -right-[5%] h-[100%] w-[60%]"
          style={{
            background:
              "radial-gradient(circle at 50% 60%, rgba(37,99,235,0.14), transparent 45%)",
            animation: "ai-world-drift 16s ease-in-out infinite alternate",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1720px] px-5 sm:px-8 lg:px-[10rem]">
        <div className="mb-10 h-px w-40 bg-[#2563eb] sm:w-80" />
        <AnimatedSectionBlock
          preset="ttb"
          className="whitespace-pre-line mb-8 max-w-5xl text-[28px] font-medium leading-[1.2] text-white sm:mb-12 sm:text-[40px] lg:mb-16 lg:text-[44.666px]"
        >
          {t("heading")}
        </AnimatedSectionBlock>

        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(560px,1.1fr)] lg:items-center">
          <AnimatedSectionBlock
            preset="ltr"
            delay={0.08}
            className="max-w-[620px]"
          >
            <span className="mb-7 block text-[14.4px] font-semibold uppercase leading-[1.4] tracking-[2.88px] text-[#2563eb]">
              {t("kicker")}
            </span>
            <h3 className="mb-8 text-[22px] font-medium leading-[1.18] text-white sm:text-[26px] lg:text-[30px]">
              {t("title")}
            </h3>
            <p className="max-w-[640px] text-[14px] font-semibold leading-[1.55] text-white/78 sm:text-[15px] lg:text-[17px]">
              {t("desc")}
            </p>

            <div className="mt-10 flex flex-wrap gap-12">
              <div>
                <p className="text-[32px] font-medium leading-none text-white sm:text-[40px] lg:text-[52px]">
                  {t("matters.value")}
                </p>
                <p className="mt-2 text-[14px] font-semibold uppercase leading-[1.35] text-white/82">
                  {t("matters.label")}
                </p>
              </div>
              <div>
                <p className="text-[32px] font-medium leading-none text-white sm:text-[40px] lg:text-[52px]">
                  {t("response.value")}
                </p>
                <p className="mt-2 text-[14px] font-semibold uppercase leading-[1.35] text-white/82">
                  {t("response.label")}
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
              {t("cta")}
              <ArrowRight size={20} className="ml-4 transition-transform group-hover:translate-x-1" />
            </a>

            <div className="grid gap-6 sm:grid-cols-2">
              {statKeys.map((key) => (
                <ServiceStatCard key={key} statKey={key} />
              ))}
            </div>
          </AnimatedSectionBlock>
        </div>

        <TrustedServiceClients />
      </div>
    </section>
  );
}
