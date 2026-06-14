"use client";

import React, { type ReactNode } from "react";

interface MobileCarouselProps {
  children: ReactNode;
  gridClassName?: string;
  /** Width of each slide on mobile, e.g. "75%" or "42%" */
  slideWidth?: string;
}

export function MobileCarousel({
  children,
  gridClassName = "gap-6 sm:grid-cols-2 lg:grid-cols-3",
  slideWidth = "75%",
}: MobileCarouselProps) {
  const slides = React.Children.toArray(children);

  return (
    <>
      {/* Mobile: single-row horizontal scroll with snap */}
      <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 scrollbar-none sm:hidden">
        {slides.map((child, i) => (
          <div
            key={i}
            className="shrink-0 snap-start"
            style={{ width: slideWidth }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Desktop: grid */}
      <div className={`hidden sm:grid ${gridClassName}`}>
        {children}
      </div>
    </>
  );
}
