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
      transition={{ duration: 0.6 }}
      className={`text-center mb-12 ${className}`}
    >
      {kicker && (
        <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
          {kicker}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-surface">{title}</h2>
    </motion.div>
  );
}
