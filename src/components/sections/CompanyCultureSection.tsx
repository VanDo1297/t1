"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Props {
  title: string;
  items: string[];
  images?: string[];
}

export function CompanyCultureSection({ title, items, images }: Props) {
  const titleAnim = useScrollAnimation({ preset: "fadeUp" });
  const listAnim = useScrollAnimation({ preset: "ltr", delay: 0.15 });
  const img1Anim = useScrollAnimation({ preset: "fadeUp", delay: 0.2 });
  const img2Anim = useScrollAnimation({ preset: "fadeUp", delay: 0.35 });
  const img3Anim = useScrollAnimation({ preset: "rtl", delay: 0.3 });

  return (
    <section className="px-5 py-12 md:py-20 bg-[rgb(176,231,252)]">
      <div>
        <motion.h2
          ref={titleAnim.ref}
          {...titleAnim.animationProps}
          className="text-[24px] md:text-[36px] font-bold text-[#0a192f] uppercase tracking-wider mb-8 md:mb-12"
        >
          {title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-[4fr_6fr] gap-8 md:gap-12">
          <motion.div ref={listAnim.ref} {...listAnim.animationProps}>
            {items.map((item, i) => (
              <div key={i} className="flex gap-3 mb-3.5">
                <span className="text-[#2563eb] text-[16px] md:text-[21px] mt-0.5 shrink-0">●</span>
                <p className="text-[16px] md:text-[21px] leading-[1.7] text-[#374151] m-0">{item}</p>
              </div>
            ))}
          </motion.div>
          <div className="grid grid-cols-[4fr_5fr] gap-4 items-stretch">
            <div className="flex flex-col gap-4">
              <motion.div ref={img1Anim.ref} {...img1Anim.animationProps} className="relative overflow-hidden rounded-2xl flex-1 min-h-[150px]">
                <Image src={images?.[0] || "/assets/bg/2.jpg"} alt="" fill className="object-cover" />
              </motion.div>
              <motion.div ref={img2Anim.ref} {...img2Anim.animationProps} className="relative overflow-hidden rounded-2xl flex-1 min-h-[150px]">
                <Image src={images?.[1] || "/assets/bg/3.jpg"} alt="" fill className="object-cover" />
              </motion.div>
            </div>
            <motion.div ref={img3Anim.ref} {...img3Anim.animationProps} className="relative overflow-hidden rounded-2xl min-h-[320px]">
              <Image src={images?.[2] || "/assets/bg/4.jpg"} alt="" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
