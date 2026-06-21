import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutionCategories } from "@/data/solutions";

const otherServices = {
  vi: {
    title: "DỊCH VỤ KHÁC",
    description: "Các dịch vụ hỗ trợ toàn diện, đồng hành cùng doanh nghiệp trong suốt quá trình vận hành.",
    children: [
      { title: "Dịch vụ tư vấn và triển khai giải pháp", description: "Tư vấn chiến lược, thiết kế và triển khai các giải pháp công nghệ phù hợp với nhu cầu và mục tiêu của doanh nghiệp." },
      { title: "Dịch vụ bảo hành bảo trì", description: "Đảm bảo hệ thống vận hành ổn định, bảo trì định kỳ và hỗ trợ kỹ thuật chuyên nghiệp." },
      { title: "Dịch vụ ứng cứu sự cố", description: "Hỗ trợ kịp thời khi xảy ra sự cố kỹ thuật, giảm thiểu gián đoạn và rủi ro cho doanh nghiệp." },
      { title: "Dịch vụ cho thuê thiết bị", description: "Cung cấp thiết bị công nghệ chính hãng với chi phí tối ưu và linh hoạt theo nhu cầu." },
    ],
  },
  en: {
    title: "OTHER SERVICES",
    description: "Comprehensive support services accompanying enterprises throughout their operations.",
    children: [
      { title: "Consulting & Deployment", description: "Strategic consulting, designing and deploying technology solutions tailored to business needs." },
      { title: "Warranty & Maintenance", description: "Ensure stable system operation, periodic maintenance and professional technical support." },
      { title: "Incident Response", description: "Timely support when technical incidents occur, minimizing disruption and risk." },
      { title: "Equipment Leasing", description: "Provide genuine technology equipment with optimal cost and flexible terms." },
    ],
  },
};

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale as "vi" | "en";
  const other = otherServices[lang];

  return (
    <main className="pt-[80px]">
      {/* Hero */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: 460 }}>
        <div className="absolute inset-0">
          <Image
            src="/assets/bg/1.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 w-full px-5 pb-16 pt-24 sm:px-8">
          <nav className="mb-6 flex items-center gap-2 font-medium tracking-wider" style={{ fontSize: 14, color: "#888" }}>
            <Link href={`/${locale}`} style={{ color: "#888", textDecoration: "none" }}>
              {lang === "vi" ? "TRANG CHỦ" : "HOME"}
            </Link>
            <span style={{ color: "#bbb" }}>&rarr;</span>
            <span style={{ color: "#1a1a1a", fontWeight: 600 }}>
              {lang === "vi" ? "GIẢI PHÁP & DỊCH VỤ" : "SOLUTIONS & SERVICES"}
            </span>
          </nav>
          <h1 className="font-bold" style={{ fontSize: 72, color: "#1a1a1a", margin: 0 }}>
            {lang === "vi" ? "Giải pháp & Dịch vụ" : "Solutions & Services"}
          </h1>
          <p className="mt-4" style={{ fontSize: 22, color: "#555", maxWidth: 700 }}>
            {lang === "vi"
              ? "Đồng hành cùng doanh nghiệp trên hành trình chuyển đổi số an toàn và bền vững"
              : "Accompanying enterprises on a safe and sustainable digital transformation journey"}
          </p>
          <Link
            href={`/${locale}/lien-he`}
            className="mt-8 inline-flex items-center gap-3 rounded-full px-8 py-4 font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(to right, #2563eb, #7c3aed)", fontSize: 18 }}
          >
            {lang === "vi" ? "Tư vấn ngay" : "Get in touch"}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 4 Columns */}
      <section className="px-5 py-20 sm:px-8" style={{ backgroundColor: "rgb(221,234,234)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {/* 3 solution categories */}
          {solutionCategories.map((cat) => {
            const href = lang === "vi"
              ? `/${locale}/giai-phap-dich-vu/${cat.slug}`
              : `/${locale}/solutions/${cat.slug}`;

            return (
              <div key={cat.slug} style={{ backgroundColor: "#fff", borderRadius: 16, padding: 32, border: "1px solid #eee" }}>
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

          {/* 4th column: Dịch vụ khác */}
          <div style={{ backgroundColor: "#fff", borderRadius: 16, padding: 32, border: "1px solid #eee" }}>
            <h2 className="font-bold uppercase" style={{ fontSize: 20, color: "#1a2d3d", letterSpacing: 1 }}>
              {other.title}
            </h2>
            <p style={{ fontSize: 14, color: "#555", marginTop: 12, lineHeight: 1.7 }}>
              {other.description}
            </p>

            <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 20 }}>
              {other.children.map((item, i) => (
                <div key={i}>
                  <h3 className="font-bold" style={{ fontSize: 15, color: "#1a2d3d" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "#777", marginTop: 4, lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
