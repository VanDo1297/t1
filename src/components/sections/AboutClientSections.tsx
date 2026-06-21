"use client";

import { useState } from "react";

interface HistoryEvent {
  year: string;
  month: string;
  content: string;
}

interface Props {
  historyEvents: HistoryEvent[];
  certificates?: unknown[];
  certificatesTitle?: string;
  locale: string;
}

export function AboutClientSections({
  historyEvents,
  locale,
}: Props) {
  const years = [...new Set(historyEvents.map((e) => e.year))];
  const [activeYear, setActiveYear] = useState(years[0] || "2021");
  const filtered = historyEvents.filter((e) => e.year === activeYear);

  return (
    <>
      {/* History Timeline */}
      <div>
        {/* Year tabs */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveYear(years[Math.max(0, years.indexOf(activeYear) - 1)])}
            className="cursor-pointer border-none bg-transparent px-2 py-1 text-[18px] text-gray-400 transition-colors hover:text-[#1a1a1a]"
          >
            ‹
          </button>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`cursor-pointer rounded px-5 py-2 text-[21px] transition-all ${
                activeYear === year
                  ? "border-2 border-[#2563eb] bg-[#2563eb]/10 font-bold text-[#2563eb]"
                  : "border border-gray-200 bg-transparent font-normal text-gray-400 hover:border-gray-400 hover:text-[#1a1a1a]"
              }`}
            >
              {year}
            </button>
          ))}
          <button
            onClick={() => setActiveYear(years[Math.min(years.length - 1, years.indexOf(activeYear) + 1)])}
            className="cursor-pointer border-none bg-transparent px-2 py-1 text-[18px] text-gray-400 transition-colors hover:text-[#1a1a1a]"
          >
            ›
          </button>
        </div>

        {/* Events */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="relative flex h-[300px] items-center justify-center overflow-hidden rounded-xl bg-gray-100">
            <span className="text-[21px] text-gray-300">
              {locale === "vi" ? "Hình ảnh minh họa" : "Illustration"}
            </span>
          </div>
          <div>
            {filtered.map((event, i) => (
              <div
                key={i}
                className="mb-5 flex gap-4 border-b border-gray-100 pb-4"
              >
                <span className="min-w-[180px] whitespace-nowrap text-[21px] font-bold text-[#2563eb]">
                  {event.month}
                </span>
                <p className="m-0 text-[21px] leading-[1.6] text-gray-600">
                  {event.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
