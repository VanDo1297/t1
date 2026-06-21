"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { GioiThieuData } from "@/sanity/queries";

interface GioiThieuSectionProps {
  data: GioiThieuData;
}

export function GioiThieuSection({ data }: GioiThieuSectionProps) {
  const fallbackImage = "/assets/dtg-tower.jpg";
  const imageSrc = data.imageUrl || fallbackImage;

  const label = useScrollAnimation({ preset: "ttb" });
  const left = useScrollAnimation({ preset: "ltr", delay: 0.1 });
  const right = useScrollAnimation({ preset: "rtl", delay: 0.2 });

  return (
    <section id="gioi-thieu" className="relative bg-white py-24 px-5 sm:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left - Text */}
        <div>
          <motion.p
            ref={label.ref}
            {...label.animationProps}
            className="mb-4 text-[15px] font-bold uppercase tracking-[0.15em] text-primary"
          >
            {data.label}
          </motion.p>
          <motion.h2
            ref={left.ref}
            {...left.animationProps}
            className="mb-8 text-[40px] font-medium leading-[1.15] tracking-[-0.02em] text-dark whitespace-pre-line"
          >
            {data.title}
          </motion.h2>
          <motion.p
            ref={left.ref}
            {...left.animationProps}
            className="text-[18px] leading-[1.8] text-gray-500"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Right - Image */}
        <motion.div
          ref={right.ref}
          {...right.animationProps}
          className="relative aspect-[4/3] w-full"
        >
          {/* Glow behind image */}ßßß
          <div className="pointer-events-none absolute -inset-50 rounded-full bg-[#64dcdc] opacity-[0.3] blur-[200px]" />
          <div className="relative h-full w-full overflow-hidden rounded-2xl">
          <Image
            src={imageSrc}
            alt={data.title}
            fill
            className="object-cover"
          />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
