"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { TinTucItem } from "@/sanity/queries";

interface TinTucHomeSectionProps {
  locale: string;
  articles: TinTucItem[];
  title: string;
  subtitle: string;
}

export function TinTucHomeSection({ locale, articles, title, subtitle }: TinTucHomeSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref: titleRef, animationProps: titleAnim } = useScrollAnimation({ preset: "ttb" });

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateCount = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % articles.length);
  }, [articles.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
  }, [articles.length]);

  // Auto-play every 5s
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  if (articles.length === 0) return null;

  // Get visible articles (infinite loop)
  const getVisibleArticles = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      const idx = (currentIndex + i) % articles.length;
      items.push({ ...articles[idx], _idx: idx });
    }
    return items;
  };

  const visible = getVisibleArticles();

  return (
    <section id="tin-tuc" className="overflow-hidden bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <motion.div ref={titleRef} {...titleAnim}>
            <h2
              className="font-bold uppercase tracking-wider text-[#1a1a1a]"
              style={{ fontSize: "clamp(24px, 2vw, 42px)" }}
            >
              {title}
            </h2>
            <p
              className="mt-2 text-gray-500"
              style={{ fontSize: "clamp(14px, 0.9vw, 18px)" }}
            >
              {subtitle}
            </p>
          </motion.div>
        </div>

        {/* Carousel with prev/next buttons */}
        <div className="relative flex items-center gap-4">
          {/* Prev */}
          <button
            onClick={prev}
            className="shrink-0 flex items-center justify-center rounded-full border-2 border-black bg-white transition hover:bg-gray-100"
            style={{ width: "clamp(48px, 3.5vw, 64px)", height: "clamp(48px, 3.5vw, 64px)" }}
          >
            <ChevronLeft className="text-black" style={{ width: "clamp(24px, 1.8vw, 32px)", height: "clamp(24px, 1.8vw, 32px)" }} />
          </button>

          {/* Cards */}
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {visible.map((article) => (
                  <Link
                    key={`${article._idx}-${currentIndex}`}
                    href={`/${locale}/tin-tuc/${article.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100">
                      {article.thumbnailUrl ? (
                        <Image
                          src={article.thumbnailUrl}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                          <Image
                            src="/assets/dtg-logo.png"
                            alt="DTG"
                            width={120}
                            height={40}
                            className="opacity-20"
                          />
                        </div>
                      )}
                    </div>
                    <h3
                      className="mt-4 font-bold uppercase leading-[1.4] text-[#1a1a1a] line-clamp-2 transition-colors group-hover:text-[#2563eb]"
                      style={{ fontSize: "clamp(14px, 0.9vw, 18px)" }}
                    >
                      {article.title}
                    </h3>
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="shrink-0 flex items-center justify-center rounded-full border-2 border-black bg-white transition hover:bg-gray-100"
            style={{ width: "clamp(48px, 3.5vw, 64px)", height: "clamp(48px, 3.5vw, 64px)" }}
          >
            <ChevronRight className="text-black" style={{ width: "clamp(24px, 1.8vw, 32px)", height: "clamp(24px, 1.8vw, 32px)" }} />
          </button>
        </div>
      </div>
    </section>
  );
}
