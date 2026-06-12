"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      className={`bg-surface rounded-2xl p-6 transition-all duration-300 border border-white/10 hover:border-primary/30 hover:shadow-xl shimmer-hover ${className}`}
      whileHover={hover ? { y: -4 } : undefined}
    >
      {children}
    </motion.div>
  );
}
