"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function CtaBox() {
  const { ref: headingRef, animationProps: headingAnim } = useScrollAnimation({
    preset: "fadeUp",
  });

  const { ref: videoRef, animationProps: videoAnim } = useScrollAnimation({
    preset: "fadeIn",
    once: true,
  });

  return (
    <section id="proven-success" className="mx-auto w-full max-w-[1720px]">
      <motion.div
        ref={headingRef}
        {...headingAnim}
        className="mb-16 grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end"
      >
        <h2 className="max-w-5xl text-[40px] font-medium leading-[1.15] text-[#141414] sm:text-[58px] lg:text-[70px]">
          Our customers are securing their digital transformation
        </h2>
        <a
          href="#testimonials"
          className="inline-flex items-center text-[14.8px] font-semibold leading-[1.4] text-[#141414] underline decoration-[#141414] decoration-2 underline-offset-[10px] transition hover:text-[#c75435] hover:decoration-[#c75435]"
        >
          See testimonials
          <ArrowRight size={18} className="ml-3" />
        </a>
      </motion.div>

      <motion.div
        ref={videoRef}
        {...videoAnim}
        className="group relative min-h-[620px] overflow-hidden bg-black sm:min-h-[662px]"
      >
        <div className="absolute inset-0 bg-[url('/assets/svtech/team.webp')] bg-cover bg-center opacity-55 transition duration-700 group-hover:scale-105 group-hover:opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/45 to-transparent" />
        <div
          className="absolute right-0 top-0 h-full w-1/2 opacity-[0.18]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #c75435 0px, #c75435 6px, transparent 6px, transparent 26px)",
          }}
        />
        <div className="relative z-10 flex min-h-[620px] items-center justify-center sm:min-h-[662px]">
          <button
            type="button"
            className="flex h-24 w-24 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur transition duration-300 hover:border-[#c75435] hover:bg-[#c75435] hover:text-black"
            aria-label="Play customer story"
          >
            <Play size={34} fill="currentColor" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
