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
  const tabListRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<(HTMLAnchorElement | null)[]>([]);

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

          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data.tabs.length]);

  useEffect(() => {
    const tabList = tabListRef.current;
    const activeTab = tabRefs.current[activeIndex];

    if (
      !tabList ||
      !activeTab ||
      window.matchMedia("(min-width: 640px)").matches
    ) {
      return;
    }

    const centeredScrollLeft =
      activeTab.offsetLeft - (tabList.clientWidth - activeTab.offsetWidth) / 2;

    tabList.scrollTo({
      left: Math.max(0, centeredScrollLeft),
      behavior: "smooth",
    });
  }, [activeIndex]);

  const { ref: titleRef, animationProps: titleAnim } = useScrollAnimation({
    preset: "ttb",
  });

  return (
    <section
      id="giai-phap"
      className="relative overflow-x-clip overflow-y-visible text-[#1a1a1a]"
      style={{
        background: `
          linear-gradient(to bottom, white 0%, transparent 15%),
          linear-gradient(to right, rgb(128,220,255), white 45%, white 55%, rgb(128,220,255)),
          radial-gradient(ellipse 40% 30% at 15% 25%, rgba(128,220,255,0.4) 0%, transparent 70%),
          radial-gradient(ellipse 35% 25% at 85% 40%, rgba(128,220,255,0.35) 0%, transparent 70%),
          radial-gradient(ellipse 30% 20% at 25% 60%, rgba(128,220,255,0.3) 0%, transparent 70%),
          radial-gradient(ellipse 40% 25% at 70% 75%, rgba(128,220,255,0.4) 0%, transparent 70%),
          radial-gradient(ellipse 25% 20% at 50% 15%, rgba(128,220,255,0.25) 0%, transparent 70%),
          white
        `,
      }}
    >
      {/* Section title */}
      <div className="px-5 pt-20 pb-10 sm:px-8">
        <motion.h2
          ref={titleRef}
          {...titleAnim}
          className="whitespace-pre-line font-medium leading-[1.2] text-[#1a1a1a]"
          style={{ fontSize: "clamp(36px, 3vw, 60px)" }}
        >
          {data.sectionHeading}
        </motion.h2>
      </div>

      {/* Sticky tab nav */}
      <div className="sticky top-[56px] z-30 bg-white/80 bg-transparent! backdrop-blur-md border-b border-gray-200 py-4 px-5 sm:px-8">
        <div className="flex items-end">
          <div ref={tabListRef} className="flex min-w-0 flex-1 items-end gap-4 overflow-x-auto pr-4 sm:justify-between sm:gap-0 sm:pr-12" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {data.tabs.map((tab, i) => {
              const tabColor = tabColors[i % tabColors.length];
              return (
                <a
                  key={i}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  href={`#giai-phap-${i}`}
                  style={{
                    fontSize: "clamp(12px, 1.2vw, 22px)",
                    borderColor: i === activeIndex ? tabColor : "transparent",
                    color: i === activeIndex ? tabColor : undefined,
                  }}
                  className={`whitespace-nowrap border-b-2 pb-3 font-bold capitalize tracking-[0.05em] transition-colors ${
                    i === activeIndex
                      ? ""
                      : "text-[#1a1a1a] hover:opacity-70"
                  }`}
                >
                  {tab.label}
                </a>
              );
            })}
          </div>
          <Link
            href={`/${locale}${data.tabs[activeIndex]?.ctaHref || "/"}`}
            aria-label={data.viewAllLabel}
            className="mb-1.5 flex shrink-0 items-center justify-center pb-3 text-[#1a1a1a] transition hover:opacity-70 sm:hidden"
          >
            <ArrowRight size={18} />
          </Link>
          <div className="hidden shrink-0 pb-3 sm:block sm:ml-8">
            <Link
              href={`/${locale}${data.tabs[activeIndex]?.ctaHref || "/"}`}
              className="flex items-center mb-1.5 gap-2 whitespace-nowrap font-medium text-[#1a1a1a] transition hover:opacity-70"
              style={{ fontSize: "clamp(15px, 0.9vw, 18px)" }}
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
const tabGradients = [
  "linear-gradient(to right, #2563eb, #60a5fa)",
  "linear-gradient(to right, #7c3aed, #a78bfa)",
  "linear-gradient(to right, #0891b2, #22d3ee)",
  "linear-gradient(to right, #059669, #34d399)",
];

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

  const color = tabColors[index % tabColors.length];
  const gradient = tabGradients[index % tabGradients.length];

  return (
    <div
      id={`giai-phap-${index}`}
      ref={setRef}
      className="relative overflow-hidden"
    >
      {tab.bgImageUrl && (
        <div
          className="absolute inset-0 z-0"
          style={{
            maskImage: "radial-gradient(ellipse 60% 55% at center, black 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 55% at center, black 30%, transparent 100%)",
          }}
        >
          <Image
            src={tab.bgImageUrl}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      )}

      <div data-content className="relative z-10 px-5 py-20 sm:px-8">
        {/* Title large on top */}
        <motion.h2
          ref={titleRef}
          {...titleAnim}
          className="mb-12 font-bold uppercase tracking-[0.05em]"
          style={{ fontSize: "clamp(32px, 3vw, 56px)", color }}
        >
          {tab.title}
        </motion.h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Description + Stats + CTA */}
          <motion.div ref={leftRef} {...leftAnim}>
            <p className="mb-10 leading-[1.7]" style={{ fontSize: "clamp(16px, 1.1vw, 24px)", color: "#374151" }}>
              {tab.description}
            </p>

            {tab.stats?.length > 0 && (
              <div className="mb-10 flex gap-12">
                {tab.stats.map((stat, i) => (
                  <div key={i}>
                    <span className="font-bold leading-none" style={{ fontSize: "clamp(36px, 2.8vw, 52px)", color }}>
                      {stat.value}
                    </span>
                    <p className="mt-2 font-bold uppercase tracking-[0.15em] text-gray-400" style={{ fontSize: "clamp(12px, 0.7vw, 14px)" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <Link
              href={`/${locale}${tab.ctaHref}`}
              className="inline-flex items-center gap-3 rounded-full px-8 py-4 font-semibold text-white"
              style={{ fontSize: "clamp(15px, 0.9vw, 18px)", background: gradient }}
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
              className="grid grid-cols-2 grid-cols-1! gap-4 content-start sm:grid-cols-2!"
            >
              {tab.awards.map((award, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl px-5 py-6 transition"
                  style={{ background: gradient }}
                >
                  <div
                    className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                  >
                    <ArrowRight size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white" style={{ fontSize: "clamp(14px, 1.1vw, 22px)" }}>
                      {award.source}
                    </p>
                    <p className="mt-1 leading-[1.4]" style={{ fontSize: "clamp(12px, 0.8vw, 16px)", color: "rgba(255,255,255,0.7)" }}>
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
