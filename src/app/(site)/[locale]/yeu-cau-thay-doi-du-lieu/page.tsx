"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DataChangeRequestPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const [locale, setLocale] = useState("vi");
  const isVi = locale === "vi";

  // Resolve params
  params.then((p) => setLocale(p.locale));

  return <DataChangeRequestContent locale={locale} isVi={isVi} />;
}

function DataChangeRequestContent({ locale, isVi }: { locale: string; isVi: boolean }) {
  const [selected, setSelected] = useState<string | null>(null);

  const subjects = isVi
    ? ["Chọn đối tượng", "Người lao động", "Người lao động đã nghỉ việc", "Thực tập sinh/ Cộng tác viên", "Ứng viên"]
    : ["Select subject", "Employee", "Former employee", "Intern / Collaborator", "Candidate"];

  const dataScopes = isVi
    ? ["Ngày sinh", "Email", "Số điện thoại", "Khác"]
    : ["Date of birth", "Email", "Phone number", "Other"];

  const options = [
    { id: "withdraw-all", label: isVi ? "Rút lại toàn bộ sự đồng ý xử lý dữ liệu." : "Withdraw all consent for data processing." },
    { id: "withdraw-storage", label: isVi ? "Chỉ rút lại sự đồng ý đối với mục lưu trữ hồ sơ tiềm năng." : "Only withdraw consent for potential profile storage." },
    { id: "delete-all", label: isVi ? "Yêu cầu xóa toàn bộ dữ liệu cá nhân." : "Request deletion of all personal data." },
    { id: "delete-partial", label: isVi ? "Yêu cầu xóa một phần dữ liệu cá nhân" : "Request partial deletion of personal data", hasDropdown: true },
    { id: "restrict", label: isVi ? "Yêu cầu hạn chế xử lý dữ liệu" : "Request restriction of data processing", hasInput: true },
  ];

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
            {isVi
              ? "Yêu cầu thay đổi sự đồng\ný xử lý dữ liệu cá nhân"
              : "Request to change personal\ndata processing consent"}
          </h1>
        </div>
      </section>

      {/* Form: Thông tin cá nhân */}
      <section style={{ backgroundColor: "#fff", padding: "48px 20px" }}>
        <h2 style={{ fontSize: "clamp(20px, 1.5vw, 28px)", fontWeight: 700, color: "#1a8a7d", textTransform: "uppercase", marginBottom: 32, paddingLeft: 16, borderLeft: "4px solid #1a8a7d" }}>
          {isVi ? "THÔNG TIN CÁ NHÂN" : "PERSONAL INFORMATION"}
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#1a1a1a", textTransform: "uppercase", marginBottom: 8 }}>
              {isVi ? "HỌ VÀ TÊN" : "FULL NAME"}
            </label>
            <input
              type="text"
              placeholder={isVi ? "Nguyễn Văn A" : "John Doe"}
              className="w-full rounded-lg border border-gray-300 px-4 text-[15px] outline-none focus:border-[#2563eb]"
              style={{ height: 48, color: "#1a1a1a" }}
            />
          </div>
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#1a1a1a", textTransform: "uppercase", marginBottom: 8 }}>
              {isVi ? "SỐ ĐIỆN THOẠI" : "PHONE NUMBER"}
            </label>
            <input
              type="tel"
              placeholder="090 123 4567"
              className="w-full rounded-lg border border-gray-300 px-4 text-[15px] outline-none focus:border-[#2563eb]"
              style={{ height: 48, color: "#1a1a1a" }}
            />
          </div>
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#1a1a1a", textTransform: "uppercase", marginBottom: 8 }}>
              EMAIL
            </label>
            <input
              type="email"
              placeholder="email@vi-du.com"
              className="w-full rounded-lg border border-gray-300 px-4 text-[15px] outline-none focus:border-[#2563eb]"
              style={{ height: 48, color: "#1a1a1a" }}
            />
          </div>
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#1a1a1a", textTransform: "uppercase", marginBottom: 8 }}>
              {isVi ? "ĐỐI TƯỢNG" : "SUBJECT"}
            </label>
            <select
              className="w-full rounded-lg border border-gray-300 bg-white px-4 text-[15px] outline-none focus:border-[#2563eb]"
              style={{ height: 48, color: "#1a1a1a" }}
            >
              {subjects.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Nội dung */}
      <section style={{ backgroundColor: "#f5f5f5", padding: "48px 20px" }}>
        <h2 style={{ fontSize: "clamp(20px, 1.5vw, 28px)", fontWeight: 700, color: "#1a8a7d", textTransform: "uppercase", marginBottom: 12, paddingLeft: 16, borderLeft: "4px solid #1a8a7d" }}>
          {isVi ? "NỘI DUNG" : "CONTENT"}
        </h2>
        <p style={{ fontSize: 14, color: "#666", marginBottom: 24 }}>
          {isVi ? "Tick chọn một" : "Select one"}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {options.map((opt) => (
            <div
              key={opt.id}
              style={{
                padding: "16px 20px",
                backgroundColor: "#fff",
                borderRadius: 8,
                border: selected === opt.id ? "2px solid #1a8a7d" : "1px solid #e5e7eb",
              }}
            >
              <label style={{ display: "flex", alignItems: "center", gap: 16, cursor: "pointer", fontSize: 15, color: "#374151" }}>
                <input
                  type="radio"
                  name="request-type"
                  value={opt.id}
                  checked={selected === opt.id}
                  onChange={() => setSelected(opt.id)}
                  style={{ width: 20, height: 20, flexShrink: 0 }}
                />
                {opt.label}

                {/* Inline dropdown for delete-partial */}
                {opt.hasDropdown && (
                  <select
                    className="ml-4 rounded-lg border border-gray-300 bg-white px-3 text-[14px] outline-none"
                    style={{ height: 40, color: "#1a1a1a", minWidth: 200 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <option>{isVi ? "Chọn phạm vi dữ liệu" : "Select data scope"}</option>
                    {dataScopes.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                )}

                {/* Inline input for restrict */}
                {opt.hasInput && (
                  <input
                    type="text"
                    placeholder={isVi ? "Nêu rõ phạm vi..." : "Specify scope..."}
                    className="ml-4 rounded-lg border border-gray-300 px-3 text-[14px] outline-none"
                    style={{ height: 40, color: "#1a1a1a", minWidth: 200 }}
                    onClick={(e) => e.stopPropagation()}
                  />
                )}
              </label>
            </div>
          ))}
        </div>

        {/* Ghi chú */}
        <div style={{ marginTop: 24 }}>
          <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#1a1a1a", textTransform: "uppercase", marginBottom: 8 }}>
            {isVi ? "GHI CHÚ" : "NOTES"}
          </label>
          <textarea
            placeholder={isVi ? "Chia sẻ thêm lý do của bạn..." : "Share your reasons..."}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-[15px] outline-none focus:border-[#2563eb]"
            style={{ minHeight: 120, color: "#1a1a1a", resize: "vertical" }}
          />
        </div>

        {/* Legal text */}
        <div style={{ marginTop: 32, fontSize: 14, lineHeight: 1.7, color: "#666" }}>
          <p style={{ marginBottom: 16 }}>
            {isVi
              ? 'Khi Tôi rút lại sự đồng ý hoặc yêu cầu xóa, hạn chế xử lý dữ liệu, Công ty sẽ ngừng sử dụng và xử lý các dữ liệu Tôi đã cung cấp cho bất kỳ mục đích nào tại thời điểm đó trở đi, trừ các trường hợp bắt buộc theo pháp luật quy định. Việc rút lại sự đồng ý hoặc yêu cầu xóa dữ liệu không có hiệu lực hồi tố đối với các hoạt động xử lý dữ liệu đã được Công ty thực hiện trước thời điểm nhận được yêu cầu hợp lệ.'
              : 'When I withdraw consent or request deletion/restriction of data processing, the Company will stop using and processing the data I provided for any purpose from that point onwards, except as required by law. Withdrawal of consent or data deletion requests shall not have retroactive effect on data processing activities already carried out by the Company prior to receiving a valid request.'}
          </p>
          <p>
            {isVi
              ? <>Tôi hiểu và chấp thuận rằng đối với các dữ liệu liên quan đến mục đích (bắt buộc) ở Mục 3 <Link href={`/${locale}/thong-bao-su-dung-du-lieu`} style={{ color: "#1a8a7d", textDecoration: "underline" }}>Thông báo và Đồng ý về việc xử lý dữ liệu cá nhân</Link>, việc rút lại sự đồng ý hoặc yêu cầu xóa dữ liệu đồng nghĩa với việc Công ty buộc phải dừng quy trình tuyển dụng và hồ sơ của Tôi sẽ bị loại bỏ khỏi hệ thống do không đủ thông tin để tiếp tục đánh giá hoặc xác lập quan hệ lao động.</>
              : <>I understand and accept that for data related to mandatory purposes in Section 3 of the <Link href={`/${locale}/thong-bao-su-dung-du-lieu`} style={{ color: "#1a8a7d", textDecoration: "underline" }}>Personal Data Processing Notice & Consent</Link>, withdrawal of consent or data deletion means the Company must stop the recruitment process and my profile will be removed from the system.</>}
          </p>
        </div>

        {/* Submit */}
        <div style={{ marginTop: 32, display: "flex", justifyContent: "center" }}>
          <button
            type="submit"
            style={{
              padding: "14px 48px",
              background: "linear-gradient(to right, #2563eb, #7c3aed)",
              color: "#fff",
              fontSize: 16,
              fontWeight: 600,
              borderRadius: 999,
              border: "none",
              cursor: "pointer",
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            {isVi ? "GỬI YÊU CẦU" : "SUBMIT REQUEST"}
          </button>
        </div>
      </section>
    </main>
  );
}
