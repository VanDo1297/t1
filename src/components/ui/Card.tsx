"use client";

import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`overflow-hidden border border-[#141414]/12 bg-[#141414]/[0.03] p-6 transition-shadow duration-150 ease-in-out hover:border-[#2563eb]/50 ${className}`}
    >
      {children}
    </div>
  );
}
