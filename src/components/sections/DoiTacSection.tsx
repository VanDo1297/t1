"use client";

import { useState } from "react";
import Image from "next/image";
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

function CarouselRow({ items, direction = "left", speed = 30 }: {
  items: CarouselItem[];
  direction?: "left" | "right";
  speed?: number;
}) {
  const [paused, setPaused] = useState(false);

  if (items.length === 0) return null;

  const looped = [...items, ...items, ...items];
  const totalWidth = items.length * 200;

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
            style={{ minWidth: 200, width: 200, height: 100 }}
            className="flex flex-shrink-0 items-center justify-center rounded-xl border border-white/60 bg-white/50 p-5 shadow-sm backdrop-blur-sm"
          >
            <Image
              src={item.logoUrl}
              alt={item.name}
              width={140}
              height={70}
              className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-150"
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
    <section id="hop-tac" className="relative px-5 py-20 sm:px-8" style={{ backgroundColor: "rgb(215, 240, 253)" }}>
      <div className="mx-auto max-w-7xl">
        {/* Section title */}
        <motion.h2
          ref={titleRef}
          {...titleAnim}
          className="text-center text-[28px] font-bold uppercase tracking-wider text-[#1a1a1a] sm:text-[32px]"
        >
          {sectionTitle}
        </motion.h2>

        {/* Strategic Partners */}
        <motion.div ref={strategicRef} {...strategicAnim} className="mt-14">
          <p className="text-center text-[15px] font-bold uppercase tracking-[0.15em] text-gray-500">
            {strategicTitle}
          </p>
          <CarouselRow items={strategicPartners} direction="left" speed={25} />
        </motion.div>

        {/* Technology Network Partners */}
        <motion.div ref={networkRef} {...networkAnim} className="mt-10">
          <p className="text-center text-[15px] font-bold uppercase tracking-[0.15em] text-gray-500">
            {networkTitle}
          </p>
          <CarouselRow items={networkPartners} direction="right" speed={25} />
        </motion.div>

        {/* Clients */}
        {clients.length > 0 && (
          <motion.div ref={clientsRef} {...clientsAnim} className="mt-14 pt-14">
            <p className="text-center text-[28px] font-bold uppercase tracking-wider text-[#1a1a1a] sm:text-[32px]">
              {clientsTitle}
            </p>
            <CarouselRow items={clients} direction="left" speed={25} />
          </motion.div>
        )}
      </div>
    </section>
  );
}
