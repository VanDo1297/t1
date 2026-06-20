"use client";

import { useState } from "react";
import { Search } from "lucide-react";

interface CareersSearchProps {
  searchPlaceholder: string;
  industryLabel: string;
  locationLabel: string;
  searchButtonLabel: string;
  industries: string[];
  locations: string[];
}

export function CareersSearch({
  searchPlaceholder,
  industryLabel,
  locationLabel,
  searchButtonLabel,
  industries,
  locations,
}: CareersSearchProps) {
  const [keyword, setKeyword] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0">
      {/* Keyword input */}
      <div className="flex flex-1 items-center gap-3 border border-gray-300 bg-white px-5 py-3">
        <Search size={20} className="shrink-0 text-gray-400" />
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder={searchPlaceholder}
          className="w-full bg-transparent text-[14px] text-gray-700 outline-none placeholder:text-gray-400"
        />
      </div>

      {/* Industry select */}
      <div className="relative border border-gray-300 bg-white sm:border-l-0">
        <select
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="w-full appearance-none bg-transparent px-5 py-3 pr-10 text-[14px] text-gray-600 outline-none sm:w-44"
        >
          <option value="">{industryLabel}</option>
          {industries.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
        </svg>
      </div>

      {/* Location select */}
      <div className="relative border border-gray-300 bg-white sm:border-l-0">
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full appearance-none bg-transparent px-5 py-3 pr-10 text-[14px] text-gray-600 outline-none sm:w-40"
        >
          <option value="">{locationLabel}</option>
          {locations.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
        </svg>
      </div>

      {/* Search button */}
      <button className="bg-[#4db6ac] px-8 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#3da396]">
        {searchButtonLabel}
      </button>
    </div>
  );
}
