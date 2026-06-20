"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { HeroData } from "@/sanity/queries";

interface HeroSectionProps {
  data: HeroData;
  locale: string;
}

export function HeroSection({ data, locale }: HeroSectionProps) {
  const [currentKeyword, setCurrentKeyword] = useState(0);

  useEffect(() => {
    if (!data.keywords?.length) return;
    const interval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % data.keywords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [data.keywords?.length]);

  return (
    <section className="relative h-screen overflow-hidden bg-black text-white [font-family:'TT_Hoves',Arial,'Helvetica_Neue',Helvetica,sans-serif]">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={data.videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full w-full items-center px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[960px]"
        >
          <h1 className="mb-6 text-[3rem] font-medium leading-[1.12] tracking-[-0.048em] sm:text-[3.45rem] lg:text-[3.85rem] xl:text-[4.15rem]">
            <span className="block text-white">{data.title}</span>
          </h1>

          <p className="mb-8 max-w-[780px] text-[1.18rem] font-semibold leading-[1.42] tracking-[0.01rem] text-white sm:text-[1.35rem]">
            {data.subtitle}
          </p>

          {data.keywords?.length > 0 && (
            <div className="mb-10 flex h-7 items-center">
              <motion.span
                key={currentKeyword}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-[13px] font-semibold uppercase leading-[1.4] tracking-[0.22em] text-[#b9f3ff]"
              >
                {data.keywords[currentKeyword]}
              </motion.span>
            </div>
          )}

          <Link
            href={`/${locale}${data.ctaContactHref}`}
            className="flex items-center gap-2 text-[1rem] font-semibold leading-[1.4] tracking-[0.01rem] text-white transition hover:text-[#2563eb]"
          >
            {data.ctaContactLabel}
            <ArrowRight size={18} className="animate-arrow-pulse" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30 pt-2">
          <div className="h-2 w-1 rounded-full bg-white" />
        </div>
      </motion.div>
    </section>
  );
}
