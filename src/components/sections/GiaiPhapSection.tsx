"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { GiaiPhapData } from "@/sanity/queries";

interface GiaiPhapSectionProps {
  data: GiaiPhapData;
  locale: string;
}

export function GiaiPhapSection({ data, locale }: GiaiPhapSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      for (let i = 0; i < data.tabs.length; i++) {
        const el = sectionRefs.current[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const threshold = rect.height * 0.3;
        if (rect.top < window.innerHeight - threshold && rect.bottom > threshold) {
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data.tabs.length]);

  const { ref: titleRef, animationProps: titleAnim } = useScrollAnimation({
    preset: "ttb",
  });

  return (
    <section id="giai-phap" className="bg-primary-dark text-white">
      {/* Section title */}
      <div className="px-5 pt-20 pb-10 sm:px-8">
        <motion.h2
          ref={titleRef}
          {...titleAnim}
          className="whitespace-pre-line text-[36px] font-medium leading-[1.2] text-white sm:text-[44px]"
        >
          {locale === "vi"
            ? "Giới thiệu các Nền tảng,\nđược hỗ trợ bởi Precision AI"
            : "Introducing the Platforms,\npowered by Precision AI"}
        </motion.h2>
      </div>

      {/* Sticky tab nav */}
      <div className="sticky top-[56px] z-30 bg-primary-dark/95 backdrop-blur-xl border-b border-white/10 py-4 px-5 sm:px-8">
        <div className="flex items-center gap-6 overflow-x-auto">
          {data.tabs.map((tab, i) => (
            <a
              key={i}
              href={`#giai-phap-${i}`}
              className={`whitespace-nowrap border-b-2 pb-3 text-[15px] font-bold uppercase tracking-[0.1em] transition-colors ${
                i === activeIndex
                  ? "border-[#2563eb] text-white"
                  : "border-transparent text-white/50 hover:text-white/80"
              }`}
            >
              {tab.label}
            </a>
          ))}
          <div className="ml-auto">
            <Link
              href={`/${locale}${data.tabs[activeIndex]?.ctaHref || "/"}`}
              className="flex items-center gap-2 whitespace-nowrap text-[15px] font-medium text-white/60 transition hover:text-white"
            >
              {data.viewAllLabel}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Tab contents — one visible at a time */}
      <div className="px-5 sm:px-8">
        {data.tabs.map((tab, index) => (
          <TabContent
            key={index}
            tab={tab}
            index={index}
            locale={locale}
            setRef={(el) => {
              sectionRefs.current[index] = el;
            }}
          />
        ))}
      </div>
    </section>
  );
}

function TabContent({
  tab,
  index,
  locale,
  setRef,
}: {
  tab: GiaiPhapSectionProps["data"]["tabs"][number];
  index: number;
  locale: string;
  setRef: (el: HTMLDivElement | null) => void;
}) {
  const { ref: leftRef, animationProps: leftAnim } = useScrollAnimation({
    preset: "ltr",
    margin: "-40% 0px -40% 0px",
  });

  const { ref: rightRef, animationProps: rightAnim } = useScrollAnimation({
    preset: "rtl",
    delay: 0.2,
    margin: "-40% 0px -40% 0px",
  });

  return (
    <div
      id={`giai-phap-${index}`}
      ref={setRef}
      className={`min-h-[70vh] py-20 ${index > 0 ? "border-t border-white/10" : ""}`}
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left - Text */}
        <motion.div
          ref={leftRef}
          {...leftAnim}
        >
          <p className="mb-4 text-[15px] font-bold uppercase tracking-[0.15em] text-[#2563eb]">
            {tab.label}
          </p>
          <h2 className="mb-6 text-[40px] font-medium leading-[1.15] text-white">
            {tab.title}
          </h2>
          <p className="mb-10 text-[18px] leading-[1.7] text-white/55">
            {tab.description}
          </p>

          {tab.stats?.length > 0 && (
            <div className="mb-10 flex gap-12">
              {tab.stats.map((stat, i) => (
                <div key={i}>
                  <span className="text-[40px] font-medium leading-none text-white">
                    {stat.value}
                  </span>
                  <p className="mt-2 text-[13px] font-bold uppercase tracking-[0.15em] text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          <Link
            href={`/${locale}${tab.ctaHref}`}
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-[15px] font-semibold text-white transition hover:bg-white/5"
          >
            {tab.ctaLabel}
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Right - Awards grid */}
        {tab.awards?.length > 0 && (
          <motion.div
            ref={rightRef}
            {...rightAnim}
            className="grid grid-cols-2 gap-4 content-start"
          >
            {tab.awards.map((award, i) => (
              <div
                key={i}
                className="rounded-xl bg-[#2563eb] p-5 transition hover:bg-[#1d4ed8]"
              >
                <p className="mb-3 text-[20px] font-bold text-white">
                  {award.source}
                </p>
                <p className="text-[16px] leading-[1.5] text-white/80">
                  {award.title}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
