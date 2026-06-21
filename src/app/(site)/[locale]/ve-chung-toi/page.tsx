import Image from "next/image";
import Link from "next/link";
import { getVeChungToiPageData } from "@/sanity/queries";
import { AboutClientSections } from "@/components/sections/AboutClientSections";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await getVeChungToiPageData(locale);

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
          <nav className="site-breadcrumb">
            <Link href={`/${locale}`}>
              {isVi ? "TRANG CHỦ" : "HOME"}
            </Link>
            <span>&rarr;</span>
            <span>{isVi ? "GIỚI THIỆU CHUNG" : "ABOUT US"}</span>
          </nav>
          <h1 className="site-hero-title">
            {isVi ? "Về chúng tôi" : "About Us"}
          </h1>
          <p className="site-hero-description">
            {data.brandStoryTitle}
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section id="gioi-thieu" className="bg-white px-5 py-12 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-[60px] items-start">
          <div>
            <h2 className="text-[28px] md:text-[42px] font-bold text-[#0a192f] uppercase tracking-wider mb-6">
              {data.brandStoryTitle}
            </h2>
            <div className="w-[60px] h-[3px] bg-[#dc2626] mb-7" />
            {paragraphs.map((p, i) => (
              <p key={i} className="text-[16px] md:text-[22px] leading-[1.8] text-[#374151] mb-4">{p}</p>
            ))}
            <Link href={data.learnMoreHref} className="inline-flex items-center gap-1.5 text-[16px] md:text-[22px] font-semibold text-[#2563eb] no-underline mt-3">
              {data.learnMoreLabel} &rarr;
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center p-5 md:p-10">
            <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px]">
              <Image src="/assets/dtg-logo.png" alt="DTG" fill className="object-contain" />
            </div>
            <p className="text-[22px] md:text-[33px] font-bold text-[#dc2626] uppercase tracking-widest mt-6 text-center">
              {data.slogan}
            </p>
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
                <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[#f3f4f6] rounded-xl mb-4 flex items-center justify-center overflow-hidden mx-auto">
                  <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
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
                    <div className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] bg-[#f3f4f6] rounded-xl mb-4 flex items-center justify-center overflow-hidden mx-auto">
                      <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
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

      {/* Certificates — rendered by client component with year filter */}
    </main>
  );
}
