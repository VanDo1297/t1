"use client";

import React, { type ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MobileCarouselProps {
  children: ReactNode;
  gridClassName?: string;
  /** Width of each slide on mobile, e.g. "75%" or "42%" */
  slideWidth?: string;
  showControls?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function MobileCarousel({
  children,
  gridClassName = "gap-6 sm:grid-cols-2 lg:grid-cols-3",
  slideWidth = "75%",
  showControls = false,
  autoPlay = false,
  autoPlayInterval = 2400,
}: MobileCarouselProps) {
  const slides = React.Children.toArray(children);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSlide = useCallback((index: number) => {
    const scroller = scrollerRef.current;
    const target = scroller?.children[index] as HTMLElement | undefined;
    if (!scroller || !target) return;

    scroller.scrollTo({
      left: target.offsetLeft - 16,
      behavior: "smooth",
    });
  }, []);

  const handleScroll = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    Array.from(scroller.children).forEach((child, index) => {
      const element = child as HTMLElement;
      const distance = Math.abs(element.offsetLeft - scroller.scrollLeft - 16);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      scrollToSlide((activeIndex + 1) % slides.length);
    }, autoPlayInterval);

    return () => window.clearInterval(interval);
  }, [activeIndex, autoPlay, autoPlayInterval, scrollToSlide, slides.length]);

  return (
    <>
      {/* Mobile: single-row horizontal scroll with snap */}
      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        className="-mx-4 flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto px-4 pb-4 scrollbar-none sm:hidden"
      >
        {slides.map((child, i) => (
          <div
            key={i}
            className="flex shrink-0 snap-start"
            style={{ width: slideWidth }}
          >
            {child}
          </div>
        ))}
      </div>

      {showControls && slides.length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-4 sm:hidden">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => scrollToSlide(Math.max(activeIndex - 1, 0))}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#141414]/10 bg-white text-[#141414] shadow-sm transition hover:border-primary hover:text-primary disabled:opacity-40"
            disabled={activeIndex === 0}
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => scrollToSlide(index)}
                className={`h-1.5 rounded-full transition-all ${
                  activeIndex === index ? "w-6 bg-primary" : "w-1.5 bg-[#141414]/22"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next slide"
            onClick={() => scrollToSlide(Math.min(activeIndex + 1, slides.length - 1))}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#141414]/10 bg-white text-[#141414] shadow-sm transition hover:border-primary hover:text-primary disabled:opacity-40"
            disabled={activeIndex === slides.length - 1}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}

      {/* Desktop: grid */}
      <div className={`hidden sm:grid ${gridClassName}`}>
        {children}
      </div>
    </>
  );
}
