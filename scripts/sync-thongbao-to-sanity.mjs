import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "036on1ws",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

const viData = {
  heroTitle: "Thông báo và đồng ý về\nviệc xử lý dữ liệu cá nhân",
  formSectionTitle: "THÔNG TIN CÁ NHÂN",
  nameLabel: "HỌ VÀ TÊN",
  phoneLabel: "SỐ ĐIỆN THOẠI",
  emailLabel: "EMAIL",
  positionLabel: "VỊ TRÍ ỨNG TUYỂN",
  positions: ["Chọn vị trí", "Nhân viên kinh doanh", "Kỹ sư hệ thống", "Chuyên viên bảo mật", "Nhân viên kế toán", "Khác"],
  contentTitle: "NỘI DUNG",
  consentLabel: "Tôi đã đọc, hiểu và đồng ý với các điều khoản về việc xử lý dữ liệu cá nhân nêu trên.",
  submitLabel: "Xác nhận đồng ý",
};

const enData = {
  heroTitle: "Notice and consent on\npersonal data processing",
  formSectionTitle: "PERSONAL INFORMATION",
  nameLabel: "FULL NAME",
  phoneLabel: "PHONE NUMBER",
  emailLabel: "EMAIL",
  positionLabel: "POSITION",
  positions: ["Select position", "Sales Executive", "System Engineer", "Security Specialist", "Accountant", "Other"],
  contentTitle: "CONTENT",
  consentLabel: "I have read, understood and agreed to the terms of personal data processing stated above.",
  submitLabel: "Confirm & Agree",
};

async function sync() {
  const existing = await client.fetch(`*[_type == "thongBaoDuLieu"]{ _id, language }`);

  for (const lang of ["vi", "en"]) {
    const data = lang === "vi" ? viData : enData;
    const doc = existing.find((d) => d.language === lang);

    if (doc) {
      console.log(`Updating thongBaoDuLieu (${lang}) — ${doc._id}`);
      await client.patch(doc._id).set(data).commit();
      console.log(`✓ Updated ${lang}`);
    } else {
      console.log(`Creating thongBaoDuLieu (${lang})`);
      await client.create({ _type: "thongBaoDuLieu", language: lang, ...data });
      console.log(`✓ Created ${lang}`);
    }
  }
  console.log("\nDone!");
}

sync().catch(console.error);
