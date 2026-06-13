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
        <span className="text-[14.4px] font-semibold uppercase tracking-[2.88px] text-[#fa582d] mb-4 block">
          {kicker}
        </span>
      )}
      <h2 className="text-[40px] sm:text-[58px] font-medium leading-[1.15] text-white">{title}</h2>
    </motion.div>
  );
}
