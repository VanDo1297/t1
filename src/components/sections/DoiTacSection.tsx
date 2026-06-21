"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export interface CarouselItem {
  name: string;
  logoUrl: string;
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

/* ── Static grid: hiện tối đa 5 items ── */
function StaticRow({ items }: { items: CarouselItem[] }) {
  const visible = items.slice(0, 5);
  return (
    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
      {visible.map((item) => (
        <div
          key={item.name}
          className="group flex items-center justify-center rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          style={{ height: 140 }}
        >
          <Image
            src={item.logoUrl}
            alt={item.name}
            width={140}
            height={70}
            className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-125"
          />
        </div>
      ))}
    </div>
  );
}

/* ── Slider: prev/next từng item, hiện 5 tại 1 thời điểm ── */
function SliderRow({ items }: { items: CarouselItem[] }) {
  const perPage = 5;
  const [offset, setOffset] = useState(0);
  const maxOffset = Math.max(0, items.length - perPage);

  const visible = items.slice(offset, offset + perPage);

  return (
    <div className="mt-8 flex items-center gap-3">
      <button
        onClick={() => setOffset((o) => Math.max(0, o - 1))}
        disabled={offset === 0}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300 text-[#1a1a1a] transition-all hover:bg-gray-100 disabled:opacity-20 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={20} />
      </button>

      <div className="flex-1 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {visible.map((item) => (
          <div
            key={item.name}
            className="group flex items-center justify-center rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            style={{ height: 140 }}
          >
            <Image
              src={item.logoUrl}
              alt={item.name}
              width={140}
              height={70}
              className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-125"
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => setOffset((o) => Math.min(maxOffset, o + 1))}
        disabled={offset >= maxOffset}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300 text-[#1a1a1a] transition-all hover:bg-gray-100 disabled:opacity-20 disabled:cursor-not-allowed"
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
            style={{ minWidth: 280, width: 280, height: 140 }}
            className="group flex flex-shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <Image
              src={item.logoUrl}
              alt={item.name}
              width={140}
              height={70}
              className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-125"
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
            <StaticRow items={strategicPartners} />
          </motion.div>

          {/* Technology Network Partners - slider with prev/next */}
          <motion.div ref={networkRef} {...networkAnim} className="mt-14">
            <p className="text-center text-[15px] font-bold uppercase tracking-[0.15em] text-gray-500">
              {networkTitle}
            </p>
            <SliderRow items={networkPartners} />
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
