"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { GiaiPhapData } from "@/sanity/queries";

interface GiaiPhapSectionProps {
  data: GiaiPhapData;
  locale: string;
}

export function GiaiPhapSection({ data, locale }: GiaiPhapSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const mid = window.innerHeight / 2;
      for (let i = 0; i < data.tabs.length; i++) {
        const el = document.getElementById(`giai-phap-${i}`);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top < mid && rect.bottom > mid) {
          setActiveIndex(i);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data.tabs.length]);

  return (
    <section id="giai-phap" className="bg-primary-dark text-white px-5 sm:px-8">
      {/* Nav for this section */}
      <div className="sticky top-0 z-30 bg-primary-dark/95 backdrop-blur-xl border-b border-white/10 py-4 -mx-5 px-5 sm:-mx-8 sm:px-8">
        <div className="flex flex-wrap items-center gap-6">
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
              className="flex items-center gap-2 text-[15px] font-medium text-white/60 transition hover:text-white"
            >
              {data.viewAllLabel}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* All tabs content stacked */}
      {data.tabs.map((tab, index) => (
        <div
          key={index}
          id={`giai-phap-${index}`}
          className={`grid gap-12 py-20 lg:grid-cols-2 lg:gap-16 ${
            index > 0 ? "border-t border-white/10" : ""
          }`}
        >
          {/* Left - Text */}
          <div>
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
          </div>

          {/* Right - Awards grid */}
          {tab.awards?.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {tab.awards.map((award, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-[#2563eb] p-5 transition hover:bg-[#1d4ed8]"
                >
                  <p className="mb-3 text-[18px] font-bold text-white">
                    {award.source}
                  </p>
                  <p className="text-[14px] leading-[1.5] text-white/80">
                    {award.title}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
