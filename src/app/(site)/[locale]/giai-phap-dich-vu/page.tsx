import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, ShieldCheck, Brain } from "lucide-react";
import { solutionCategories } from "@/data/solutions";

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as "vi" | "en";

  const categoryIcons = [Shield, ShieldCheck, Brain];

  return (
    <main className="pt-[80px]">
      {/* Hero */}
      <section className="relative flex min-h-[480px] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/assets/bg/4.jpg" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/70 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
          <h1 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {lang === "vi" ? "Giải pháp & Dịch vụ" : "Solutions & Services"}
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
            {lang === "vi"
              ? "Ba trụ cột giải pháp công nghệ chiến lược, giúp doanh nghiệp phát triển bền vững trong kỷ nguyên số."
              : "Three strategic technology solution pillars, helping enterprises grow sustainably in the digital era."}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {solutionCategories.map((cat, i) => {
              const Icon = categoryIcons[i];
              const href =
                lang === "vi"
                  ? `/${locale}/giai-phap-dich-vu/${cat.slug}`
                  : `/${locale}/solutions/${cat.slug}`;

              return (
                <Link
                  key={cat.slug}
                  href={href}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:border-primary/20 hover:shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={cat.heroImage}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 to-transparent" />
                    <div className="absolute bottom-4 left-5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/90 text-white">
                      <Icon size={20} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-lg font-bold text-[#1a1a1a] group-hover:text-primary transition-colors">
                      {cat.title[lang]}
                    </h2>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-primary/60">
                      {cat.subtitle[lang]}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-gray-500">
                      {cat.heroDescription[lang]}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary">
                      <span>{lang === "vi" ? "Xem chi tiết" : "View details"}</span>
                      <ArrowRight
                        size={16}
                        className="-translate-x-1 transition-transform group-hover:translate-x-0"
                      />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {cat.children.slice(0, 4).map((child) => (
                        <span
                          key={child.href}
                          className="rounded-full bg-gray-50 px-3 py-1 text-[11px] text-gray-500"
                        >
                          {child.title[lang]}
                        </span>
                      ))}
                      {cat.children.length > 4 && (
                        <span className="rounded-full bg-gray-50 px-3 py-1 text-[11px] text-gray-500">
                          +{cat.children.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
