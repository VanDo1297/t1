"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { GioiThieuData } from "@/sanity/queries";

interface GioiThieuSectionProps {
  data: GioiThieuData;
  locale: string;
}

export function GioiThieuSection({ data, locale }: GioiThieuSectionProps) {
  const fallbackImage = "/assets/dtg-tower.jpg";
  const imageSrc = data.imageUrl || fallbackImage;

  const label = useScrollAnimation({ preset: "ttb" });
  const left = useScrollAnimation({ preset: "ltr", delay: 0.1 });
  const right = useScrollAnimation({ preset: "rtl", delay: 0.2 });

  return (
    <section id="gioi-thieu" className="relative overflow-hidden bg-white py-24 px-5 sm:px-8">
           {/* eslint-disable-next-line @next/next/no-img-element */}                                 
            <img                                                                                         
            src="/assets/bg/red-wave-3.jpg"                                                          
              alt=""                                                                              
             className="absolute opacity-70 inset-0 w-full h-full pointer-events-none object-cover"         
            />                                                                                    
            <div className="relative z-[1] grid items-center gap-12 lg:grid-cols-2 lg:gap-20">    
        {/* Left - Text */}
        <div>
          <motion.p
            ref={label.ref}
            {...label.animationProps}
            className="mb-4 font-bold uppercase tracking-[0.15em] text-primary"
            style={{ fontSize: "clamp(15px, 0.9vw, 18px)" }}
          >
            {data.label}
          </motion.p>
          <motion.h2
            ref={left.ref}
            {...left.animationProps}
            className="mb-8 font-bold leading-[1.15] tracking-[-0.02em] text-red-500 whitespace-pre-line"
            style={{ fontSize: "clamp(40px, 3vw, 60px)" }}
          >
            {data.title}
          </motion.h2>
          <motion.p
            ref={left.ref}
            {...left.animationProps}
            className="leading-[1.8] text-dark"
            style={{ fontSize: "clamp(18px, 1.1vw, 27px)" }}
          >
            {data.description}
          </motion.p>
          {data.ctaLabel && data.ctaHref && (
            <motion.div ref={left.ref} {...left.animationProps}>
              <Link
                href={`/${locale}${data.ctaHref}`}
                className="mt-8 inline-flex items-center gap-3 rounded-full px-8 py-4 font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(to right, #2563eb, #7c3aed)", fontSize: 18 }}
              >
                {data.ctaLabel}
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          )}
        </div>

        {/* Right - Image */}
        <motion.div
          ref={right.ref}
          {...right.animationProps}
          className="relative aspect-[4/3] w-full"
        >
          {/* Glow behind image */}
          <div className="pointer-events-none absolute -inset-50 rounded-full bg-[#64dcdc] opacity-[0.3] blur-[200px]" />
          <div className="relative h-full w-full overflow-hidden rounded-2xl">
          <Image
            src={imageSrc}
            alt={data.title}
            fill
            className="object-cover"
          />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
