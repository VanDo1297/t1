"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  className?: string;
}

export function SectionHeading({ kicker, title, className = "" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className={`text-center mb-12 ${className}`}
    >
      {kicker && (
        <span className="text-[14.4px] font-semibold uppercase tracking-[2.88px] text-[#2563eb] mb-4 block">
          {kicker}
        </span>
      )}
      <h2 className="text-[34px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-[44.666px]">{title}</h2>
    </motion.div>
  );
}
