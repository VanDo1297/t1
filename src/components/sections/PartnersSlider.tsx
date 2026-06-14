"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PARTNER_LOGOS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function PartnerLogo({ partner, index }: { partner: { name: string; logo: string }; index: number }) {
  const { ref, animationProps } = useScrollAnimation({
    preset: "fadeIn",
    delay: index * 0.03,
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      {...animationProps}
      className="group flex h-40 items-center justify-center border-b border-r border-white/14 bg-white/[0.04] px-8 transition duration-300 hover:bg-[#2563eb]/10"
    >
      <div className="relative h-14 w-40 grayscale opacity-75 transition duration-300 group-hover:opacity-100">
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          className="object-contain"
        />
      </div>
    </motion.div>
  );
}

export function PartnersSlider() {
  const logos = [...PARTNER_LOGOS, ...PARTNER_LOGOS].slice(0, 12);

  const { ref: headingRef, animationProps: headingAnim } = useScrollAnimation({
    preset: "fadeUp",
  });

  return (
    <section className="relative overflow-hidden bg-primary-dark text-white">
      <div className="mx-auto w-full max-w-[1720px] px-5 py-20 text-center sm:px-8 sm:py-24 lg:px-[10rem]">
        <motion.h2
          ref={headingRef}
          {...headingAnim}
          className="text-[34px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-[44.666px]"
        >
          Trusted by the best
        </motion.h2>
      </div>

      <div className="bg-primary-dark py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1720px] grid-cols-2 border-l border-t border-white/14 px-5 sm:grid-cols-3 sm:px-8 lg:grid-cols-4 lg:px-[10rem] xl:grid-cols-6">
          {logos.map((partner, index) => (
            <PartnerLogo key={`${partner.name}-${index}`} partner={partner} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
