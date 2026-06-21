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
    <main style={{ paddingTop: 80 }}>
      {/* Hero */}
      <section style={{ position: "relative", display: "flex", alignItems: "flex-end", minHeight: 460, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/assets/bg/1.jpg" alt="" fill style={{ objectFit: "cover" }} priority />
        </div>
        <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "80px 20px 60px" }}>
          <nav style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#888", marginBottom: 20 }}>
            <Link href={`/${locale}`} style={{ color: "#888", textDecoration: "none" }}>
              {isVi ? "TRANG CHỦ" : "HOME"}
            </Link>
            <span style={{ color: "#bbb" }}>&rarr;</span>
            <span style={{ color: "#1a1a1a", fontWeight: 600 }}>{isVi ? "GIỚI THIỆU CHUNG" : "ABOUT US"}</span>
          </nav>
          <h1 style={{ fontSize: 72, fontWeight: 700, color: "#1a1a1a", margin: 0 }}>
            {isVi ? "Về chúng tôi" : "About Us"}
          </h1>
        </div>
      </section>

      {/* Brand Story */}
      <section style={{ backgroundColor: "#fff", padding: "80px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          <div>
            <h2 style={{ fontSize: 42, fontWeight: 700, color: "#0a192f", textTransform: "uppercase", margin: "0 0 24px", letterSpacing: 1 }}>
              {data.brandStoryTitle}
            </h2>
            <div style={{ width: 60, height: 3, backgroundColor: "#dc2626", marginBottom: 28 }} />
            {paragraphs.map((p, i) => (
              <p key={i} style={{ fontSize: 22, lineHeight: 1.8, color: "#374151", margin: "0 0 16px" }}>{p}</p>
            ))}
            <Link href={data.learnMoreHref} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 22, fontWeight: 600, color: "#2563eb", textDecoration: "none", marginTop: 12 }}>
              {data.learnMoreLabel} &rarr;
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>
            <div style={{ position: "relative", width: 280, height: 280 }}>
              <Image src="/assets/dtg-logo.png" alt="DTG" fill style={{ objectFit: "contain" }} />
            </div>
            <p style={{ fontSize: 33, fontWeight: 700, color: "#dc2626", textTransform: "uppercase", letterSpacing: 2, marginTop: 24, textAlign: "center" }}>
              {data.slogan}
            </p>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Motto */}
      <section style={{ backgroundColor: "#f9fafb", padding: "80px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          {data.visionCards.map((card, i) => (
            <div key={i} style={{ backgroundColor: "#fff", borderRadius: 16, overflow: "hidden", border: "1px solid #eee", transition: "transform 0.3s, box-shadow 0.3s" }}>
              <div style={{ height: 200, position: "relative", overflow: "hidden" }}>
                <Image src={`/assets/bg/${(i % 5) + 1}.jpg`} alt="" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: 28, textAlign: "center" }}>
                <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: "50%", backgroundColor: "#2563eb", color: "#fff", fontSize: 27, fontWeight: 700, marginTop: -48, position: "relative", zIndex: 2 }}>
                  {i + 1}
                </div>
                <h3 style={{ fontSize: 27, fontWeight: 700, color: "#0a192f", textTransform: "uppercase", margin: "16px 0 12px" }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: 21, lineHeight: 1.7, color: "#555", margin: 0 }}>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* History Timeline */}
      <section style={{ backgroundColor: "#fff", padding: "80px 20px" }}>
        <div>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: "#0a192f", textTransform: "uppercase", letterSpacing: 1, marginBottom: 40 }}>
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
      <section style={{ backgroundColor: "#fff", padding: "80px 20px" }}>
        <div>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: "#0a192f", textTransform: "uppercase", letterSpacing: 1, marginBottom: 40 }}>
            {data.leadershipTitle}
          </h2>

          {/* Tầng 1: Tổng giám đốc */}
          {data.leaders.length > 0 && (
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 48 }}>
              <div style={{ textAlign: "center", maxWidth: 360 }}>
                <div style={{ width: 300, height: 300, backgroundColor: "#f3f4f6", borderRadius: 12, marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", margin: "0 auto 16px" }}>
                  <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 700, color: "#0a192f", margin: "0 0 4px" }}>{data.leaders[0].name}</h3>
                <p style={{ fontSize: 20, color: "#666", margin: 0, lineHeight: 1.5 }}>{data.leaders[0].role}</p>
              </div>
            </div>
          )}

          {/* Đường nối sơ đồ */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 48 }}>
            <div style={{ width: 2, height: 40, backgroundColor: "#d1d5db" }} />
          </div>

          {/* Tầng 2: Còn lại */}
          {data.leaders.length > 1 && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="grid grid-cols-1 min-[480px]:grid-cols-2 min-[760px]:grid-cols-3 min-[1024px]:grid-cols-4" style={{ gap: 32, width: "100%" }}>
                {data.leaders.slice(1).map((leader, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div style={{ width: 200, height: 200, backgroundColor: "#f3f4f6", borderRadius: 12, marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", margin: "0 auto 16px" }}>
                      <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <h3 style={{ fontSize: 24, fontWeight: 700, color: "#0a192f", margin: "0 0 4px" }}>{leader.name}</h3>
                    <p style={{ fontSize: 20, color: "#666", margin: 0, lineHeight: 1.5 }}>{leader.role}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Culture */}
      <section style={{ backgroundColor: "rgb(215, 240, 253)", padding: "80px 20px" }}>
        <div>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: "#0a192f", textTransform: "uppercase", letterSpacing: 1, marginBottom: 48 }}>
            {data.cultureTitle}
          </h2>

          {/* Row 1: Image left (50%) | Core Values right (50%) */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", marginBottom: 60 }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{ width: 280, height: 280, borderRadius: "50%", overflow: "hidden", position: "relative", border: "3px solid #e5e7eb" }}>
                <Image src="/assets/bg/2.jpg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: 27, fontWeight: 600, color: "#2563eb", marginBottom: 20 }}>
                {data.coreValuesTitle}
              </h3>
              {data.coreValues.map((v, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 14 }}>
                  <span style={{ color: "#2563eb", fontSize: 21, marginTop: 2, flexShrink: 0 }}>●</span>
                  <p style={{ fontSize: 21, lineHeight: 1.7, color: "#374151", margin: 0 }}>{v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Company Culture left (50%) | Image right (50%) */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <h3 style={{ fontSize: 27, fontWeight: 600, color: "#2563eb", marginBottom: 20 }}>
                {data.companyCultureTitle}
              </h3>
              {data.companyCultureItems.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 14 }}>
                  <span style={{ color: "#2563eb", fontSize: 21, marginTop: 2, flexShrink: 0 }}>●</span>
                  <p style={{ fontSize: 21, lineHeight: 1.7, color: "#374151", margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{ width: 280, height: 280, borderRadius: "50%", overflow: "hidden", position: "relative", border: "3px solid #e5e7eb" }}>
                <Image src="/assets/bg/3.jpg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates — rendered by client component with year filter */}
    </main>
  );
}
