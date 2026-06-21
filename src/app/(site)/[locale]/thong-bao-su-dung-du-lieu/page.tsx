import Image from "next/image";
import Link from "next/link";
import { getThongBaoDuLieuData } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";

export default async function DataUsageNoticePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isVi = locale === "vi";
  const data = await getThongBaoDuLieuData(locale);

  return (
    <main style={{ paddingTop: 80 }}>
      {/* Hero */}
      <section className="site-hero">
        <div className="absolute inset-0">
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #1a8a7d 0%, #2a6cb0 50%, #4a90d9 100%)" }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "50%", opacity: 0.15 }}>
            <Image src="/assets/bg/4.jpg" alt="" fill className="object-cover" />
          </div>
        </div>
        <div className="site-hero-content">
          <h1 className="site-hero-title" style={{ whiteSpace: "pre-line" }}>
            {data.heroTitle}
          </h1>
        </div>
      </section>

      {/* Form Section */}
      <section style={{ backgroundColor: "#fff", padding: "48px 20px" }}>
        <h2 style={{ fontSize: "clamp(20px, 1.5vw, 28px)", fontWeight: 700, color: "#1a8a7d", textTransform: "uppercase", marginBottom: 32, paddingLeft: 16, borderLeft: "4px solid #1a8a7d" }}>
          {data.formSectionTitle}
        </h2>

        <form>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#1a1a1a", textTransform: "uppercase", marginBottom: 8 }}>
                {data.nameLabel}
              </label>
              <input
                type="text"
                placeholder={isVi ? "Nguyễn Văn A" : "John Doe"}
                className="w-full rounded-lg border border-gray-300 px-4 text-[15px] outline-none focus:border-[#2563eb]" style={{ height: 48, color: "#1a1a1a" }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#1a1a1a", textTransform: "uppercase", marginBottom: 8 }}>
                {data.phoneLabel}
              </label>
              <input
                type="tel"
                placeholder="090 123 4567"
                className="w-full rounded-lg border border-gray-300 px-4 text-[15px] outline-none focus:border-[#2563eb]" style={{ height: 48, color: "#1a1a1a" }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#1a1a1a", textTransform: "uppercase", marginBottom: 8 }}>
                {data.emailLabel}
              </label>
              <input
                type="email"
                placeholder="email@vi-du.com"
                className="w-full rounded-lg border border-gray-300 px-4 text-[15px] outline-none focus:border-[#2563eb]" style={{ height: 48, color: "#1a1a1a" }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#1a1a1a", textTransform: "uppercase", marginBottom: 8 }}>
                {data.positionLabel}
              </label>
              <select className="w-full rounded-lg border border-gray-300 bg-white px-4 text-[15px] outline-none focus:border-[#2563eb]" style={{ height: 48, color: "#1a1a1a" }}>
                {data.positions.map((pos) => (
                  <option key={pos} value={pos}>{pos}</option>
                ))}
              </select>
            </div>
          </div>
        </form>
      </section>

      {/* Content Section */}
      <section style={{ backgroundColor: "#f5f5f5", padding: "48px 20px" }}>
        <h2 style={{ fontSize: "clamp(20px, 1.5vw, 28px)", fontWeight: 700, color: "#1a1a1a", textTransform: "uppercase", marginBottom: 24 }}>
          {data.contentTitle}
        </h2>

        <div style={{ backgroundColor: "#fff", borderRadius: 8, padding: 32, border: "1px solid #e5e7eb", fontSize: 15, lineHeight: 1.8, color: "#374151", maxHeight: 500, overflowY: "auto" }}>
          {data.body && data.body.length > 0 ? (
            <div className="prose prose-sm max-w-none prose-p:text-[15px] prose-p:leading-[1.8] prose-p:text-[#374151]">
              <PortableText value={data.body as never} />
            </div>
          ) : (
            data.fallbackBody?.map((p, i) => (
              <p key={i} style={{ marginBottom: 20, whiteSpace: "pre-line" }}>{p}</p>
            ))
          )}
        </div>

        {/* Consent + Submit */}
        <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 24 }}>
          {/* Checkbox 1: Bắt buộc */}
          <label style={{ display: "flex", alignItems: "flex-start", gap: 12, cursor: "pointer" }}>
            <input type="checkbox" style={{ marginTop: 4, width: 20, height: 20, flexShrink: 0 }} />
            <span style={{ fontSize: 15, color: "#374151", lineHeight: 1.6 }}>
              <span style={{ color: "#dc2626" }}>* </span>
              {isVi ? "Tôi đã đọc, hiểu và đồng ý với các nội dung tại " : "I have read, understood and agreed to the contents of the "}
              <a href={`/${locale}/thong-bao-su-dung-du-lieu`} style={{ color: "#1a8a7d", textDecoration: "underline", fontWeight: 600 }}>
                {isVi ? "Thông báo và đồng ý xử lý dữ liệu cá nhân" : "Personal Data Processing Notice & Consent"}
              </a>
              {isVi
                ? " của Công ty. Tôi hiểu rằng việc đồng ý này là điều kiện cần thiết để thực hiện quy trình tuyển dụng."
                : " of the Company. I understand that this consent is a prerequisite for the recruitment process."}
            </span>
          </label>

          {/* Checkbox 2: Tùy chọn */}
          <label style={{ display: "flex", alignItems: "flex-start", gap: 12, cursor: "pointer" }}>
            <input type="checkbox" style={{ marginTop: 4, width: 20, height: 20, flexShrink: 0 }} />
            <span style={{ fontSize: 15, color: "#374151", lineHeight: 1.6 }}>
              {isVi
                ? "Tôi đồng ý cho Công ty lưu giữ hồ sơ để liên hệ cho các vị trí công việc phù hợp trong tương lai. "
                : "I agree for the Company to retain my profile for future suitable position opportunities. "}
              <strong>{isVi ? "(Tùy chọn)" : "(Optional)"}</strong>
            </span>
          </label>

          <button
            type="submit"
            style={{
              alignSelf: "flex-start",
              padding: "14px 40px",
              background: "linear-gradient(to right, #2563eb, #7c3aed)",
              color: "#fff",
              fontSize: 16,
              fontWeight: 600,
              borderRadius: 999,
              border: "none",
              cursor: "pointer",
            }}
          >
            {data.submitLabel}
          </button>
        </div>
      </section>
    </main>
  );
}
