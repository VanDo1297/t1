"use client";

import { useRef, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { METRICS } from "@/lib/constants";

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function MetricsSection() {
  const t = useTranslations("whyChoose.metrics");

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {METRICS.map((metric, i) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="text-center"
        >
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan drop-shadow-[0_0_10px_rgba(14,165,233,0.3)]">
            <CountUp end={metric.value} suffix={metric.suffix} />
          </div>
          <p className="mt-2 text-sm text-slate-400">{t(metric.label)}</p>
        </motion.div>
      ))}
    </div>
  );
}
