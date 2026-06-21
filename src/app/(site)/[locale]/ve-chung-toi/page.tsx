import Image from "next/image";
import Link from "next/link";
import { getVeChungToiPageData, getGioiThieuData } from "@/sanity/queries";
import { GioiThieuSection } from "@/components/sections/GioiThieuSection";
import { AboutClientSections } from "@/components/sections/AboutClientSections";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const [data, gioiThieuData] = await Promise.all([
    getVeChungToiPageData(locale),
    getGioiThieuData(locale),
  ]);

  const isVi = locale === "vi";
  const paragraphs = data.brandStoryContent.split("\n\n").filter((p) => p.trim());

  return (
    <main className="about-page-mobile" style={{ paddingTop: 80 }}>
      {/* Hero */}
      <section className="site-hero">
        <div className="absolute inset-0">
          <Image src="/assets/bg/1.jpg" alt="" fill className="object-cover" priority />
        </div>
        <div className="site-hero-content">
          <h1 className="site-hero-title">
            {isVi ? "Về chúng tôi" : "About Us"}
          </h1>
          <p className="site-hero-description">
            {data.brandStoryTitle}
          </p>
        </div>
      </section>

      {/* Giới thiệu - same as home */}
      <GioiThieuSection data={gioiThieuData} />

      {/* Photo Gallery Grid — 4 images: left top 1+2, left bottom 3, right full 4 */}
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto">
          <div className="grid grid-cols-2 gap-4" style={{ height: "clamp(280px, 35vw, 560px)" }}>
            {/* Left: 2 rows */}
            <div className="grid grid-rows-2 gap-4">
              {/* Top left: 2 small side by side */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image src={data.galleryImages?.[0] || "/assets/bg/1.jpg"} alt="Gallery 1" fill className="object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl">
                  <Image src={data.galleryImages?.[1] || "/assets/bg/2.jpg"} alt="Gallery 2" fill className="object-cover" />
                </div>
              </div>
              {/* Bottom left: 1 large */}
              <div className="relative overflow-hidden rounded-2xl">
                <Image src={data.galleryImages?.[2] || "/assets/bg/3.jpg"} alt="Gallery 3" fill className="object-cover" />
              </div>
            </div>
            {/* Right: 1 full height */}
            <div className="relative overflow-hidden rounded-2xl">
              <Image src={data.galleryImages?.[3] || "/assets/bg/4.jpg"} alt="Gallery 4" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Motto */}
      <section className="bg-[#f9fafb] px-5 py-12 md:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {data.visionCards.map((card, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-[#eee] transition-all duration-300">
              <div className="h-[160px] md:h-[200px] relative overflow-hidden">
                <Image src={`/assets/bg/${(i % 5) + 1}.jpg`} alt="" fill className="object-cover" />
              </div>
              <div className="p-5 md:p-7 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#2563eb] text-white text-[18px] md:text-[27px] font-bold -mt-12 relative z-[2]">
                  {i + 1}
                </div>
                <h3 className="text-[20px] md:text-[27px] font-bold text-[#0a192f] uppercase my-3 md:mt-4 md:mb-3">
                  {card.title}
                </h3>
                <p className="text-[16px] md:text-[21px] leading-[1.7] text-[#555] m-0">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values Icons */}
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
            {(data.coreValueIcons || [
              { icon: "diamond", title: isVi ? "Bền vững" : "Sustainable", desc: isVi ? "Vì lợi ích lâu dài" : "For long-term benefits" },
              { icon: "award", title: isVi ? "Uy tín" : "Credibility", desc: isVi ? "Giữ gìn chữ tín" : "Maintaining trust" },
              { icon: "star", title: isVi ? "Chuẩn mực" : "Standards", desc: isVi ? "Tôn trọng các nguyên tắc và ứng xử chuẩn mực" : "Respecting principles and standards" },
              { icon: "users", title: isVi ? "Gắn kết" : "Unity", desc: isVi ? "Gần gũi, chia sẻ" : "Close and sharing" },
              { icon: "lightbulb", title: isVi ? "Đổi mới" : "Innovation", desc: isVi ? "Luôn hướng đến cái mới để hoàn thiện mọi mặt" : "Always innovating to improve" },
            ]).map((item: { icon: string; title: string; desc: string }, i: number) => (
              <div key={i} className="flex flex-col items-center text-center">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section id="lich-su" className="bg-white px-5 py-12 md:py-20">
        <div>
          <h2 className="text-[24px] md:text-[36px] font-bold text-[#0a192f] uppercase tracking-wider mb-8 md:mb-10">
            {data.historyTitle}
          </h2>
          <AboutClientSections
            historyEvents={data.historyEvents}
            certificates={data.certificates}
            certificatesTitle={data.certificatesTitle}
            locale={locale}
          />
        </div>
      </section>

      {/* Leadership */}
      <section id="lanh-dao" className="bg-white px-5 py-12 md:py-20">
        <div>
          <h2 className="text-[24px] md:text-[36px] font-bold text-[#0a192f] uppercase tracking-wider mb-8 md:mb-10">
            {data.leadershipTitle}
          </h2>

          {/* Tầng 1: Tổng giám đốc */}
          {data.leaders.length > 0 && (
            <div className="flex justify-center mb-8 md:mb-12">
              <div className="text-center max-w-[360px]">
                <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[#f3f4f6] rounded-xl mb-4 flex items-center justify-center overflow-hidden mx-auto relative">
                  {data.leaders[0].photoUrl ? (
                    <Image src={data.leaders[0].photoUrl} alt={data.leaders[0].name} fill className="object-cover" />
                  ) : (
                    <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  )}
                </div>
                <h3 className="text-[20px] md:text-[24px] font-bold text-[#0a192f] mb-1">{data.leaders[0].name}</h3>
                <p className="text-[16px] md:text-[20px] text-[#666] m-0 leading-[1.5]">{data.leaders[0].role}</p>
              </div>
            </div>
          )}

          {/* Đường nối sơ đồ */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="w-[2px] h-10 bg-[#d1d5db]" />
          </div>

          {/* Tầng 2: Còn lại */}
          {data.leaders.length > 1 && (
            <div className="flex justify-center">
              <div className="grid grid-cols-1 min-[480px]:grid-cols-2 min-[760px]:grid-cols-3 min-[1024px]:grid-cols-4 gap-6 md:gap-8 w-full">
                {data.leaders.slice(1).map((leader, i) => (
                  <div key={i} className="text-center">
                    <div className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] bg-[#f3f4f6] rounded-xl mb-4 flex items-center justify-center overflow-hidden mx-auto relative">
                      {leader.photoUrl ? (
                        <Image src={leader.photoUrl} alt={leader.name} fill className="object-cover" />
                      ) : (
                        <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-[18px] md:text-[24px] font-bold text-[#0a192f] mb-1">{leader.name}</h3>
                    <p className="text-[14px] md:text-[20px] text-[#666] m-0 leading-[1.5]">{leader.role}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Culture */}
      <section id="nhan-luc" className="bg-[rgb(215,240,253)] px-5 py-12 md:py-20">
        <div>
          <h2 className="text-[24px] md:text-[36px] font-bold text-[#0a192f] uppercase tracking-wider mb-8 md:mb-12">
            {data.cultureTitle}
          </h2>

          {/* Row 1: Image left (50%) | Core Values right (50%) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-10 md:mb-[60px]">
            <div className="flex justify-center items-center">
              <div className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden relative border-[3px] border-[#e5e7eb]">
                <Image src="/assets/bg/2.jpg" alt="" fill className="object-cover" />
              </div>
            </div>
            <div>
              <h3 className="text-[20px] md:text-[27px] font-semibold text-[#2563eb] mb-5">
                {data.coreValuesTitle}
              </h3>
              {data.coreValues.map((v, i) => (
                <div key={i} className="flex gap-3 mb-3.5">
                  <span className="text-[#2563eb] text-[16px] md:text-[21px] mt-0.5 shrink-0">●</span>
                  <p className="text-[16px] md:text-[21px] leading-[1.7] text-[#374151] m-0">{v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Company Culture left (50%) | Image right (50%) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-[20px] md:text-[27px] font-semibold text-[#2563eb] mb-5">
                {data.companyCultureTitle}
              </h3>
              {data.companyCultureItems.map((item, i) => (
                <div key={i} className="flex gap-3 mb-3.5">
                  <span className="text-[#2563eb] text-[16px] md:text-[21px] mt-0.5 shrink-0">●</span>
                  <p className="text-[16px] md:text-[21px] leading-[1.7] text-[#374151] m-0">{item}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center order-1 md:order-2">
              <div className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden relative border-[3px] border-[#e5e7eb]">
                <Image src="/assets/bg/3.jpg" alt="" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nguồn nhân lực */}
      <section id="nhan-luc" className="px-5 py-20 sm:px-8" style={{ backgroundColor: "#f5f9f9" }}>
        <div>
          <h2 className="text-center font-bold text-[#1a1a1a] mb-4" style={{ fontSize: "clamp(36px, 3vw, 60px)" }}>
            {isVi ? "Nguồn nhân lực" : "Human Resources"}
          </h2>
          <p className="text-center text-[#666] mx-auto mb-12" style={{ fontSize: "clamp(16px, 1.1vw, 20px)", maxWidth: 900, lineHeight: 1.7 }}>
            {isVi
              ? "Con người là một trong những tài sản lớn nhất được chú trọng đầu tư và phát triển tại DTS. Đội ngũ nhân lực ưu tú là nền tảng vững chắc giúp DTS không ngừng tạo nên những giá trị to lớn cho khách hàng."
              : "People are one of the greatest assets that DTS invests in and develops. Our talented workforce is the solid foundation helping DTS continuously create great value for customers."}
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left: Stats */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              {/* Nhân sự */}
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
              {/* Kỹ sư */}
              <div className="flex gap-5">
                <span className="text-[48px] md:text-[56px] font-bold text-[#2563eb] leading-none shrink-0">60+</span>
                <div>
                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#1a1a1a] mb-2">
                    {isVi ? "Kỹ sư" : "Engineers"}
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-[#666] leading-[1.7] m-0">
                    {isVi
                      ? "Đội ngũ kỹ sư tại DTS được tuyển chọn từ các trường Đại học danh tiếng tại Việt Nam và nước ngoài. Các kỹ sư được đào tạo chuyên môn, tự nghiên cứu và qua các khoá đào tạo quốc tế uy tín."
                      : "DTS engineers are selected from prestigious universities in Vietnam and abroad. Engineers are professionally trained through self-study and internationally accredited courses."}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Certifications */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
