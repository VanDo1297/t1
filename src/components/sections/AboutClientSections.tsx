"use client";

import { useState } from "react";

interface HistoryEvent {
  year: string;
  month: string;
  content: string;
}

interface Certificate {
  year: string;
  title: string;
}

interface Props {
  historyEvents: HistoryEvent[];
  certificates: Certificate[];
  certificatesTitle: string;
  locale: string;
}

export function AboutClientSections({
  historyEvents,
  certificates,
  certificatesTitle,
  locale,
}: Props) {
  const years = [...new Set(historyEvents.map((e) => e.year))];
  const [activeYear, setActiveYear] = useState(years[0] || "2021");
  const filtered = historyEvents.filter((e) => e.year === activeYear);

  const certYears = [...new Set(certificates.map((c) => c.year))];
  const [activeCertYear, setActiveCertYear] = useState(certYears[0] || "2021");
  const filteredCerts = certificates.filter((c) => c.year === activeCertYear);

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

      {/* Certificates */}
      <div className="-mx-5 mt-0 px-5 py-20 sm:-mx-8 sm:px-8">
        <div>
          <h2 className="mb-8 text-[36px] font-bold uppercase tracking-wider text-[#0a192f]">
            {certificatesTitle}
          </h2>

          {/* Year timeline */}
          <div className="mb-12 flex items-center gap-0">
            <button
              onClick={() => {
                const idx = certYears.indexOf(activeCertYear);
                if (idx > 0) setActiveCertYear(certYears[idx - 1]);
              }}
              className="cursor-pointer border-none bg-transparent px-3 py-1 text-[20px] text-gray-400 transition-colors hover:text-[#2563eb]"
            >
              ‹
            </button>
            <div className="relative flex flex-1 items-center">
              {/* Line */}
              <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-gray-300" />
              {/* Year dots */}
              <div className="relative flex w-full justify-between">
                {certYears.map((year) => (
                  <button
                    key={year}
                    onClick={() => setActiveCertYear(year)}
                    className="group relative flex cursor-pointer flex-col items-center border-none bg-transparent p-0"
                  >
                    <span className={`mb-3 text-[20px] transition-all ${
                      activeCertYear === year
                        ? "font-bold text-[#2563eb]"
                        : "font-normal text-gray-400 group-hover:text-[#1a1a1a]"
                    }`}>
                      {year}
                    </span>
                    <div className={`relative z-10 rounded-full border-2 transition-all ${
                      activeCertYear === year
                        ? "h-4 w-4 border-[#2563eb] bg-[#2563eb]"
                        : "h-3 w-3 border-gray-300 bg-white group-hover:border-[#2563eb]"
                    }`} />
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => {
                const idx = certYears.indexOf(activeCertYear);
                if (idx < certYears.length - 1) setActiveCertYear(certYears[idx + 1]);
              }}
              className="cursor-pointer border-none bg-transparent px-3 py-1 text-[20px] text-gray-400 transition-colors hover:text-[#2563eb]"
            >
              ›
            </button>
          </div>

          {/* Cert grid */}
          <div className="grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 min-[760px]:grid-cols-3 min-[1024px]:grid-cols-4">
            {filteredCerts.map((cert, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-100 bg-white p-6 text-center"
              >
                <div className="mb-4 flex h-[160px] w-full items-center justify-center rounded-lg">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <p className="text-[20px] font-semibold uppercase leading-[1.5] text-[#0a192f]">
                  {cert.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
