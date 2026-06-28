"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/* ── Gallery ── */
export function GallerySection({ images }: { images?: string[] }) {
  const anim1 = useScrollAnimation({ preset: "ltr", delay: 0 });
  const anim2 = useScrollAnimation({ preset: "fadeUp", delay: 0.1 });
  const anim3 = useScrollAnimation({ preset: "ltr", delay: 0.2 });
  const anim4 = useScrollAnimation({ preset: "rtl", delay: 0.15 });

  const fallback = ["/assets/bg/1.jpg", "/assets/bg/2.jpg", "/assets/bg/3.jpg", "/assets/bg/4.jpg"];
  const imgs = images && images.length ? images : fallback;

  return (
    <section className="bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto">
        {/* Desktop / tablet: mosaic */}
        <div className="hidden sm:grid grid-cols-2 gap-4" style={{ height: "clamp(280px, 35vw, 560px)" }}>
          <div className="grid grid-rows-2 gap-4">
            <div className="grid grid-cols-2 gap-4">
              <motion.div ref={anim1.ref} {...anim1.animationProps} className="relative overflow-hidden rounded-2xl">
                <Image src={imgs[0] || fallback[0]} alt="Gallery 1" fill className="object-cover" />
              </motion.div>
              <motion.div ref={anim2.ref} {...anim2.animationProps} className="relative overflow-hidden rounded-2xl">
                <Image src={imgs[1] || fallback[1]} alt="Gallery 2" fill className="object-cover" />
              </motion.div>
            </div>
            <motion.div ref={anim3.ref} {...anim3.animationProps} className="relative overflow-hidden rounded-2xl">
              <Image src={imgs[2] || fallback[2]} alt="Gallery 3" fill className="object-cover" />
            </motion.div>
          </div>
          <motion.div ref={anim4.ref} {...anim4.animationProps} className="relative overflow-hidden rounded-2xl">
            <Image src={imgs[3] || fallback[3]} alt="Gallery 4" fill className="object-cover" />
          </motion.div>
        </div>

        {/* Mobile: carousel react-slick, chỉ vuốt */}
        <div className="sm:hidden">
          <Slider
            className="gallery-slider"
            dots
            arrows={false}
            infinite
            speed={400}
            slidesToShow={1}
            slidesToScroll={1}
            centerMode
            centerPadding="28px"
            swipeToSlide
          >
            {imgs.map((src, i) => (
              <div key={i} className="px-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image src={src} alt={`Gallery ${i + 1}`} fill className="object-cover" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

/* ── Vision / Mission / Motto ── */
interface VisionCard {
  title: string;
  description: string;
  imageUrl?: string;
}

export function VisionSection({ cards }: { cards: VisionCard[] }) {
  return (
    <section className="bg-[#f9fafb] px-5 py-12 md:py-20">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {cards.map((card, i) => (
          <VisionCard key={i} card={card} index={i} />
        ))}
      </div>
    </section>
  );
}

function VisionCard({ card, index }: { card: VisionCard; index: number }) {
  const anim = useScrollAnimation({ preset: "fadeUp", delay: index * 0.15 });
  return (
    <motion.div ref={anim.ref} {...anim.animationProps} className="bg-white rounded-2xl overflow-hidden border border-[#eee] transition-all duration-300">
      <div className="h-[160px] md:h-[200px] relative overflow-hidden">
        <Image src={card.imageUrl || `/assets/bg/${(index % 5) + 1}.jpg`} alt="" fill className="object-cover" />
      </div>
      <div className="p-5 md:p-7 text-center">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#2563eb] text-white text-[18px] md:text-[27px] font-bold -mt-12 relative z-[2]">
          {index + 1}
        </div>
        <h3 className="text-[20px] md:text-[27px] font-bold text-[#0a192f] uppercase my-3 md:mt-4 md:mb-3">
          {card.title}
        </h3>
        <p className="text-[16px] md:text-[21px] leading-[1.7] text-[#555] m-0">
          {card.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Core Values Icons ── */
interface CoreValueIcon {
  icon: string;
  title: string;
  desc: string;
}

export function CoreValuesSection({ title, icons, isVi }: { title: string; icons?: CoreValueIcon[]; isVi: boolean }) {
  const titleAnim = useScrollAnimation({ preset: "fadeUp" });
  const defaultIcons: CoreValueIcon[] = [
    { icon: "diamond", title: isVi ? "Bền vững" : "Sustainable", desc: isVi ? "Vì lợi ích lâu dài" : "For long-term benefits" },
    { icon: "award", title: isVi ? "Uy tín" : "Credibility", desc: isVi ? "Giữ gìn chữ tín" : "Maintaining trust" },
    { icon: "star", title: isVi ? "Chuẩn mực" : "Standards", desc: isVi ? "Tôn trọng các nguyên tắc và ứng xử chuẩn mực" : "Respecting principles and standards" },
    { icon: "users", title: isVi ? "Gắn kết" : "Unity", desc: isVi ? "Gần gũi, chia sẻ" : "Close and sharing" },
    { icon: "lightbulb", title: isVi ? "Đổi mới" : "Innovation", desc: isVi ? "Luôn hướng đến cái mới để hoàn thiện mọi mặt" : "Always innovating to improve" },
  ];
  const items = icons || defaultIcons;

  return (
    <section className="px-5 py-20 sm:px-8 bg-white">
      <div className="mx-auto">
        <motion.h2
          ref={titleAnim.ref}
          {...titleAnim.animationProps}
          className="text-center font-bold text-[#0a192f] uppercase tracking-wider mb-12 md:mb-16"
          style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
        >
          {title}
        </motion.h2>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((item, i) => (
            <CoreValueItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreValueItem({ item, index }: { item: CoreValueIcon; index: number }) {
  const anim = useScrollAnimation({ preset: "scaleUp", delay: index * 0.1 });
  return (
    <motion.div ref={anim.ref} {...anim.animationProps} className="flex flex-col items-center text-center">
      <div
        className="mb-4 flex items-center justify-center rounded-full"
        style={{ width: "clamp(64px, 5vw, 96px)", height: "clamp(64px, 5vw, 96px)", backgroundColor: "rgba(37,99,235,0.08)" }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {item.icon === "diamond" && <><path d="M6 3h12l4 6-10 13L2 9z" /><path d="M2 9h20" /><path d="M12 22L6 9" /><path d="M12 22l6-13" /></>}
          {item.icon === "award" && <><circle cx="12" cy="8" r="6" /><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" /></>}
          {item.icon === "star" && <><path d="M12 2l2.09 6.26L21 9.27l-5 4.87L17.18 21 12 17.27 6.82 21 8 14.14l-5-4.87 6.91-1.01z" /></>}
          {item.icon === "users" && <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>}
          {item.icon === "lightbulb" && <><path d="M9 18h6" /><path d="M10 22h4" /><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" /></>}
        </svg>
      </div>
      <h3 className="font-bold text-[#2563eb]" style={{ fontSize: "clamp(16px, 1.1vw, 22px)" }}>
        {item.title}
      </h3>
      <p className="mt-1 text-gray-500" style={{ fontSize: "clamp(13px, 0.8vw, 16px)" }}>
        {item.desc}
      </p>
    </motion.div>
  );
}

/* ── History Title ── */
export function HistoryTitle({ title }: { title: string }) {
  const anim = useScrollAnimation({ preset: "ltr" });
  return (
    <motion.h2
      ref={anim.ref}
      {...anim.animationProps}
      className="mb-8 text-[28px] font-bold uppercase tracking-wide text-white md:mb-12 md:text-[42px]"
    >
      {title}
    </motion.h2>
  );
}

/* ── Leadership ── */
interface Leader {
  name: string;
  role: string;
  photoUrl?: string;
}

const LEADER_CARD_W = 304; // 280px card + 24px padding ngang

export function LeadershipSection({ title, leaders }: { title: string; leaders: Leader[] }) {
  const titleAnim = useScrollAnimation({ preset: "fadeUp" });
  const topAnim = useScrollAnimation({ preset: "scaleUp", delay: 0.15 });
  const bottomAnim = useScrollAnimation({ preset: "fadeUp", delay: 0.3 });

  const bottomLeaders = leaders.slice(1);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [fits, setFits] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const check = () => {
      setFits(bottomLeaders.length * LEADER_CARD_W <= el.clientWidth);
    };
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [bottomLeaders.length]);

  return (
    <section id="lanh-dao" className="bg-white px-5 py-12 md:py-20">
      <div>
        <motion.h2
          ref={titleAnim.ref}
          {...titleAnim.animationProps}
          className="text-[24px] md:text-[36px] font-bold text-[#0a192f] uppercase tracking-wider mb-8 md:mb-10"
        >
          {title}
        </motion.h2>

        {leaders.length > 0 && (
          <motion.div ref={topAnim.ref} {...topAnim.animationProps} className="flex justify-center mb-8 md:mb-12">
            <div className="w-[280px]">
              <LeaderCard leader={leaders[0]} />
            </div>
          </motion.div>
        )}

        <div className="flex justify-center mb-8 md:mb-12">
          <div className="w-[2px] h-10 bg-[#d1d5db]" />
        </div>

        {bottomLeaders.length > 0 && (
          <motion.div ref={bottomAnim.ref} {...bottomAnim.animationProps}>
            <div ref={wrapRef} className="relative px-2 md:px-8">
              {fits ? (
                /* Vừa khung → hàng flex căn giữa */
                <div className="flex items-stretch justify-center">
                  {bottomLeaders.map((leader, i) => (
                    <div key={i} style={{ width: LEADER_CARD_W }} className="px-3">
                      <LeaderCard leader={leader} />
                    </div>
                  ))}
                </div>
              ) : (
                /* Không vừa → carousel react-slick để trượt ngang */
                <Slider
                  className="leadership-slider"
                  dots={false}
                  arrows={false}
                  infinite={false}
                  speed={400}
                  slidesToScroll={1}
                  swipeToSlide
                  variableWidth
                >
                  {bottomLeaders.map((leader, i) => (
                    <div key={i} style={{ width: LEADER_CARD_W }} className="h-full px-3">
                      <LeaderCard leader={leader} />
                    </div>
                  ))}
                </Slider>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <div className="flex h-full flex-col">
      <div className="relative overflow-hidden rounded-t-2xl border border-b-0 border-[#eee] aspect-square bg-white">
        {leader.photoUrl ? (
          <Image src={leader.photoUrl} alt={leader.name} fill className="object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center">
            <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        )}
      </div>
      <div
        className="flex-1 px-4 py-4 text-center"
        style={{ background: "linear-gradient(to right, #2563eb 70%, #ffffff)" }}
      >
        <h3 className="text-[15px] md:text-[18px] font-bold text-white mb-1">
          {leader.name}
        </h3>
        <p className="text-[12px] md:text-[13px] text-white/80 m-0 leading-[1.45]">
          {leader.role.split(" — ").map((part, i) => (
            <span key={i} className="block">{part}</span>
          ))}
        </p>
      </div>
    </div>
  );
}

/* ── Nguồn nhân lực ── */
export function HumanResourcesSection({ isVi }: { isVi: boolean }) {
  const titleAnim = useScrollAnimation({ preset: "fadeUp" });
  const descAnim = useScrollAnimation({ preset: "fadeUp", delay: 0.1 });
  const leftAnim = useScrollAnimation({ preset: "ltr", delay: 0.2 });
  const rightAnim = useScrollAnimation({ preset: "rtl", delay: 0.2 });

  return (
    <section id="nhan-luc" className="px-5 py-20 sm:px-8" style={{ backgroundColor: "#f5f9f9" }}>
      <div>
        <motion.h2
          ref={titleAnim.ref}
          {...titleAnim.animationProps}
          className="text-center font-bold text-[#1a1a1a] mb-4"
          style={{ fontSize: "clamp(36px, 3vw, 60px)" }}
        >
          {isVi ? "Nguồn nhân lực" : "Human Resources"}
        </motion.h2>
        <motion.p
          ref={descAnim.ref}
          {...descAnim.animationProps}
          className="text-center text-[#666] mx-auto mb-12"
          style={{ fontSize: "clamp(16px, 1.1vw, 20px)", maxWidth: 900, lineHeight: 1.7 }}
        >
          {isVi
            ? "Con người là một trong những tài sản lớn nhất được chú trọng đầu tư và phát triển tại DTG. Đội ngũ nhân lực ưu tú là nền tảng vững chắc giúp DTG không ngừng tạo nên những giá trị to lớn cho khách hàng."
            : "People are one of the greatest assets that DTG invests in and develops. Our talented workforce is the solid foundation helping DTG continuously create great value for customers."}
        </motion.p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div ref={leftAnim.ref} {...leftAnim.animationProps} className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="flex gap-5 mb-10">
              <span className="text-[48px] md:text-[56px] font-bold text-[#2563eb] leading-none shrink-0">200+</span>
              <div>
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#1a1a1a] mb-2">
                  {isVi ? "Nhân sự" : "Staff"}
                </h3>
                <p className="text-[13px] md:text-[14px] text-[#666] leading-[1.7] m-0">
                  {isVi
                    ? "Với trình độ chuyên môn cao và giàu kinh nghiệm, nguồn DTG khẳng định năng lực trong qua việc triển khai hoạt động dự án trong và ngoài nước, nhân được sự tin tưởng từ khách hàng và đối tác."
                    : "With high expertise and rich experience, DTG's team demonstrates capability through domestic and international project deployments, earning trust from clients and partners."}
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <span className="text-[48px] md:text-[56px] font-bold text-[#2563eb] leading-none shrink-0">60+</span>
              <div>
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#1a1a1a] mb-2">
                  {isVi ? "Kỹ sư" : "Engineers"}
                </h3>
                <p className="text-[13px] md:text-[14px] text-[#666] leading-[1.7] m-0">
                  {isVi
                    ? "Đội ngũ kỹ sư tại DTG được tuyển chọn từ các trường Đại học danh tiếng tại Việt Nam và nước ngoài. Các kỹ sư được đào tạo chuyên môn, tự nghiên cứu và qua các khoá đào tạo quốc tế uy tín."
                    : "DTG engineers are selected from prestigious universities in Vietnam and abroad. Engineers are professionally trained through self-study and internationally accredited courses."}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div ref={rightAnim.ref} {...rightAnim.animationProps} className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(37,99,235,0.08)" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5"><circle cx="12" cy="8" r="6" /><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" /></svg>
              </div>
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#1a1a1a] m-0">
                {isVi ? "Chứng chỉ quốc tế" : "International Certifications"}
              </h3>
            </div>
            <div className="flex flex-col gap-6">
              {[
                { brand: "Cisco", desc: "CCIE, CCNP, CCNA, Chứng chỉ chuyên môn (Specialist cert) Data Center, Security, Collaboration, Service Provider, Enterprise Network." },
                { brand: "Microsoft", desc: "MCSE, MCSA..." },
                { brand: "Oracle", desc: "OCP 11g, OCA 11g..." },
                { brand: "VMWare", desc: "VCP: chứng chỉ chuyên môn (Specialist) Data Center, Vpshere, Network..." },
              ].map((cert, i) => (
                <div key={i}>
                  <p className="text-[16px] md:text-[18px] font-bold text-[#2563eb] mb-1">{cert.brand}</p>
                  <p className="text-[12px] md:text-[13px] text-[#666] leading-[1.6] m-0">{cert.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
