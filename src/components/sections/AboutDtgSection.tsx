"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Award,
  Users,
  Handshake,
  HeadsetIcon,
  ShieldCheck,
  Star,
  CheckCircle,
  BadgeCheck,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslations } from "next-intl";

/* ------------------------------------------------------------------ */
/*  Animated count hook                                                */
/* ------------------------------------------------------------------ */

function useCountUp(end: number, isInView: boolean, duration = 1.5, delay = 0) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!isInView || hasRun.current) return;
    hasRun.current = true;

    const timeout = setTimeout(() => {
      const start = performance.now();
      const step = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * end));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, end, duration, delay]);

  return count;
}

/* ------------------------------------------------------------------ */
/*  Circle stat card with animated stroke + count                      */
/* ------------------------------------------------------------------ */

const statIcons = [Award, Users, Handshake, HeadsetIcon] as const;
const statNumbers = [23, 500, 30, 0] as const;
const statSuffixes = ["+", "+", "+", ""] as const;
const statSpecialValue = "24/7";

function StatCard({
  index,
  delay,
}: {
  index: number;
  delay: number;
}) {
  const t = useTranslations("aboutDtg.stats");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const Icon = statIcons[index];
  const isSpecial = index === 3;
  const count = useCountUp(statNumbers[index], isInView, 1.5, delay);

  const radius = 58;
  const strokeW = 2.5;
  const circumference = 2 * Math.PI * radius;

  return (
    <div ref={ref} className="group flex flex-col items-center text-center cursor-default">
      {/* Circle with icon + number inside */}
      <div className="relative mb-4 h-32 w-32 sm:h-40 sm:w-40 lg:h-44 lg:w-44">
        <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 130 130">
          {/* Background ring */}
          <circle
            cx="65"
            cy="65"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.10)"
            strokeWidth={strokeW}
            className="transition-all duration-300 group-hover:[stroke:rgba(37,99,235,0.3)]"
          />
          {/* Animated blue ring */}
          <motion.circle
            cx="65"
            cy="65"
            r={radius}
            fill="none"
            stroke="#2563eb"
            strokeWidth={strokeW}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: circumference * 0.05 } : {}}
            transition={{ duration: 1.2, delay, ease: "easeOut" }}
            className="transition-all duration-300 group-hover:[stroke-width:4]"
          />
        </svg>
        {/* Icon + Number centered inside circle */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 transition-transform duration-300 group-hover:scale-125">
          <Icon className="h-5 w-5 text-[#2563eb] sm:h-6 sm:w-6" strokeWidth={1.5} />
          <span className="text-[24px] font-semibold leading-none text-white sm:text-[32px] lg:text-[36px]">
            {isSpecial ? statSpecialValue : `${count}${statSuffixes[index]}`}
          </span>
        </div>
      </div>

      <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/80 sm:text-[12px]">
        {t(`${index}.label`)}
      </p>
      <p className="mt-1.5 max-w-[170px] text-[11px] leading-[1.45] text-white/50 sm:text-[12px]">
        {t(`${index}.desc`)}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Recognition bar                                                    */
/* ------------------------------------------------------------------ */

const recognitionIcons = [Star, Star, CheckCircle, BadgeCheck] as const;

function RecognitionBar({
  index,
  delay,
}: {
  index: number;
  delay: number;
}) {
  const t = useTranslations("aboutDtg.recognition");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const Icon = recognitionIcons[index];
  const widths = [92, 80, 88, 96];

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center gap-3">
        <Icon className="h-4 w-4 shrink-0 text-[#2563eb] sm:h-5 sm:w-5" strokeWidth={1.5} />
        <p className="text-[12px] font-semibold uppercase leading-[1.5] tracking-[0.04em] text-white/82 sm:text-[13px]">
          {t(`${index}.label`)}
        </p>
      </div>
      <motion.div
        className="ml-7 h-[5px] rounded-r-full sm:ml-8 sm:h-[6px]"
        style={{
          background: "linear-gradient(90deg, rgba(37,99,235,0.15) 0%, #2563eb 100%)",
        }}
        initial={{ width: 0 }}
        animate={isInView ? { width: `${widths[index]}%` } : {}}
        transition={{ duration: 0.75, delay, ease: "easeOut" }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */

export function AboutDtgSection() {
  const t = useTranslations("aboutDtg");

  const { ref: headerRef, animationProps: headerAnim } = useScrollAnimation({
    preset: "ltr",
    margin: "-5% 0px -5% 0px",
  });

  const { ref: statsRef, animationProps: statsAnim } = useScrollAnimation({
    preset: "ttb",
    delay: 0.15,
  });

  const { ref: commitRef, animationProps: commitAnim } = useScrollAnimation({
    preset: "ltr",
  });

  const { ref: recogRef, animationProps: recogAnim } = useScrollAnimation({
    preset: "ttb",
    delay: 0.15,
  });

  return (
    <section className="relative overflow-hidden bg-primary-dark text-white">
      {/* Animated background — same as StatsSection */}
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <div className="ai-world-bg absolute -inset-[12%]" />
        <div className="ai-world-grid absolute inset-0 opacity-80" />
        <div className="ai-world-scan absolute left-0 top-[8%] h-[84%] w-[58%] blur-[1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_44%_46%,transparent_0%,rgba(9,22,42,0.2)_42%,rgba(9,22,42,0.88)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary-dark via-primary-dark/82 to-transparent" />
      </div>
      {/* Diagonal stripes — top right */}
      <div className="absolute top-0 right-0 h-[52%] w-[45%] overflow-hidden opacity-[0.16]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #2563eb 0px, #2563eb 1px, transparent 1px, transparent 9px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary-dark" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1720px] px-4 pt-10 pb-12 sm:px-8 sm:pt-14 sm:pb-16 lg:px-[10rem] lg:pt-16 lg:pb-24">
        {/* ============ TOP: Heading + Stats ============ */}
        <div className="mb-14 flex flex-col gap-10 lg:mb-20 lg:flex-row lg:items-start lg:gap-0">
          {/* Left: Title — ltr animation */}
          <motion.div
            ref={headerRef}
            {...headerAnim}
            className="lg:w-[34%] lg:shrink-0"
          >
            <span className="mb-3 block text-[12px] font-semibold uppercase leading-[1.4] tracking-[2.4px] text-[#2563eb] sm:text-[13px]">
              {t("kicker")}
            </span>
            <h2 className="text-[24px] font-bold leading-[1.15] text-white sm:text-[32px] lg:text-[36px]">
              {t.rich("heading", {
                accent: (chunks) => (
                  <span className="text-[#2563eb]">{chunks}</span>
                ),
              })}
            </h2>
            <p className="mt-3 max-w-[380px] text-[13px] font-medium leading-[1.6] text-white/55 sm:text-[14px]">
              {t("subtitle")}
            </p>
          </motion.div>

          {/* Right: 4 stat cards with circle — ttb animation */}
          <motion.div
            ref={statsRef}
            {...statsAnim}
            className="grid grid-cols-2 gap-6 sm:gap-8 lg:flex-1 lg:grid-cols-4"
          >
            {[0, 1, 2, 3].map((i) => (
              <StatCard key={i} index={i} delay={i * 0.15} />
            ))}
          </motion.div>
        </div>

        {/* ============ BOTTOM: 2-column grid ============ */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-0">
          {/* Column 1: Our Commitment + shield — ltr */}
          <motion.div ref={commitRef} {...commitAnim} className="lg:w-[50%] lg:shrink-0">
            <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50 sm:text-[12px]">
              {t("commitment.kicker")}
            </span>
            <div className="flex items-start gap-6">
              <div className="flex-1">
                <h3 className="text-[20px] font-bold leading-[1.25] text-white sm:text-[24px] lg:text-[26px]">
                  {t.rich("commitment.heading", {
                    accent: (chunks) => (
                      <span className="text-[#2563eb]">{chunks}</span>
                    ),
                  })}
                </h3>
                <p className="mt-3 max-w-[380px] text-[12px] font-medium leading-[1.6] text-white/50 sm:text-[13px]">
                  {t("commitment.desc")}
                </p>
              </div>
              {/* Shield icon */}
              <div className="hidden shrink-0 sm:block">
                <div className="relative flex h-32 w-32 items-center justify-center lg:h-36 lg:w-36">
                  <div className="absolute inset-0 rounded-xl bg-[#2563eb]/5" />
                  <div className="absolute inset-2 rounded-xl border border-[#2563eb]/15" />
                  <ShieldCheck className="h-12 w-12 text-[#2563eb]/60 lg:h-14 lg:w-14" strokeWidth={1} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Industry Recognition — ttb */}
          <motion.div ref={recogRef} {...recogAnim} className="lg:flex-1 lg:pl-10">
            <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50 sm:text-[12px]">
              {t("recognitionKicker")}
            </span>
            <div className="mt-4 space-y-5">
              {[0, 1, 2, 3].map((i) => (
                <RecognitionBar key={i} index={i} delay={0.3 + i * 0.15} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
