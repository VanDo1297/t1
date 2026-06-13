"use client";

import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`overflow-hidden border border-white/12 bg-white/[0.04] p-6 transition-shadow duration-150 ease-in-out hover:border-[#fa582d]/50 ${className}`}
    >
      {children}
    </div>
  );
}
