"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
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

  const isSnapping = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isSnapping.current) return;

      for (let i = 0; i < data.tabs.length; i++) {
        const el = sectionRefs.current[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const threshold = rect.height * 0.3;
        if (rect.top < window.innerHeight - threshold && rect.bottom > threshold) {
          setActiveIndex(i);

          // Auto-snap: when 80% of section has been scrolled past, snap to next
          const scrolledPast = -rect.top / rect.height;
          if (scrolledPast > 0.8 && scrolledPast < 1 && i < data.tabs.length - 1) {
            const next = sectionRefs.current[i + 1];
            if (next) {
              isSnapping.current = true;
              next.scrollIntoView({ behavior: "smooth" });
              setTimeout(() => { isSnapping.current = false; }, 800);
            }
          }
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
    <section id="giai-phap" className="bg-white text-[#1a1a1a]">
      {/* Section title */}
      <div className="px-5 pt-20 pb-10 sm:px-8">
        <motion.h2
          ref={titleRef}
          {...titleAnim}
          className="whitespace-pre-line font-medium leading-[1.2] text-[#1a1a1a]"
          style={{ fontSize: "clamp(36px, 3vw, 60px)" }}
        >
          {locale === "vi"
            ? "Giới thiệu các Nền tảng,\nđược hỗ trợ bởi Precision AI"
            : "Introducing the Platforms,\npowered by Precision AI"}
        </motion.h2>
      </div>

      {/* Sticky tab nav */}
      <div className="sticky top-[56px] z-30 backdrop-blur-md border-b border-gray-200 py-4 px-5 sm:px-8">
        <div className="flex items-center gap-6 overflow-x-auto">
          {data.tabs.map((tab, i) => {
            const tabColor = tabColors[i % tabColors.length];
            return (
              <a
                key={i}
                href={`#giai-phap-${i}`}
                style={{
                  fontSize: "clamp(15px, 0.9vw, 18px)",
                  borderColor: i === activeIndex ? tabColor : "transparent",
                  color: i === activeIndex ? tabColor : undefined,
                }}
                className={`whitespace-nowrap border-b-2 pb-3 font-bold uppercase tracking-[0.1em] transition-colors ${
                  i === activeIndex
                    ? ""
                    : "text-gray-400 hover:text-[#1a1a1a]"
                }`}
              >
                {tab.label}
              </a>
            );
          })}
          <div className="ml-auto">
            <Link
              href={`/${locale}${data.tabs[activeIndex]?.ctaHref || "/"}`}
              className="flex items-center gap-2 whitespace-nowrap text-[15px] font-medium text-gray-400 transition hover:text-[#1a1a1a]"
            >
              {data.viewAllLabel}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Tab contents — one visible at a time */}
      <div>
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

const tabColors = ["#2563eb", "#7c3aed", "#0891b2", "#059669"];

const tabBgImages = [
  "/assets/giaiphap/giaipgapcongnghe.jpg",
  "/assets/giaiphap/dichvu.jpg",
  "/assets/giaiphap/ai.jpg",
  "/assets/giaiphap/support.jpg",
];

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
  const { ref: titleRef, animationProps: titleAnim } = useScrollAnimation({
    preset: "ttb",
  });

  const { ref: leftRef, animationProps: leftAnim } = useScrollAnimation({
    preset: "ltr",
    delay: 0.15,
  });

  const { ref: rightRef, animationProps: rightAnim } = useScrollAnimation({
    preset: "rtl",
    delay: 0.2,
  });

  const bgImage = tabBgImages[index % tabBgImages.length];
  const isDark = index === 0 || index === 1;

  return (
    <div
      id={`giai-phap-${index}`}
      ref={setRef}
      className="relative overflow-hidden"
      style={{ minHeight: "calc(100dvh - 56px - 56px)" }}
    >
      {/* Background image */}
      <div className={`absolute inset-0 ${index === 0 ? "bg-black" : index === 1 ? "bg-[rgb(36,38,55)]" : ""}`}>
        <Image src={bgImage} alt="" fill className={index === 0 ? "object-contain object-center scale-75 ml-[10%]" : index === 1 ? "object-contain object-center scale-50" : "object-cover"} />
      </div>

      <div className="relative z-10 px-5 py-20 sm:px-8">
        {/* Title large on top */}
        <motion.h2
          ref={titleRef}
          {...titleAnim}
          className="mb-12 font-bold uppercase tracking-[0.05em]"
          style={{ fontSize: "clamp(32px, 3vw, 56px)", color: tabColors[index % tabColors.length] }}
        >
          {tab.title}
        </motion.h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Description + Stats + CTA */}
          <motion.div ref={leftRef} {...leftAnim}>
            <p className={`mb-10 leading-[1.7] ${isDark ? "text-white/70" : "text-gray-600"}`} style={{ fontSize: "clamp(16px, 1.1vw, 24px)" }}>
              {tab.description}
            </p>

            {tab.stats?.length > 0 && (
              <div className="mb-10 flex gap-12">
                {tab.stats.map((stat, i) => (
                  <div key={i}>
                    <span className={`font-bold leading-none ${isDark ? "text-white" : "text-[#1a1a1a]"}`} style={{ fontSize: "clamp(36px, 2.8vw, 52px)" }}>
                      {stat.value}
                    </span>
                    <p className={`mt-2 font-bold uppercase tracking-[0.15em] ${isDark ? "text-white/50" : "text-gray-400"}`} style={{ fontSize: "clamp(12px, 0.7vw, 14px)" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <Link
              href={`/${locale}${tab.ctaHref}`}
              className="btn-gradient inline-flex items-center gap-3 rounded-full px-8 py-4 font-semibold"
              style={{ fontSize: "clamp(15px, 0.9vw, 18px)" }}
            >
              {tab.ctaLabel}
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Right - Solution items grid */}
          {tab.awards?.length > 0 && (
            <motion.div
              ref={rightRef}
              {...rightAnim}
              className="grid grid-cols-2 gap-4 content-start"
            >
              {tab.awards.map((award, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 rounded-xl px-5 py-6 transition ${
                    isDark
                      ? `bg-gradient-to-r from-[#2563eb] to-[#60a5fa] hover:from-[#1d4ed8] hover:to-[#3b82f6]`
                      : "border border-gray-200 bg-white/70 backdrop-blur-sm hover:bg-white"
                  }`}
                >
                  <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${isDark ? "bg-white/20" : "bg-[#2563eb]/10"}`}>
                    <ArrowRight size={14} className={isDark ? "text-white" : "text-[#2563eb]"} />
                  </div>
                  <div>
                    <p className={`font-bold ${isDark ? "text-white" : "text-[#1a1a1a]"}`} style={{ fontSize: "clamp(14px, 1.1vw, 22px)" }}>
                      {award.source}
                    </p>
                    <p className={`mt-1 leading-[1.4] ${isDark ? "text-white/70" : "text-gray-500"}`} style={{ fontSize: "clamp(12px, 0.8vw, 16px)" }}>
                      {award.title}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
