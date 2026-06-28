import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutionCategories } from "@/data/solutions";

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as "vi" | "en";

  return (
    <main className="solutions-overview-mobile pt-[80px]">
      {/* Hero */}
      <section className="site-hero">
        <div className="absolute inset-0">
          <Image
            src="/assets/bg/1.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="site-hero-content">
          <h1 className="site-hero-title">
            {lang === "vi" ? "Giải pháp & Dịch vụ" : "Solutions & Services"}
          </h1>
          <p className="site-hero-description">
            {lang === "vi"
              ? "Đồng hành cùng doanh nghiệp trên hành trình chuyển đổi số an toàn và bền vững"
              : "Accompanying enterprises on a safe and sustainable digital transformation journey"}
          </p>
          <Link
            href={`/${locale}/lien-he`}
            className="site-hero-cta"
          >
            {lang === "vi" ? "Tư vấn ngay" : "Get in touch"}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 4 Columns */}
      <section className="px-5 py-20 sm:px-8" style={{ backgroundColor: "rgb(221,234,234)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {/* 4 solution categories (gồm cả "Dịch vụ khác") */}
          {solutionCategories.map((cat) => {
            const href = lang === "vi"
              ? `/${locale}/giai-phap-dich-vu/${cat.slug}`
              : `/${locale}/solutions/${cat.slug}`;

            return (
              <div key={cat.slug} id={cat.slug} style={{ backgroundColor: "#fff", borderRadius: 16, padding: 32, border: "1px solid #eee" }}>
                {/* Column header */}
                <Link href={href} style={{ textDecoration: "none" }}>
                  <h2 className="font-bold uppercase" style={{ fontSize: 20, color: "#1a2d3d", letterSpacing: 1 }}>
                    {cat.title[lang]}
                  </h2>
                </Link>
                <p style={{ fontSize: 14, color: "#888", marginTop: 4, fontStyle: "italic" }}>
                  ({cat.subtitle[lang]})
                </p>
                <p style={{ fontSize: 14, color: "#555", marginTop: 12, lineHeight: 1.7 }}>
                  {cat.heroDescription[lang]}
                </p>

                {/* Sub items */}
                <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 20 }}>
                  {cat.children.map((child) => {
                    const childHref = lang === "vi"
                      ? `/${locale}/giai-phap-dich-vu/${cat.slug}/${child.href}`
                      : `/${locale}/solutions/${cat.slug}/${child.href}`;

                    return (
                      <Link key={child.href} href={childHref} style={{ textDecoration: "none" }}>
                        <div>
                          <h3 className="font-bold" style={{ fontSize: 15, color: "#1a2d3d" }}>
                            {child.title[lang]}
                          </h3>
                          <p style={{ fontSize: 13, color: "#777", marginTop: 4, lineHeight: 1.6 }}>
                            {child.description[lang]}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
