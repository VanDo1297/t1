import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "036on1ws",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

function key() {
  return crypto.randomUUID().replace(/-/g, "").slice(0, 12);
}

function buildChildren(items) {
  return items.map((c) => ({
    _key: key(),
    label: c.label,
    href: c.href,
    ...(c.description ? { description: c.description } : {}),
  }));
}

function buildMegaMenu(columns) {
  return columns.map((col) => ({
    _key: key(),
    title: col.title,
    href: col.href,
    ...(col.description ? { description: col.description } : {}),
    children: buildChildren(col.children),
  }));
}

function buildNavItems(items) {
  return items.map((item) => {
    const nav = {
      _key: key(),
      label: item.label,
      href: item.href,
    };
    if (item.megaMenu) {
      nav.megaMenu = buildMegaMenu(item.megaMenu);
    }
    if (item.children) {
      nav.children = buildChildren(item.children);
    }
    return nav;
  });
}

// VI là chuẩn — EN dùng cùng route, chỉ khác label
const headers = {
  vi: {
    navItems: [
      {
        label: "Về chúng tôi",
        href: "/ve-chung-toi",
        children: [
          { label: "Giới thiệu chung", href: "/ve-chung-toi#gioi-thieu" },
          { label: "Lịch sử phát triển", href: "/ve-chung-toi#lich-su" },
          { label: "Đội ngũ lãnh đạo", href: "/ve-chung-toi#lanh-dao" },
          { label: "Nguồn nhân lực", href: "/ve-chung-toi#nhan-luc" },
        ],
      },
      {
        label: "Giải pháp & Dịch vụ",
        href: "/giai-phap-dich-vu",
        megaMenu: [
          {
            title: "Giải pháp Công nghệ",
            href: "/giai-phap-dich-vu/cong-nghe",
            description: "Technology Solutions",
            children: [
              { label: "An toàn Thông tin", href: "/giai-phap-dich-vu/cong-nghe/an-toan-thong-tin", description: "Cyber Security" },
              { label: "Trung tâm Dữ liệu", href: "/giai-phap-dich-vu/cong-nghe/trung-tam-du-lieu", description: "Data Center & Điện toán Đám mây" },
              { label: "Hệ thống Mạng", href: "/giai-phap-dich-vu/cong-nghe/he-thong-mang", description: "Network & Kết nối" },
              { label: "Bảo vệ Dữ liệu", href: "/giai-phap-dich-vu/cong-nghe/bao-ve-du-lieu", description: "Data Protection & Phục hồi" },
            ],
          },
          {
            title: "Dịch vụ An ninh mạng",
            href: "/giai-phap-dich-vu/an-ninh-mang",
            description: "Cyber Security Services",
            children: [
              { label: "Kiểm thử xâm nhập", href: "/giai-phap-dich-vu/an-ninh-mang/kiem-thu-xam-nhap", description: "Penetration Testing" },
              { label: "Đánh giá An toàn Thông tin", href: "/giai-phap-dich-vu/an-ninh-mang/danh-gia-an-toan", description: "Security Assessment" },
              { label: "Giám sát An ninh mạng (SOC)", href: "/giai-phap-dich-vu/an-ninh-mang/soc", description: "SOC Services" },
              { label: "Rà soát Lỗ hổng Bảo mật", href: "/giai-phap-dich-vu/an-ninh-mang/ra-soat-lo-hong", description: "Vulnerability Assessment" },
              { label: "Vận hành An toàn Thông tin", href: "/giai-phap-dich-vu/an-ninh-mang/van-hanh", description: "Managed Security Services" },
              { label: "Mô phỏng Tấn công (Red Team)", href: "/giai-phap-dich-vu/an-ninh-mang/red-team", description: "Red Team" },
              { label: "Ứng cứu Sự cố", href: "/giai-phap-dich-vu/an-ninh-mang/ung-cuu-su-co", description: "Incident Response" },
            ],
          },
          {
            title: "Giải pháp AI",
            href: "/giai-phap-dich-vu/ai",
            description: "AI Solutions",
            children: [
              { label: "Dsoha AI", href: "/giai-phap-dich-vu/ai/dsoha", description: "Số hóa tài liệu & kho dữ liệu số" },
              { label: "AI Agent", href: "/giai-phap-dich-vu/ai/agent", description: "Trợ lý AI cho quy trình doanh nghiệp" },
              { label: "AI Kiosk", href: "/giai-phap-dich-vu/ai/kiosk", description: "Trạm dịch vụ hành chính thông minh" },
              { label: "Alogolf AI", href: "/giai-phap-dich-vu/ai/alogolf", description: "Nền tảng AI quản lý sân Golf" },
              { label: "AI OCR", href: "/giai-phap-dich-vu/ai/ocr", description: "Nhận dạng & trích xuất dữ liệu từ hình ảnh" },
              { label: "AI Smart Assistant", href: "/giai-phap-dich-vu/ai/smart-assistant", description: "Hỗ trợ người dùng trong môi trường số" },
            ],
          },
        ],
      },
      { label: "Đối tác & Khách hàng", href: "/doi-tac" },
      {
        label: "Tin tức",
        href: "/tin-tuc",
        children: [
          { label: "Tin dự án", href: "/tin-tuc?danh-muc=tin-du-an" },
          { label: "Tin nội bộ", href: "/tin-tuc?danh-muc=tin-noi-bo" },
          { label: "Tin công nghệ", href: "/tin-tuc?danh-muc=tin-cong-nghe" },
        ],
      },
      { label: "Tuyển dụng", href: "/tuyen-dung" },
    ],
    contactLabel: "Liên hệ",
  },
  en: {
    navItems: [
      {
        label: "About Us",
        href: "/ve-chung-toi",
        children: [
          { label: "Overview", href: "/ve-chung-toi#gioi-thieu" },
          { label: "History", href: "/ve-chung-toi#lich-su" },
          { label: "Leadership", href: "/ve-chung-toi#lanh-dao" },
          { label: "Human Resources", href: "/ve-chung-toi#nhan-luc" },
        ],
      },
      {
        label: "Solutions & Services",
        href: "/giai-phap-dich-vu",
        megaMenu: [
          {
            title: "Technology Solutions",
            href: "/giai-phap-dich-vu/cong-nghe",
            description: "Technology Solutions",
            children: [
              { label: "Cyber Security", href: "/giai-phap-dich-vu/cong-nghe/an-toan-thong-tin", description: "Information Security" },
              { label: "Data Center", href: "/giai-phap-dich-vu/cong-nghe/trung-tam-du-lieu", description: "Data Center & Cloud Computing" },
              { label: "Network", href: "/giai-phap-dich-vu/cong-nghe/he-thong-mang", description: "Network & Connectivity" },
              { label: "Data Protection", href: "/giai-phap-dich-vu/cong-nghe/bao-ve-du-lieu", description: "Data Protection & Recovery" },
            ],
          },
          {
            title: "Cyber Security Services",
            href: "/giai-phap-dich-vu/an-ninh-mang",
            description: "Cyber Security Services",
            children: [
              { label: "Penetration Testing", href: "/giai-phap-dich-vu/an-ninh-mang/kiem-thu-xam-nhap", description: "Penetration Testing Services" },
              { label: "Security Assessment", href: "/giai-phap-dich-vu/an-ninh-mang/danh-gia-an-toan", description: "Security Assessment" },
              { label: "SOC Services", href: "/giai-phap-dich-vu/an-ninh-mang/soc", description: "Security Operations Center" },
              { label: "Vulnerability Assessment", href: "/giai-phap-dich-vu/an-ninh-mang/ra-soat-lo-hong", description: "Vulnerability Assessment" },
              { label: "Managed Security", href: "/giai-phap-dich-vu/an-ninh-mang/van-hanh", description: "Managed Security Services" },
              { label: "Red Team", href: "/giai-phap-dich-vu/an-ninh-mang/red-team", description: "Red Team Simulation" },
              { label: "Incident Response", href: "/giai-phap-dich-vu/an-ninh-mang/ung-cuu-su-co", description: "Incident Response Services" },
            ],
          },
          {
            title: "AI Solutions",
            href: "/giai-phap-dich-vu/ai",
            description: "AI Solutions",
            children: [
              { label: "Dsoha AI", href: "/giai-phap-dich-vu/ai/dsoha", description: "Document digitization & data warehouse" },
              { label: "AI Agent", href: "/giai-phap-dich-vu/ai/agent", description: "AI assistant for business processes" },
              { label: "AI Kiosk", href: "/giai-phap-dich-vu/ai/kiosk", description: "Smart service kiosk" },
              { label: "Alogolf AI", href: "/giai-phap-dich-vu/ai/alogolf", description: "AI golf course management platform" },
              { label: "AI OCR", href: "/giai-phap-dich-vu/ai/ocr", description: "Image recognition & data extraction" },
              { label: "AI Smart Assistant", href: "/giai-phap-dich-vu/ai/smart-assistant", description: "Digital environment assistant" },
            ],
          },
        ],
      },
      { label: "Partners & Clients", href: "/doi-tac" },
      {
        label: "News",
        href: "/tin-tuc",
        children: [
          { label: "Project News", href: "/tin-tuc?danh-muc=tin-du-an" },
          { label: "Internal News", href: "/tin-tuc?danh-muc=tin-noi-bo" },
          { label: "Tech News", href: "/tin-tuc?danh-muc=tin-cong-nghe" },
        ],
      },
      { label: "Careers", href: "/tuyen-dung" },
    ],
    contactLabel: "Contact",
  },
};

async function seed() {
  for (const [lang, data] of Object.entries(headers)) {
    const doc = {
      _id: `header-${lang}`,
      _type: "header",
      language: lang,
      navItems: buildNavItems(data.navItems),
      contactLabel: data.contactLabel,
    };

    try {
      const result = await client.createOrReplace(doc);
      console.log(`✅ Header [${lang}] synced: ${result._id}`);
    } catch (err) {
      console.error(`❌ Header [${lang}] failed:`, err.message);
    }
  }
}

seed();
