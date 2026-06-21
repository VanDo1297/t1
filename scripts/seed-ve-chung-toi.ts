import { createClient } from "next-sanity";

const client = createClient({
  projectId: "036on1ws",
  dataset: "production",
  apiVersion: "2024-01-01",
  token:
    "skz8wmmR7q1SY3Hi1SBcdgBHqPcNkn9GLvPkLpSilSgUrdx8fHW0gwNBZYogY2M1VfvK6dWSJ3XsfHyZ1dHREkbqqvRiAP1q4z9I91Bt7uskqUBDdT0VmpcEyXLe09uyw6caf1hMGCiM1NSFI7rLnkHRsQGYpkJ2WpVMnmYIy82ePlZ0L4Ce",
  useCdn: false,
});

const docs = [
  {
    _id: "veChungToiPage-vi",
    _type: "veChungToiPage",
    language: "vi",
    brandStoryTitle: "CÂU CHUYỆN THƯƠNG HIỆU",
    brandStoryContent:
      "Tại DTG CORP, chúng tôi không chỉ nhìn nhận công nghệ như một công cụ, mà là nền tảng cốt yếu để doanh nghiệp bứt phá. Giữa làn sóng chuyển đổi số mạnh mẽ, DTG Tiền thân của Công Ty Cổ Phần Công Nghệ DTG (DTG CORP) là của hàng kinh doanh sản phẩm Công Nghệ Thông Tin (CNTT) Tracinet Computer do Ông Trần Quốc Hoàn - Chủ Tịch Hội Đồng Quản Trị kiêm Tổng Giám Đốc sáng lập năm 2000. Năm 2007, đổi tên thành Công Ty Thương Mại Đại Trần Gia. Năm 2007, và sự phát triển vượt bậc công ty đã chính thức đổi tên thành Công ty CP Công nghệ DTG (DTG).\n\nChúng tôi tin rằng công nghệ phải phục vụ con người và mang lại hiệu quả thực tế, minh bạch, an toàn và bền vững. Đó là kim chỉ nam cho mọi sản phẩm và dịch vụ mang thương hiệu DTG.",
    slogan: "VỮNG MÃI MỘT NIỀM TIN",
    learnMoreLabel: "Tìm hiểu thêm",
    learnMoreHref: "/ve-chung-toi",
  },
  {
    _id: "veChungToiPage-en",
    _type: "veChungToiPage",
    language: "en",
    brandStoryTitle: "BRAND STORY",
    brandStoryContent:
      "At DTG CORP, we do not merely see technology as a tool, but as a vital foundation for business breakthroughs. Amid the powerful wave of digital transformation, DTG — the predecessor of DTG Technology Joint Stock Company (DTG CORP) — started as Tracinet Computer, an IT product business founded in 2000 by Mr. Tran Quoc Hoan, Chairman of the Board cum General Director. In 2007, it was renamed Dai Tran Gia Trading Company. With remarkable growth, the company officially became DTG Technology JSC (DTG).\n\nWe believe technology must serve people and deliver practical, transparent, safe, and sustainable results. That is the guiding principle for every product and service under the DTG brand.",
    slogan: "STEADFAST IN TRUST",
    learnMoreLabel: "Learn more",
    learnMoreHref: "/about",
  },
];

async function seed() {
  console.log("Seeding veChungToiPage...");
  for (const doc of docs) {
    await client.createOrReplace(doc);
    console.log(`  Created ${doc._id}`);
  }
  console.log("Done!");
}

seed().catch(console.error);
