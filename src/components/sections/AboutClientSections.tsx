"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HistoryMilestone {
  month: string;
  content: string;
  imageUrl?: string;
}

interface HistoryYear {
  year: string;
  imageUrl?: string;
  thumbnailImageUrl?: string;
  milestones: HistoryMilestone[];
}

interface Props {
  historyYears: HistoryYear[];
  certificates?: unknown[];
  certificatesTitle?: string;
  locale: string;
}

export function AboutClientSections({
  historyYears,
}: Props) {
  const [activeYear, setActiveYear] = useState(historyYears[0]?.year || "2021");
  const activeData = historyYears.find((y) => y.year === activeYear);
  const activeIndex = Math.max(0, historyYears.findIndex((y) => y.year === activeYear));
  const railRef = useRef<HTMLDivElement | null>(null);
  const yearRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleYearChange = (year: string) => {
    setActiveYear(year);
  };

  useEffect(() => {
    const rail = railRef.current;
    const activeButton = yearRefs.current[activeIndex];
    if (!rail || !activeButton) return;

    rail.scrollTo({
      left: activeButton.offsetLeft - (rail.clientWidth - activeButton.offsetWidth) / 2,
      behavior: "smooth",
    });
  }, [activeIndex]);

  const goToYear = (direction: "prev" | "next") => {
    const nextIndex = direction === "prev"
      ? Math.max(0, activeIndex - 1)
      : Math.min(historyYears.length - 1, activeIndex + 1);

    if (historyYears[nextIndex]) {
      handleYearChange(historyYears[nextIndex].year);
    }
  };

  return (
    <div className="relative">
      {/* Year rail */}
      <div className="history-year-rail-shell">
        <button
          onClick={() => goToYear("prev")}
          disabled={activeIndex === 0}
          aria-label="Previous year"
          className="history-year-arrow"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="history-year-track">
          <div className="history-year-track-border" />
          <div ref={railRef} className="history-year-rail scrollbar-none">
            {historyYears.map((y, index) => {
              const isActive = activeYear === y.year;
              const thumbnailUrl = y.thumbnailImageUrl || y.imageUrl;

              return (
                <button
                  key={y.year}
                  ref={(el) => {
                    yearRefs.current[index] = el;
                  }}
                  onClick={() => handleYearChange(y.year)}
                  className={`history-year-item ${
                    isActive ? "text-white" : "text-white/65 hover:text-white"
                  }`}
                >
                  <div
                    style={{ aspectRatio: "16/9" }}
                    className={`history-year-thumbnail ${
                      isActive
                        ? "border-white shadow-[0_0_0_3px_rgba(255,255,255,0.18)]"
                        : "border-white/30 grayscale hover:border-white/70"
                    }`}
                  >
                    {thumbnailUrl ? (
                      <Image
                        src={thumbnailUrl}
                        alt=""
                        fill
                        sizes="(max-width: 767px) 112px, 176px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-white/10">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M21 15l-5-5L5 21" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <span className="history-year-label">{y.year}</span>
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={() => goToYear("next")}
          disabled={activeIndex >= historyYears.length - 1}
          aria-label="Next year"
          className="history-year-arrow"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {activeData && (
        <div className="history-content-grid">
          {/* Ảnh năm */}
          <div style={{ aspectRatio: "16/10" }} className="relative overflow-hidden rounded-[24px] bg-white/10 shadow-2xl shadow-black/20 md:rounded-[28px]">
            {activeData.imageUrl ? (
              <Image
                src={activeData.imageUrl}
                alt=""
                fill
                sizes="(max-width: 767px) 100vw, 52vw"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
            )}
          </div>

          {/* Milestones list */}
          <div className="pt-1">
            {activeData.milestones.map((milestone, i) => (
              <div
                key={i}
                className="grid grid-cols-1 gap-2 border-b border-white/15 py-4 first:pt-0 sm:grid-cols-[120px_1fr] sm:gap-6 md:grid-cols-[140px_1fr]"
              >
                {milestone.month && (
                  <span className="whitespace-nowrap text-[16px] font-black text-white md:text-[18px]">
                    {milestone.month}
                  </span>
                )}
                <p className={`m-0 text-[15px] leading-[1.75] text-white/85 md:text-[16px] ${milestone.month ? "" : "sm:col-span-2"}`}>
                  {milestone.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
