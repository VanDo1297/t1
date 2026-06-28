"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
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
import type { VeDtgData, VeDtgStat, VeDtgRecognition } from "@/sanity/queries";

/* ── Count up hook ── */

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

/* ── Stat card ── */

const statIcons = [Award, Users, Handshake, HeadsetIcon] as const;

function StatCard({ stat, index, delay }: { stat: VeDtgStat; index: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = statIcons[index % statIcons.length];
  const isSpecial = !!stat.specialValue;
  const count = useCountUp(stat.number, isInView, 1.5, delay);

  const radius = 58;
  const strokeW = 5;
  const circumference = 2 * Math.PI * radius;

  return (
    <div ref={ref} className="group flex flex-col items-center text-center cursor-default">
      <div className="relative mb-4" style={{ width: "clamp(100px, 10.5vw, 225px)", height: "clamp(100px, 10.5vw, 225px)" }}>
        <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 130 130">
          <circle cx="65" cy="65" r={radius} fill="none" stroke="rgba(37,99,235,0.12)" strokeWidth={strokeW} className="transition-all duration-300 group-hover:[stroke:rgba(37,99,235,0.3)]" />
          <motion.circle
            cx="65" cy="65" r={radius} fill="none" stroke="#2563eb" strokeWidth={strokeW} strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: 0 } : {}}
            transition={{ duration: 1.2, delay, ease: "easeOut" }}
            className="transition-all duration-300 group-hover:[stroke-width:4]"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 transition-transform duration-300 group-hover:scale-125">
          <Icon className="text-[#2563eb]" style={{ width: "clamp(20px, 1.35vw, 27px)", height: "clamp(20px, 1.35vw, 27px)" }} strokeWidth={1.5} />
          <span className="font-semibold leading-none text-[#1a1a1a]" style={{ fontSize: "clamp(32px, 2.6vw, 48px)" }}>
            {isSpecial ? stat.specialValue : `${count}${stat.suffix}`}
          </span>
        </div>
      </div>
      <p className="font-semibold uppercase tracking-[0.15em] text-gray-700" style={{ fontSize: "clamp(16px, 0.9vw, 21px)" }}>
        {stat.label}
      </p>
      <p className="mt-2 leading-[1.5] text-gray-500" style={{ fontSize: "clamp(14px, 0.75vw, 18px)", maxWidth: "clamp(200px, 11vw, 260px)" }}>
        {stat.desc}
      </p>
    </div>
  );
}

/* ── Recognition bar ── */

const recognitionIcons = [Star, Star, CheckCircle, BadgeCheck] as const;

function RecognitionBar({ recognition, index, delay }: { recognition: VeDtgRecognition; index: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = recognitionIcons[index % recognitionIcons.length];

  return (
    <div ref={ref} className="space-y-1">
      <div className="flex items-center gap-2">
        <Icon className="shrink-0 text-[#2563eb]" style={{ width: 18, height: 18 }} strokeWidth={1.5} />
        <p className="font-semibold uppercase leading-[1.4] tracking-[0.04em] text-gray-600" style={{ fontSize: 14 }}>
          {recognition.label}
        </p>
      </div>
      <motion.div
        className="ml-6 h-[20px] rounded-r-full sm:h-[24px]"
        style={{ background: "linear-gradient(90deg, rgba(37,99,235,0.15) 0%, #2563eb 100%)" }}
        initial={{ width: 0 }}
        animate={isInView ? { width: "90%" } : {}}
        transition={{ duration: 0.75, delay, ease: "easeOut" }}
      />
    </div>
  );
}

/* ── Main section ── */

export function VeDtgSection({ data }: { data: VeDtgData }) {
  const header = useScrollAnimation({ preset: "ltr" });
  const stats = useScrollAnimation({ preset: "ttb", delay: 0.15 });
  const commit = useScrollAnimation({ preset: "ltr" });
  const recog = useScrollAnimation({ preset: "ttb", delay: 0.15 });

  return (
    <section id="ve-dtg" className="relative overflow-hidden bg-white text-[#1a1a1a] pt-10">
      {/* Background image */}
      <Image
        src="/assets/bg/3.jpg"
        alt=""
        fill
        className="object-cover opacity-50"
      />
      <div className="relative z-10 w-full px-5 pt-10 pb-12 sm:px-8 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-24">
        {/* TOP: Heading + Stats */}
        <div className="mb-14 flex flex-col gap-10 lg:mb-16 lg:flex-row lg:items-start lg:gap-10">
          <motion.div ref={header.ref} {...header.animationProps} className="lg:w-[35%] lg:shrink-0">
            <span className="mb-3 block font-bold uppercase tracking-[0.15em] text-[#2563eb]" style={{ fontSize: "clamp(15px, 0.9vw, 18px)" }}>
              {data.kicker}
            </span>
            <h2 className="font-medium leading-[1.15] text-[#1a1a1a]" style={{ fontSize: "clamp(40px, 3vw, 60px)" }}>
              {data.heading}
            </h2>
            <p className="mt-3 leading-[1.6] text-gray-500" style={{ fontSize: "clamp(18px, 1.1vw, 27px)", maxWidth: "clamp(380px, 22vw, 525px)" }}>
              {data.subtitle}
            </p>
          </motion.div>

          <motion.div ref={stats.ref} {...stats.animationProps} className="rounded-2xl bg-white/30 backdrop-blur-sm p-6 grid grid-cols-2 gap-4 sm:gap-6 lg:flex-1 lg:grid-cols-4">
            {data.stats.map((stat, i) => (
              <StatCard key={i} stat={stat} index={i} delay={i * 0.15} />
            ))}
          </motion.div>
        </div>

        {/* BOTTOM: Commitment + Recognition */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-0">
          <motion.div ref={commit.ref} {...commit.animationProps} className="lg:w-[50%] lg:shrink-0">
            <span className="mb-3 block font-bold uppercase tracking-[0.15em] text-gray-500" style={{ fontSize: "clamp(15px, 0.9vw, 18px)" }}>
              {data.commitmentKicker}
            </span>
            <h3 className="font-medium leading-[1.25] text-[#1a1a1a]" style={{ fontSize: "clamp(40px, 3vw, 60px)" }}>
              {data.commitmentHeading}
            </h3>
            <p className="mt-3 leading-[1.6] text-gray-500" style={{ fontSize: "clamp(18px, 1.1vw, 27px)", maxWidth: "clamp(380px, 22vw, 525px)" }}>
              {data.commitmentDesc}
            </p>
          </motion.div>

          <motion.div ref={recog.ref} {...recog.animationProps} className="rounded-2xl bg-white/30 backdrop-blur-sm p-6 lg:flex-1 lg:ml-10">
            <span className="mb-3 block font-bold uppercase tracking-[0.15em] text-gray-500" style={{ fontSize: 14 }}>
              {data.recognitionKicker}
            </span>
            <div className="mt-4 space-y-5">
              {data.recognitions.map((r, i) => (
                <RecognitionBar key={i} recognition={r} index={i} delay={0.3 + i * 0.15} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
