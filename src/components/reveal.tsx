"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reveal = () => node.classList.add("visible");
    const revealIfVisible = () => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) reveal();
    };

    revealIfVisible();
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        reveal();
        observer.unobserve(node);
      }
    }, { threshold: 0.01, rootMargin: "0px 0px 8% 0px" });
    observer.observe(node);
    window.addEventListener("load", revealIfVisible, { once: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("load", revealIfVisible);
    };
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}
