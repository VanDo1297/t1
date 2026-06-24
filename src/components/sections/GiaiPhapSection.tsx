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
  const [tabsPinned, setTabsPinned] = useState(false);
  const [tabsHeight, setTabsHeight] = useState(0);
  const containerRef = useRef<HTMLElement | null>(null);
  const tabsBarRef = useRef<HTMLDivElement | null>(null);
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
    const subNavHeight = 56;

    const updateTabsPin = () => {
      const container = containerRef.current;
      const tabsBar = tabsBarRef.current;
      if (!container || !tabsBar) return;

      const tabsBarHeight = tabsBar.offsetHeight;
      const rect = container.getBoundingClientRect();

      setTabsHeight(tabsBarHeight);
      setTabsPinned(rect.top <= subNavHeight && rect.bottom > subNavHeight + tabsBarHeight);
    };

    updateTabsPin();
    window.addEventListener("scroll", updateTabsPin, { passive: true });
    window.addEventListener("resize", updateTabsPin);

    return () => {
      window.removeEventListener("scroll", updateTabsPin);
      window.removeEventListener("resize", updateTabsPin);
    };
  }, []);

  useEffect(() => {
    const tabList = tabListRef.current;
    const activeTab = tabRefs.current[activeIndex];

    if (!tabList || !activeTab) {
      return;
    }

    if (tabList.scrollWidth <= tabList.clientWidth + 1) {
      tabList.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    const padding = 24;
    const currentLeft = tabList.scrollLeft;
    const activeLeft = activeTab.offsetLeft;
    const activeRight = activeLeft + activeTab.offsetWidth;
    const visibleLeft = currentLeft + padding;
    const visibleRight = currentLeft + tabList.clientWidth - padding;

    let nextScrollLeft = currentLeft;
    if (activeLeft < visibleLeft) {
      nextScrollLeft = activeLeft - padding;
    } else if (activeRight > visibleRight) {
      nextScrollLeft = activeRight - tabList.clientWidth + padding;
    } else {
      return;
    }

    tabList.scrollTo({
      left: Math.max(0, nextScrollLeft),
      behavior: "smooth",
    });
  }, [activeIndex]);

  const { ref: titleRef, animationProps: titleAnim } = useScrollAnimation({
    preset: "ttb",
  });

  return (
    <section
      ref={containerRef}
      id="giai-phap"
      className="relative text-[#1a1a1a]"
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
      {tabsPinned && <div style={{ height: tabsHeight }} />}
      <div
        ref={tabsBarRef}
        className={`z-[39] border-b bg-transparent px-5 py-4 backdrop-blur-md sm:px-8 ${
          tabsPinned ? "fixed left-0 right-0 top-[56px]" : "sticky top-[56px]"
        } ${tabsPinned ? "border-white/15" : "border-gray-200"}`}
      >
        <div className="flex items-end gap-4 sm:gap-8">
          <div ref={tabListRef} className="scrollbar-none flex min-w-0 flex-1 items-end gap-4 overflow-x-auto sm:gap-6 lg:gap-8" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
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
                    color: i === activeIndex ? tabColor : tabsPinned ? "rgba(255,255,255,0.72)" : undefined,
                  }}
                  className={`flex min-w-max flex-1 justify-center whitespace-nowrap border-b-2 px-1 pb-3 text-center font-bold capitalize tracking-[0.05em] transition-colors ${
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
            className={`flex shrink-0 items-center justify-center border-b-2 border-transparent pb-3 transition hover:opacity-70 sm:hidden ${
              tabsPinned ? "text-white/80" : "text-[#1a1a1a]"
            }`}
          >
            <ArrowRight size={18} />
          </Link>
          <div className="hidden shrink-0 sm:block">
            <Link
              href={`/${locale}${data.tabs[activeIndex]?.ctaHref || "/"}`}
              className={`flex items-center gap-2 whitespace-nowrap border-b-2 border-transparent pb-3 font-medium transition hover:opacity-70 ${
                tabsPinned ? "text-white/80" : "text-[#1a1a1a]"
              }`}
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

const baseTabBgImage = "/assets/bg/Unknown-13.jpg";

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
      className="relative overflow-hidden bg-[#06112f]"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={baseTabBgImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {tab.bgImageUrl && (
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <div className="relative aspect-[16/9] w-[min(102vw,840px)] opacity-30">
            <Image
              src={tab.bgImageUrl}
              alt=""
              fill
              sizes="(max-width: 768px) 102vw, 840px"
              className="object-contain"
            />
          </div>
        </div>
      )}

      <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#06112f]/95 via-[#06112f]/68 to-[#06112f]/35" />

      <div data-content className="relative z-30 px-5 py-24 sm:px-8">
        {/* Title large on top */}
        <motion.div
          ref={titleRef}
          {...titleAnim}
          className="relative mb-12 pt-8"
        >
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 h-px w-[180px] max-w-[45vw]"
            style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
          />
          <h2
            className="font-bold uppercase tracking-[0.05em] text-white"
            style={{ fontSize: "clamp(32px, 3vw, 56px)" }}
          >
            {tab.title}
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Description + Stats + CTA */}
          <motion.div ref={leftRef} {...leftAnim}>
            <p className="mb-10 leading-[1.7] text-white/80" style={{ fontSize: "clamp(16px, 1.1vw, 24px)" }}>
              {tab.description}
            </p>

            {tab.stats?.length > 0 && (
              <div className="mb-10 flex gap-12">
                {tab.stats.map((stat, i) => (
                  <div key={i}>
                    <span className="font-bold leading-none text-white" style={{ fontSize: "clamp(36px, 2.8vw, 52px)" }}>
                      {stat.value}
                    </span>
                    <p className="mt-2 font-bold uppercase tracking-[0.15em] text-white/55" style={{ fontSize: "clamp(12px, 0.7vw, 14px)" }}>
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
