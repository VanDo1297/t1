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

function buildTabs(tabs) {
  return tabs.map((tab) => ({
    _key: key(),
    label: tab.label,
    title: tab.title,
    description: tab.description,
    ctaLabel: tab.ctaLabel,
    ctaHref: tab.ctaHref,
    stats: (tab.stats || []).map((s) => ({ _key: key(), value: s.value, label: s.label })),
    awards: (tab.awards || []).map((a) => ({ _key: key(), source: a.source, title: a.title })),
  }));
}

const data = {
  vi: {
    language: "vi",
    viewAllLabel: "Xem tất cả",
    tabs: [
      {
        label: "Giải pháp Công nghệ", title: "Giải pháp Công nghệ",
        description: "Cung cấp hạ tầng và giải pháp công nghệ hiện đại, đáp ứng nhu cầu vận hành và phát triển của doanh nghiệp.",
        ctaLabel: "Khám phá Giải pháp Công nghệ", ctaHref: "/giai-phap-dich-vu/cong-nghe", stats: [],
        awards: [
          { source: "An toàn Thông tin", title: "Tập trung vào bảo mật doanh nghiệp với các giải pháp như NGFW, WAF, Zero Trust, và quản lý danh tính." },
          { source: "Trung tâm Dữ liệu", title: "Cung cấp hạ tầng ảo hóa, máy chủ, lưu trữ doanh nghiệp và các nền tảng Hybrid Cloud hiện đại." },
          { source: "Hệ thống Mạng", title: "Giải pháp mạng doanh nghiệp toàn diện bao gồm Switching, Wireless, SD-WAN và các hệ thống hội họp trực tuyến." },
          { source: "Bảo vệ Dữ liệu", title: "Đảm bảo tính liên tục của kinh doanh thông qua Backup, Disaster Recovery (DR) và phòng chống Ransomware." },
        ],
      },
      {
        label: "Dịch vụ An ninh mạng", title: "Dịch vụ An ninh mạng",
        description: "Bảo vệ toàn diện hệ thống và dữ liệu trước mọi mối đe dọa an ninh mạng.",
        ctaLabel: "Khám phá Dịch vụ An ninh mạng", ctaHref: "/giai-phap-dich-vu/an-ninh-mang", stats: [],
        awards: [
          { source: "Kiểm thử xâm nhập", title: "Đánh giá thực tế khả năng chống chịu của hệ thống." },
          { source: "Đánh giá An toàn Thông tin", title: "Rà soát và đánh giá thể trạng bảo mật." },
          { source: "Giám sát An ninh mạng (SOC)", title: "Giám sát liên tục 24/7 để phát hiện và ngăn chặn các mối đe dọa sớm." },
          { source: "Rà soát Lỗ hổng Bảo mật", title: "Xác định các điểm yếu kỹ thuật trên hệ thống trước khi chúng bị khai thác." },
          { source: "Vận hành An toàn Thông tin", title: "Quản lý và vận hành chuyên nghiệp hệ thống bảo mật cho doanh nghiệp." },
          { source: "Tư vấn & Xây dựng cấp độ", title: "Tư vấn chuẩn hóa và xây dựng hệ thống bảo mật theo cấp độ." },
          { source: "Mô phỏng Tấn công (Red Team)", title: "Diễn tập thực chiến để đánh giá khả năng ứng phó của tổ chức." },
          { source: "Ứng cứu Sự cố", title: "Hỗ trợ xử lý nhanh sự cố nhằm giảm thiểu thiệt hại an ninh mạng." },
        ],
      },
      {
        label: "Giải pháp AI", title: "Giải pháp AI",
        description: "Ứng dụng AI để tối ưu quy trình, nâng cao hiệu quả và mở ra giá trị mới cho doanh nghiệp.",
        ctaLabel: "Khám phá Giải pháp AI", ctaHref: "/giai-phap-dich-vu/ai", stats: [],
        awards: [
          { source: "Dsoha AI", title: "Giải pháp số hóa tài liệu và xây dựng kho dữ liệu số thông minh." },
          { source: "AI Agent", title: "Trợ lý AI cá nhân hóa, tự động hóa tác vụ và hỗ trợ ra quyết định." },
          { source: "AI Kiosk", title: "Trạm dịch vụ thông minh, hỗ trợ khách hàng tự động và nhanh chóng." },
          { source: "Alogolf AI", title: "Nền tảng AI mở, linh hoạt và dễ dàng tích hợp." },
          { source: "AI OCR", title: "Nhận dạng và trích xuất thông tin từ tài liệu, hình ảnh thông minh." },
          { source: "AI Smart Assistant", title: "Giải pháp trợ lý AI thông minh, hỗ trợ người dùng trong mọi tác vụ." },
        ],
      },
      {
        label: "Dịch vụ khác", title: "Dịch vụ khác",
        description: "Các dịch vụ hỗ trợ toàn diện, đồng hành cùng doanh nghiệp trong suốt quá trình vận hành.",
        ctaLabel: "Liên hệ tư vấn", ctaHref: "/lien-he", stats: [],
        awards: [
          { source: "Tư vấn & triển khai giải pháp", title: "Tư vấn chiến lược, thiết kế và triển khai các giải pháp công nghệ phù hợp." },
          { source: "Bảo hành bảo trì", title: "Đảm bảo hệ thống vận hành ổn định, với đội ngũ kỹ thuật chuyên nghiệp." },
          { source: "Ứng cứu sự cố", title: "Hỗ trợ khẩn cấp khi xảy ra sự cố IT, giảm thiểu gián đoạn và rủi ro." },
          { source: "Cho thuê thiết bị", title: "Cung cấp thiết bị công nghệ chính hãng với chi phí tối ưu và linh hoạt." },
        ],
      },
    ],
  },
  en: {
    language: "en",
    viewAllLabel: "View all",
    tabs: [
      {
        label: "Technology Solutions", title: "Technology Solutions",
        description: "Providing modern infrastructure and technology solutions to meet enterprise operational and growth needs.",
        ctaLabel: "Explore Technology Solutions", ctaHref: "/giai-phap-dich-vu/cong-nghe", stats: [],
        awards: [
          { source: "Cyber Security", title: "Enterprise security with NGFW, WAF, Zero Trust, and identity management." },
          { source: "Data Center", title: "Virtualization infrastructure, enterprise servers, storage and modern Hybrid Cloud platforms." },
          { source: "Network", title: "Comprehensive enterprise networking including Switching, Wireless, SD-WAN and video conferencing." },
          { source: "Data Protection", title: "Business continuity through Backup, Disaster Recovery (DR) and Ransomware protection." },
        ],
      },
      {
        label: "Cyber Security Services", title: "Cyber Security Services",
        description: "Comprehensive protection for systems and data against all cybersecurity threats.",
        ctaLabel: "Explore Security Services", ctaHref: "/giai-phap-dich-vu/an-ninh-mang", stats: [],
        awards: [
          { source: "Penetration Testing", title: "Real-world assessment of system resilience against attacks." },
          { source: "Security Assessment", title: "Review and assess overall security posture." },
          { source: "SOC Services", title: "24/7 continuous monitoring to detect and prevent threats early." },
          { source: "Vulnerability Assessment", title: "Identify technical weaknesses before they are exploited." },
          { source: "Managed Security", title: "Professional management and operation of enterprise security systems." },
          { source: "Consulting & Compliance", title: "Standardize and build security systems by compliance levels." },
          { source: "Red Team", title: "Real-world exercises to assess organizational response capabilities." },
          { source: "Incident Response", title: "Rapid incident handling to minimize cybersecurity damage." },
        ],
      },
      {
        label: "AI Solutions", title: "AI Solutions",
        description: "Applying AI to optimize processes, enhance efficiency and unlock new value for enterprises.",
        ctaLabel: "Explore AI Solutions", ctaHref: "/giai-phap-dich-vu/ai", stats: [],
        awards: [
          { source: "Dsoha AI", title: "Document digitization and smart digital data warehouse solution." },
          { source: "AI Agent", title: "Personalized AI assistant, automating tasks and supporting decision-making." },
          { source: "AI Kiosk", title: "Smart service kiosk, automated and fast customer support." },
          { source: "Alogolf AI", title: "Open, flexible and easily integrated AI platform." },
          { source: "AI OCR", title: "Smart recognition and extraction of information from documents and images." },
          { source: "AI Smart Assistant", title: "Smart AI assistant solution supporting users in all tasks." },
        ],
      },
      {
        label: "Other Services", title: "Other Services",
        description: "Comprehensive support services, accompanying enterprises throughout their operations.",
        ctaLabel: "Contact Us", ctaHref: "/lien-he", stats: [],
        awards: [
          { source: "Consulting & Deployment", title: "Strategic consulting, design and deployment of technology solutions." },
          { source: "Warranty & Maintenance", title: "Ensuring stable system operations with a professional technical team." },
          { source: "Incident Response", title: "Emergency support for IT incidents, minimizing disruption and risk." },
          { source: "Equipment Leasing", title: "Genuine technology equipment with optimal costs and flexible terms." },
        ],
      },
    ],
  },
};

async function seed() {
  // Delete old documents
  const existing = await client.fetch('*[_type == "giaiPhap"]{ _id }');
  for (const doc of existing) {
    await client.delete(doc._id);
    console.log(`🗑️  Deleted old: ${doc._id}`);
  }

  for (const [lang, d] of Object.entries(data)) {
    try {
      const result = await client.createOrReplace({
        _id: `giaiPhap-${lang}`,
        _type: "giaiPhap",
        language: d.language,
        viewAllLabel: d.viewAllLabel,
        tabs: buildTabs(d.tabs),
      });
      console.log(`✅ Giải pháp [${lang}] synced: ${result._id}`);
    } catch (err) {
      console.error(`❌ [${lang}] failed:`, err.message);
    }
  }
}

seed();
