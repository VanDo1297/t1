import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "036on1ws",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

const viData = {
  viewAllLabel: "Xem tất cả",
  tabs: [
    {
      _type: "object",
      _key: "tab-0",
      label: "Giải pháp Công nghệ",
      title: "Technology Solutions",
      description: "Cung cấp hạ tầng và giải pháp công nghệ hiện đại, đáp ứng nhu cầu vận hành và phát triển của doanh nghiệp.",
      ctaLabel: "Khám phá Giải pháp Công nghệ",
      ctaHref: "/giai-phap-dich-vu/cong-nghe",
      stats: [],
      awards: [
        { _type: "object", _key: "a0", source: "Cyber Security", title: "Tập trung vào bảo mật doanh nghiệp với các giải pháp như NGFW, WAF, Zero Trust, và quản lý danh tính." },
        { _type: "object", _key: "a1", source: "Data Center", title: "Cung cấp hạ tầng ảo hóa, máy chủ, lưu trữ doanh nghiệp và các nền tảng Hybrid Cloud hiện đại." },
        { _type: "object", _key: "a2", source: "Network", title: "Giải pháp mạng doanh nghiệp toàn diện bao gồm Switching, Wireless, SD-WAN và các hệ thống hội họp trực tuyến." },
        { _type: "object", _key: "a3", source: "Data Protection", title: "Đảm bảo tính liên tục của kinh doanh thông qua Backup, Disaster Recovery (DR) và phòng chống Ransomware." },
      ],
    },
    {
      _type: "object",
      _key: "tab-1",
      label: "Dịch vụ An ninh mạng",
      title: "Cyber Security Services",
      description: "Bảo vệ toàn diện hệ thống và dữ liệu trước mọi mối đe dọa an ninh mạng.",
      ctaLabel: "Khám phá Dịch vụ An ninh mạng",
      ctaHref: "/giai-phap-dich-vu/an-ninh-mang",
      stats: [],
      awards: [
        { _type: "object", _key: "a0", source: "Penetration Testing", title: "Đánh giá thực tế khả năng chống chịu của hệ thống." },
        { _type: "object", _key: "a1", source: "Security Assessment", title: "Rà soát và đánh giá thể trạng bảo mật." },
        { _type: "object", _key: "a2", source: "SOC Services", title: "Giám sát liên tục 24/7 để phát hiện và ngăn chặn các mối đe dọa sớm." },
        { _type: "object", _key: "a3", source: "Vulnerability Assessment", title: "Xác định các điểm yếu kỹ thuật trên hệ thống trước khi chúng bị khai thác." },
        { _type: "object", _key: "a4", source: "Managed Security", title: "Quản lý và vận hành chuyên nghiệp hệ thống bảo mật cho doanh nghiệp." },
        { _type: "object", _key: "a5", source: "Tư vấn & Xây dựng cấp độ", title: "Tư vấn chuẩn hóa và xây dựng hệ thống bảo mật theo cấp độ." },
        { _type: "object", _key: "a6", source: "Red Team", title: "Diễn tập thực chiến để đánh giá khả năng ứng phó của tổ chức." },
        { _type: "object", _key: "a7", source: "Incident Response", title: "Hỗ trợ xử lý nhanh sự cố nhằm giảm thiểu thiệt hại an ninh mạng." },
      ],
    },
    {
      _type: "object",
      _key: "tab-2",
      label: "Giải pháp AI",
      title: "AI Solutions",
      description: "Ứng dụng AI để tối ưu quy trình, nâng cao hiệu quả và mở ra giá trị mới cho doanh nghiệp.",
      ctaLabel: "Khám phá Giải pháp AI",
      ctaHref: "/giai-phap-dich-vu/ai",
      stats: [],
      awards: [
        { _type: "object", _key: "a0", source: "Dsoha AI", title: "Giải pháp số hóa tài liệu và xây dựng kho dữ liệu số thông minh." },
        { _type: "object", _key: "a1", source: "AI Agent", title: "Trợ lý AI cá nhân hóa, tự động hóa tác vụ và hỗ trợ ra quyết định." },
        { _type: "object", _key: "a2", source: "AI Kiosk", title: "Trạm dịch vụ thông minh, hỗ trợ khách hàng tự động và nhanh chóng." },
        { _type: "object", _key: "a3", source: "Alogolf AI Platform", title: "Nền tảng AI mở, linh hoạt và dễ dàng tích hợp." },
        { _type: "object", _key: "a4", source: "AI OCR", title: "Nhận dạng và trích xuất thông tin từ tài liệu, hình ảnh thông minh." },
        { _type: "object", _key: "a5", source: "AI Smart Assistant", title: "Giải pháp trợ lý AI thông minh, hỗ trợ người dùng trong mọi tác vụ." },
      ],
    },
    {
      _type: "object",
      _key: "tab-3",
      label: "Dịch vụ khác",
      title: "Dịch vụ khác",
      description: "Các dịch vụ hỗ trợ toàn diện, đồng hành cùng doanh nghiệp trong suốt quá trình vận hành.",
      ctaLabel: "Liên hệ tư vấn",
      ctaHref: "/lien-he",
      stats: [],
      awards: [
        { _type: "object", _key: "a0", source: "Tư vấn & triển khai giải pháp", title: "Tư vấn chiến lược, thiết kế và triển khai các giải pháp công nghệ phù hợp với nhu cầu và mục tiêu của doanh nghiệp." },
        { _type: "object", _key: "a1", source: "Bảo hành bảo trì", title: "Đảm bảo hệ thống vận hành ổn định, với đội ngũ kỹ thuật chuyên nghiệp." },
        { _type: "object", _key: "a2", source: "Ứng cứu sự cố", title: "Hỗ trợ khẩn cấp khi xảy ra sự cố IT, giảm thiểu gián đoạn và rủi ro cho doanh nghiệp." },
        { _type: "object", _key: "a3", source: "Cho thuê thiết bị", title: "Cung cấp thiết bị công nghệ chính hãng với chi phí tối ưu và linh hoạt theo nhu cầu." },
      ],
    },
  ],
};

const enData = {
  viewAllLabel: "View all",
  tabs: [
    {
      _type: "object",
      _key: "tab-0",
      label: "Technology Solutions",
      title: "Technology Solutions",
      description: "Providing modern infrastructure and technology solutions to meet enterprise operational and growth needs.",
      ctaLabel: "Explore Technology Solutions",
      ctaHref: "/giai-phap-dich-vu/cong-nghe",
      stats: [],
      awards: [
        { _type: "object", _key: "a0", source: "Cyber Security", title: "Enterprise security with NGFW, WAF, Zero Trust, and identity management." },
        { _type: "object", _key: "a1", source: "Data Center", title: "Virtualization infrastructure, enterprise servers, storage and modern Hybrid Cloud platforms." },
        { _type: "object", _key: "a2", source: "Network", title: "Comprehensive enterprise networking including Switching, Wireless, SD-WAN and video conferencing." },
        { _type: "object", _key: "a3", source: "Data Protection", title: "Business continuity through Backup, Disaster Recovery (DR) and Ransomware protection." },
      ],
    },
    {
      _type: "object",
      _key: "tab-1",
      label: "Cyber Security Services",
      title: "Cyber Security Services",
      description: "Comprehensive protection for systems and data against all cybersecurity threats.",
      ctaLabel: "Explore Security Services",
      ctaHref: "/solutions/cybersecurity",
      stats: [],
      awards: [
        { _type: "object", _key: "a0", source: "Penetration Testing", title: "Real-world assessment of system resilience against attacks." },
        { _type: "object", _key: "a1", source: "Security Assessment", title: "Review and assess overall security posture." },
        { _type: "object", _key: "a2", source: "SOC Services", title: "24/7 continuous monitoring to detect and prevent threats early." },
        { _type: "object", _key: "a3", source: "Vulnerability Assessment", title: "Identify technical weaknesses before they are exploited." },
        { _type: "object", _key: "a4", source: "Managed Security", title: "Professional management and operation of enterprise security systems." },
        { _type: "object", _key: "a5", source: "Consulting & Compliance", title: "Standardize and build security systems by compliance levels." },
        { _type: "object", _key: "a6", source: "Red Team", title: "Real-world exercises to assess organizational response capabilities." },
        { _type: "object", _key: "a7", source: "Incident Response", title: "Rapid incident handling to minimize cybersecurity damage." },
      ],
    },
    {
      _type: "object",
      _key: "tab-2",
      label: "AI Solutions",
      title: "AI Solutions",
      description: "Applying AI to optimize processes, enhance efficiency and unlock new value for enterprises.",
      ctaLabel: "Explore AI Solutions",
      ctaHref: "/solutions/ai",
      stats: [],
      awards: [
        { _type: "object", _key: "a0", source: "Dsoha AI", title: "Document digitization and smart digital data warehouse solution." },
        { _type: "object", _key: "a1", source: "AI Agent", title: "Personalized AI assistant, automating tasks and supporting decision-making." },
        { _type: "object", _key: "a2", source: "AI Kiosk", title: "Smart service kiosk, automated and fast customer support." },
        { _type: "object", _key: "a3", source: "Alogolf AI Platform", title: "Open, flexible and easily integrated AI platform." },
        { _type: "object", _key: "a4", source: "AI OCR", title: "Smart recognition and extraction of information from documents and images." },
        { _type: "object", _key: "a5", source: "AI Smart Assistant", title: "Smart AI assistant solution supporting users in all tasks." },
      ],
    },
    {
      _type: "object",
      _key: "tab-3",
      label: "Other Services",
      title: "Other Services",
      description: "Comprehensive support services, accompanying enterprises throughout their operations.",
      ctaLabel: "Contact Us",
      ctaHref: "/contact",
      stats: [],
      awards: [
        { _type: "object", _key: "a0", source: "Consulting & Deployment", title: "Strategic consulting, design and deployment of technology solutions tailored to enterprise needs." },
        { _type: "object", _key: "a1", source: "Warranty & Maintenance", title: "Ensuring stable system operations with a professional technical team." },
        { _type: "object", _key: "a2", source: "Incident Response", title: "Emergency support for IT incidents, minimizing disruption and risk." },
        { _type: "object", _key: "a3", source: "Equipment Leasing", title: "Genuine technology equipment with optimal costs and flexible terms." },
      ],
    },
  ],
};

async function sync() {
  // Find existing documents
  const existing = await client.fetch(
    `*[_type == "giaiPhap"]{ _id, language }`
  );

  for (const lang of ["vi", "en"]) {
    const data = lang === "vi" ? viData : enData;
    const doc = existing.find((d) => d.language === lang);

    if (doc) {
      // Update existing
      console.log(`Updating giaiPhap (${lang}) — ${doc._id}`);
      await client.patch(doc._id).set(data).commit();
      console.log(`✓ Updated ${lang}`);
    } else {
      // Create new
      console.log(`Creating giaiPhap (${lang})`);
      await client.create({
        _type: "giaiPhap",
        language: lang,
        ...data,
      });
      console.log(`✓ Created ${lang}`);
    }
  }

  console.log("\nDone! CMS data synced.");
}

sync().catch(console.error);
