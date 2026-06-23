"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export interface CarouselItem {
  name: string;
  logoUrl: string;
  url?: string;
}

interface DoiTacSectionProps {
  strategicTitle: string;
  strategicPartners: CarouselItem[];
  networkTitle: string;
  networkPartners: CarouselItem[];
  sectionTitle: string;
  clientsTitle: string;
  clients: CarouselItem[];
}

function useVisibleCount() {
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setVisibleCount(5);
      } else if (window.matchMedia("(min-width: 880px)").matches) {
        setVisibleCount(4);
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        setVisibleCount(3);
      } else if (window.matchMedia("(min-width: 480px)").matches) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  return visibleCount;
}

function LogoCard({ item, showName = false }: { item: CarouselItem; showName?: boolean }) {
  const card = (
    <div
      className={`group flex w-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md ${
        showName ? "h-[220px] sm:h-[200px]" : "h-[140px] items-center justify-center"
      }`}
    >
      <div className="relative min-h-0 w-full flex-1">
        <Image
          src={item.logoUrl}
          alt={item.name}
          fill
          sizes="(max-width: 479px) 70vw, (max-width: 767px) 35vw, (max-width: 1023px) 25vw, 15vw"
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {showName && (
        <span className="mt-4 line-clamp-2 min-h-[40px] text-center text-base font-medium leading-tight text-[#1a6b5a]">
          {item.name}
        </span>
      )}
    </div>
  );

  if (item.url) {
    return (
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
        {card}
      </a>
    );
  }

  return card;
}

/* ── Carousel: hiện tối đa 5 items, prev/next từng item ── */
export function LogoCarousel({
  items,
  showName = false,
}: {
  items: CarouselItem[];
  showName?: boolean;
}) {
  const visibleCount = useVisibleCount();
  const [offset, setOffset] = useState(0);
  const maxOffset = Math.max(0, items.length - visibleCount);
  const canSlide = items.length > visibleCount;

  useEffect(() => {
    setOffset((current) => Math.min(current, maxOffset));
  }, [maxOffset]);

  if (items.length === 0) return null;

  return (
    <div className="mt-8 flex items-center gap-3">
      <button
        onClick={() => setOffset((o) => Math.max(0, o - 1))}
        disabled={!canSlide || offset === 0}
        aria-label="Previous"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300 text-[#1a1a1a] transition-all hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-20"
      >
        <ChevronLeft size={20} />
      </button>

      <div className="min-w-0 flex-1 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${offset * (100 / visibleCount)}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="shrink-0 px-2"
              style={{ flexBasis: `${100 / visibleCount}%` }}
            >
              <LogoCard item={item} showName={showName} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => setOffset((o) => Math.min(maxOffset, o + 1))}
        disabled={!canSlide || offset >= maxOffset}
        aria-label="Next"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300 text-[#1a1a1a] transition-all hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-20"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

/* ── Auto-scrolling carousel (khách hàng) ── */
function CarouselRow({ items, direction = "left", speed = 30 }: {
  items: CarouselItem[];
  direction?: "left" | "right";
  speed?: number;
}) {
  const [paused, setPaused] = useState(false);

  if (items.length === 0) return null;

  const looped = [...items, ...items, ...items];
  const totalWidth = items.length * 280;

  return (
    <div
      className="relative overflow-hidden py-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="flex items-center gap-12"
        animate={paused ? {} : {
          x: direction === "left" ? [0, -totalWidth] : [-totalWidth, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {looped.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            style={{ minWidth: 280, maxWidth: 280, width: 280, height: 140 }}
            className="group flex shrink-0 relative items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <Image
              src={item.logoUrl}
              alt={item.name}
              width={160}
              height={80}
              className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function DoiTacSection({
  strategicTitle,
  strategicPartners,
  networkTitle,
  networkPartners,
  sectionTitle,
  clientsTitle,
  clients,
}: DoiTacSectionProps) {
  const { ref: titleRef, animationProps: titleAnim } = useScrollAnimation({
    preset: "ttb",
  });

  const { ref: strategicRef, animationProps: strategicAnim } = useScrollAnimation({
    preset: "fadeUp",
    delay: 0.1,
  });

  const { ref: networkRef, animationProps: networkAnim } = useScrollAnimation({
    preset: "fadeUp",
    delay: 0.2,
  });

  const { ref: clientsRef, animationProps: clientsAnim } = useScrollAnimation({
    preset: "btt",
    delay: 0.1,
  });

  return (
    <>
      {/* Đối tác */}
      <section id="doi-tac" className="relative overflow-hidden bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto">
          <motion.h2
            ref={titleRef}
            {...titleAnim}
            className="text-center text-[28px] font-bold uppercase tracking-wider text-[#1a1a1a] sm:text-[32px]"
          >
            {sectionTitle}
          </motion.h2>

          {/* Strategic Partners - static 5 items */}
          <motion.div ref={strategicRef} {...strategicAnim} className="mt-14">
            <p className="text-center text-[15px] font-bold uppercase tracking-[0.15em] text-gray-500">
              {strategicTitle}
            </p>
            <LogoCarousel items={strategicPartners} />
          </motion.div>

          {/* Technology Network Partners - slider with prev/next */}
          <motion.div ref={networkRef} {...networkAnim} className="mt-14">
            <p className="text-center text-[15px] font-bold uppercase tracking-[0.15em] text-gray-500">
              {networkTitle}
            </p>
            <LogoCarousel items={networkPartners} />
          </motion.div>
        </div>
      </section>

      {/* Khách hàng - auto carousel */}
      {clients.length > 0 && (
        <section id="khach-hang" className="relative overflow-hidden bg-white px-5 pb-20 sm:px-8">
          <div className="mx-auto">
            <motion.div ref={clientsRef} {...clientsAnim}>
              <p className="text-center text-[28px] font-bold uppercase tracking-wider text-[#1a1a1a] sm:text-[32px]">
                {clientsTitle}
              </p>
              <CarouselRow items={clients} direction="left" speed={25} />
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}
