"use client";

import { useState } from "react";
import Image from "next/image";

interface HistoryMilestone {
  month: string;
  content: string;
  imageUrl?: string;
}

interface HistoryYear {
  year: string;
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

  const handleYearChange = (year: string) => {
    setActiveYear(year);
  };

  return (
    <div>
      {/* Year tabs */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        <button
          onClick={() => {
            const i = historyYears.findIndex((y) => y.year === activeYear);
            if (i > 0) handleYearChange(historyYears[i - 1].year);
          }}
          className="cursor-pointer border-none bg-transparent px-2 py-1 text-[18px] text-gray-400 transition-colors hover:text-[#1a1a1a]"
        >
          ‹
        </button>
        {historyYears.map((y) => (
          <button
            key={y.year}
            onClick={() => handleYearChange(y.year)}
            className={`cursor-pointer rounded px-5 py-2 text-[21px] transition-all ${
              activeYear === y.year
                ? "border-2 border-[#2563eb] bg-[#2563eb]/10 font-bold text-[#2563eb]"
                : "border border-gray-200 bg-transparent font-normal text-gray-400 hover:border-gray-400 hover:text-[#1a1a1a]"
            }`}
          >
            {y.year}
          </button>
        ))}
        <button
          onClick={() => {
            const i = historyYears.findIndex((y) => y.year === activeYear);
            if (i < historyYears.length - 1) handleYearChange(historyYears[i + 1].year);
          }}
          className="cursor-pointer border-none bg-transparent px-2 py-1 text-[18px] text-gray-400 transition-colors hover:text-[#1a1a1a]"
        >
          ›
        </button>
      </div>

      {activeData && (
        <div className="grid grid-cols-1 gap-8 min-[768px]:grid-cols-[35%_1fr]">
          {/* Ảnh năm */}
          <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-[5/3]">
            {activeData.imageUrl ? (
              <Image src={activeData.imageUrl} alt="" fill className="object-cover" />
            ) : (
              <div className="flex h-full items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
            )}
          </div>

          {/* Milestones list */}
          <div>
            {activeData.milestones.map((milestone, i) => (
              <div
                key={i}
                className="mb-4 flex gap-4 border-b border-gray-100 pb-4"
              >
                {milestone.month && (
                  <span className="min-w-[100px] shrink-0 whitespace-nowrap text-[18px] font-bold text-[#2563eb]">
                    {milestone.month}
                  </span>
                )}
                <p className="m-0 text-[18px] leading-[1.6] text-gray-600">
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
