import { client } from "./client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface MegaMenuColumn {
  title: string;
  href: string;
  description: string;
  children: NavChild[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
  megaMenu?: MegaMenuColumn[];
}

export interface HeaderData {
  navItems: NavItem[];
  contactLabel: string;
}

export interface PartnerItem {
  name: string;
  logo: SanityImageSource | null;
  url?: string;
}

export interface ClientItem {
  name: string;
  logo: SanityImageSource | null;
  category?: string;
  url?: string;
}

export interface PartnersPageData {
  heroTitle: string;
  heroDescription: string;
  heroBackgroundImage: SanityImageSource | null;
  ctaButtonLabel: string;
  ctaButtonHref: string;
  strategicPartnersTitle: string;
  strategicPartners: PartnerItem[];
  networkPartnersTitle: string;
  networkPartners: PartnerItem[];
  clientsTitle: string;
  clientCategories: string[];
  clients: ClientItem[];
}

const HEADER_QUERY = `*[_type == "header" && language == $lang][0]{
  navItems[]{ label, href, children[]{ label, href } },
  contactLabel
}`;

const fallback: Record<string, HeaderData> = {
  vi: {
    navItems: [
      {
        label: "Về chúng tôi",
        href: "/ve-chung-toi",
        children: [
          { label: "Giới thiệu chung", href: "/ve-chung-toi" },
          { label: "Lịch sử phát triển", href: "/ve-chung-toi/lich-su" },
          { label: "Đội ngũ lãnh đạo", href: "/ve-chung-toi/lanh-dao" },
          { label: "Nguồn nhân lực", href: "/ve-chung-toi/nhan-luc" },
        ],
      },
      {
        label: "Giải pháp & Dịch vụ",
        href: "/giai-phap-dich-vu",
        megaMenu: [
          {
            title: "Technology Solutions",
            href: "/giai-phap-dich-vu/cong-nghe",
            description: "Giải pháp Công nghệ",
            children: [
              { label: "Cyber Security", href: "/giai-phap-dich-vu/cong-nghe/an-toan-thong-tin", description: "An toàn Thông tin" },
              { label: "Data Center", href: "/giai-phap-dich-vu/cong-nghe/trung-tam-du-lieu", description: "Trung tâm Dữ liệu & Điện toán Đám mây" },
              { label: "Network", href: "/giai-phap-dich-vu/cong-nghe/he-thong-mang", description: "Hệ thống Mạng & Kết nối" },
              { label: "Data Protection", href: "/giai-phap-dich-vu/cong-nghe/bao-ve-du-lieu", description: "Bảo vệ Dữ liệu & Phục hồi" },
            ],
          },
          {
            title: "Cyber Security Services",
            href: "/giai-phap-dich-vu/an-ninh-mang",
            description: "Dịch vụ An ninh mạng",
            children: [
              { label: "Penetration Testing", href: "/giai-phap-dich-vu/an-ninh-mang/kiem-thu-xam-nhap", description: "Kiểm thử xâm nhập" },
              { label: "Security Assessment", href: "/giai-phap-dich-vu/an-ninh-mang/danh-gia-an-toan", description: "Đánh giá An toàn Thông tin" },
              { label: "SOC Services", href: "/giai-phap-dich-vu/an-ninh-mang/soc", description: "Trung tâm Giám sát An ninh mạng" },
              { label: "Vulnerability Assessment", href: "/giai-phap-dich-vu/an-ninh-mang/ra-soat-lo-hong", description: "Rà soát Lỗ hổng Bảo mật" },
              { label: "Managed Security", href: "/giai-phap-dich-vu/an-ninh-mang/van-hanh", description: "Vận hành An toàn Thông tin" },
              { label: "Red Team", href: "/giai-phap-dich-vu/an-ninh-mang/red-team", description: "Mô phỏng Tấn công & Đánh giá" },
              { label: "Incident Response", href: "/giai-phap-dich-vu/an-ninh-mang/ung-cuu-su-co", description: "Ứng cứu Sự cố An ninh mạng" },
            ],
          },
          {
            title: "AI Solutions",
            href: "/giai-phap-dich-vu/ai",
            description: "Giải pháp AI",
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
      { label: "Đối tác", href: "/doi-tac" },
      { label: "Tin tức", href: "/tin-tuc" },
      { label: "Tuyển dụng", href: "/tuyen-dung" },
    ],
    contactLabel: "Liên hệ",
  },
  en: {
    navItems: [
      {
        label: "About Us",
        href: "/about",
        children: [
          { label: "Overview", href: "/about" },
          { label: "History", href: "/about/history" },
          { label: "Leadership", href: "/about/leadership" },
          { label: "Human Resources", href: "/about/people" },
        ],
      },
      {
        label: "Solutions & Services",
        href: "/solutions",
        megaMenu: [
          {
            title: "Technology Solutions",
            href: "/solutions/technology",
            description: "Technology Solutions",
            children: [
              { label: "Cyber Security", href: "/solutions/technology/cybersecurity", description: "Information Security" },
              { label: "Data Center", href: "/solutions/technology/data-center", description: "Data Center & Cloud Computing" },
              { label: "Network", href: "/solutions/technology/network", description: "Network & Connectivity" },
              { label: "Data Protection", href: "/solutions/technology/data-protection", description: "Data Protection & Recovery" },
            ],
          },
          {
            title: "Cyber Security Services",
            href: "/solutions/cybersecurity",
            description: "Cyber Security Services",
            children: [
              { label: "Penetration Testing", href: "/solutions/cybersecurity/pentest", description: "Penetration Testing Services" },
              { label: "Security Assessment", href: "/solutions/cybersecurity/assessment", description: "Security Assessment" },
              { label: "SOC Services", href: "/solutions/cybersecurity/soc", description: "Security Operations Center" },
              { label: "Vulnerability Assessment", href: "/solutions/cybersecurity/vulnerability", description: "Vulnerability Assessment" },
              { label: "Managed Security", href: "/solutions/cybersecurity/managed", description: "Managed Security Services" },
              { label: "Red Team", href: "/solutions/cybersecurity/red-team", description: "Red Team Simulation" },
              { label: "Incident Response", href: "/solutions/cybersecurity/incident-response", description: "Incident Response Services" },
            ],
          },
          {
            title: "AI Solutions",
            href: "/solutions/ai",
            description: "AI Solutions",
            children: [
              { label: "Dsoha AI", href: "/solutions/ai/dsoha", description: "Document digitization & data warehouse" },
              { label: "AI Agent", href: "/solutions/ai/agent", description: "AI assistant for business processes" },
              { label: "AI Kiosk", href: "/solutions/ai/kiosk", description: "Smart service kiosk" },
              { label: "Alogolf AI", href: "/solutions/ai/alogolf", description: "AI golf course management platform" },
              { label: "AI OCR", href: "/solutions/ai/ocr", description: "Image recognition & data extraction" },
              { label: "AI Smart Assistant", href: "/solutions/ai/smart-assistant", description: "Digital environment assistant" },
            ],
          },
        ],
      },
      { label: "Partners", href: "/partners" },
      { label: "News", href: "/news" },
      { label: "Careers", href: "/careers" },
    ],
    contactLabel: "Contact",
  },
};

export async function getHeaderData(lang: string): Promise<HeaderData> {
  try {
    const data = await client.fetch<HeaderData | null>(HEADER_QUERY, { lang });
    if (data?.navItems?.length) return data;
  } catch {}
  return fallback[lang] || fallback.vi;
}

/* ── Về DTG ── */

export interface VeDtgStat {
  number: number;
  suffix: string;
  specialValue?: string;
  label: string;
  desc: string;
}

export interface VeDtgRecognition {
  label: string;
  width: number;
}

export interface VeDtgData {
  kicker: string;
  heading: string;
  subtitle: string;
  stats: VeDtgStat[];
  commitmentKicker: string;
  commitmentHeading: string;
  commitmentDesc: string;
  recognitionKicker: string;
  recognitions: VeDtgRecognition[];
}

const VE_DTG_QUERY = `*[_type == "veDtg" && language == $lang][0]{
  kicker, heading, subtitle,
  stats[]{ number, suffix, specialValue, label, desc },
  commitmentKicker, commitmentHeading, commitmentDesc,
  recognitionKicker,
  recognitions[]{ label, width }
}`;

const veDtgFallback: Record<string, VeDtgData> = {
  vi: {
    kicker: "VỀ DTG",
    heading: "Đối tác công nghệ đáng tin cậy",
    subtitle: "Hơn 25 năm kinh nghiệm trong lĩnh vực tích hợp hệ thống và giải pháp CNTT tại Việt Nam.",
    stats: [
      { number: 23, suffix: "+", label: "NĂM KINH NGHIỆM", desc: "Hoạt động liên tục từ năm 2000" },
      { number: 500, suffix: "+", label: "KHÁCH HÀNG", desc: "Doanh nghiệp tin tưởng sử dụng" },
      { number: 30, suffix: "+", label: "ĐỐI TÁC", desc: "Đối tác công nghệ hàng đầu" },
      { number: 0, suffix: "", specialValue: "24/7", label: "HỖ TRỢ", desc: "Hỗ trợ kỹ thuật mọi lúc" },
    ],
    commitmentKicker: "CAM KẾT CỦA CHÚNG TÔI",
    commitmentHeading: "Chất lượng và uy tín là giá trị cốt lõi",
    commitmentDesc: "Chúng tôi cam kết mang đến giải pháp tối ưu, đội ngũ chuyên gia giàu kinh nghiệm và dịch vụ hậu mãi chu đáo.",
    recognitionKicker: "THÀNH TỰU NỔI BẬT",
    recognitions: [
      { label: "Top 10 doanh nghiệp CNTT Việt Nam", width: 92 },
      { label: "Đối tác Platinum của các hãng công nghệ", width: 80 },
      { label: "Chứng nhận ISO 9001:2015", width: 88 },
      { label: "Giải thưởng Sao Khuê nhiều năm liền", width: 96 },
    ],
  },
  en: {
    kicker: "ABOUT DTG",
    heading: "Your trusted technology partner",
    subtitle: "Over 25 years of experience in system integration and IT solutions in Vietnam.",
    stats: [
      { number: 23, suffix: "+", label: "YEARS OF EXPERIENCE", desc: "Operating continuously since 2000" },
      { number: 500, suffix: "+", label: "CLIENTS", desc: "Trusted by enterprises" },
      { number: 30, suffix: "+", label: "PARTNERS", desc: "Leading technology partners" },
      { number: 0, suffix: "", specialValue: "24/7", label: "SUPPORT", desc: "Technical support anytime" },
    ],
    commitmentKicker: "OUR COMMITMENT",
    commitmentHeading: "Quality and trust are our core values",
    commitmentDesc: "We are committed to delivering optimal solutions, experienced experts, and dedicated after-sales service.",
    recognitionKicker: "KEY ACHIEVEMENTS",
    recognitions: [
      { label: "Top 10 IT companies in Vietnam", width: 92 },
      { label: "Platinum partner of tech vendors", width: 80 },
      { label: "ISO 9001:2015 certified", width: 88 },
      { label: "Sao Khue Award multiple years", width: 96 },
    ],
  },
};

export async function getVeDtgData(lang: string): Promise<VeDtgData> {
  try {
    const data = await client.fetch<VeDtgData | null>(VE_DTG_QUERY, { lang });
    if (data?.heading) return { ...veDtgFallback[lang], ...data, stats: data.stats ?? veDtgFallback[lang].stats, recognitions: data.recognitions ?? veDtgFallback[lang].recognitions };
  } catch {}
  return veDtgFallback[lang] || veDtgFallback.vi;
}

/* ── Giới thiệu ── */

export interface GioiThieuData {
  label: string;
  title: string;
  description: string;
  imageUrl: string | null;
}

const GIOI_THIEU_QUERY = `*[_type == "gioiThieu" && language == $lang][0]{
  label,
  title,
  description,
  "imageUrl": image.asset->url
}`;

const gioiThieuFallback: Record<string, GioiThieuData> = {
  vi: {
    label: "Giới thiệu về chúng tôi",
    title: "Let's shape\nthe future",
    description:
      "DTS tự hào là một thương hiệu uy tín cung cấp các giải pháp tổng thể bao gồm: Tư vấn giải pháp, kiến trúc hệ thống và cung cấp thiết bị, triển khai, vận hành, đào tạo. Từ khi thành lập đến nay, với chiến lược kinh doanh, doanh số, thị phần và uy tín của DTS không ngừng tăng trưởng và trở thành nhà tích hợp hệ thống hàng đầu tại Việt Nam.",
    imageUrl: null,
  },
  en: {
    label: "About Us",
    title: "Let's shape\nthe future",
    description:
      "DTS is proud to be a reputable brand providing comprehensive solutions including: Solution consulting, system architecture, equipment supply, deployment, operation, and training. Since its establishment, DTS has continuously grown in business strategy, revenue, market share and reputation to become a leading system integrator in Vietnam.",
    imageUrl: null,
  },
};

export async function getGioiThieuData(lang: string): Promise<GioiThieuData> {
  try {
    const data = await client.fetch<GioiThieuData | null>(GIOI_THIEU_QUERY, { lang });
    if (data?.title) return { ...gioiThieuFallback[lang], ...data };
  } catch {}
  return gioiThieuFallback[lang] || gioiThieuFallback.vi;
}

/* ── Hero Banner ── */

export interface HeroData {
  videoUrl: string;
  title: string;
  subtitle: string;
  keywords: string[];
  ctaProfileLabel: string;
  ctaProfileHref: string;
  ctaContactLabel: string;
  ctaContactHref: string;
}

const HERO_QUERY = `*[_type == "hero" && language == $lang][0]{
  videoUrl,
  title,
  subtitle,
  keywords,
  ctaProfileLabel,
  ctaProfileHref,
  ctaContactLabel,
  ctaContactHref
}`;

const HERO_VIDEO_FALLBACK = "/assets/bg.mp4";

const heroFallback: Record<string, HeroData> = {
  vi: {
    videoUrl: HERO_VIDEO_FALLBACK,
    title: "Giải pháp Công nghệ Toàn diện cho Doanh nghiệp",
    subtitle:
      "DTG cung cấp các giải pháp công nghệ thông tin tiên tiến, giúp doanh nghiệp chuyển đổi số hiệu quả và bền vững.",
    keywords: [
      "AN NINH MẠNG",
      "ĐIỆN TOÁN ĐÁM MÂY",
      "HẠ TẦNG CNTT",
      "CHUYỂN ĐỔI SỐ",
    ],
    ctaProfileLabel: "Tìm hiểu thêm",
    ctaProfileHref: "/ve-chung-toi",
    ctaContactLabel: "Liên hệ tư vấn",
    ctaContactHref: "/lien-he",
  },
  en: {
    videoUrl: HERO_VIDEO_FALLBACK,
    title: "Comprehensive Technology Solutions for Enterprises",
    subtitle:
      "DTG provides advanced IT solutions, helping enterprises achieve effective and sustainable digital transformation.",
    keywords: [
      "CYBERSECURITY",
      "CLOUD COMPUTING",
      "IT INFRASTRUCTURE",
      "DIGITAL TRANSFORMATION",
    ],
    ctaProfileLabel: "Learn more",
    ctaProfileHref: "/ve-chung-toi",
    ctaContactLabel: "Contact us",
    ctaContactHref: "/lien-he",
  },
};

export async function getHeroData(lang: string): Promise<HeroData> {
  try {
    const data = await client.fetch<HeroData | null>(HERO_QUERY, { lang });
    if (data?.title) {
      return { ...heroFallback[lang], ...data, videoUrl: data.videoUrl || HERO_VIDEO_FALLBACK };
    }
  } catch {}
  return heroFallback[lang] || heroFallback.vi;
}

/* ── Partners Page ── */

const PARTNERS_PAGE_QUERY = `*[_type == "trangDoiTac" && ngonNgu == $lang][0]{
  "heroTitle": tieuDeHero,
  "heroDescription": moTaHero,
  "heroBackgroundImage": anhNenHero,
  "ctaButtonLabel": nutLienHe,
  "ctaButtonHref": duongDanNut,
  "strategicPartnersTitle": tieuDeDoiTac,
  "strategicPartners": danhSachDoiTac[]{ "name": ten, logo, "url": trangWeb },
  "networkPartnersTitle": tieuDeMangLuoi,
  "networkPartners": danhSachMangLuoi[]{ "name": ten, logo, "url": trangWeb },
  "clientsTitle": tieuDeKhachHang,
  "clientCategories": danhMucKhachHang,
  "clients": danhSachKhachHang[]{ "name": ten, logo, "category": danhMuc, "url": trangWeb }
}`;

const partnersFallback: Record<string, PartnersPageData> = {
  vi: {
    heroTitle: "Khách hàng – Đối tác",
    heroDescription:
      "DTS phát huy sức mạnh từ vị thế là một trong những nhà tích hợp hệ thống hàng đầu tại Việt Nam qua các chiến lược hợp tác kinh doanh với những đối tác công nghệ hàng đầu trong và ngoài nước. Chúng tôi mang đến cho khách hàng nhiều sự lựa chọn về sản phẩm – công nghệ tối ưu, tiên tiến và phù hợp với thực trạng ngành Công nghệ thông tin tại Việt Nam. Sự hài lòng của khách hàng là ưu tiên hàng đầu với chúng tôi.",
    heroBackgroundImage: null,
    ctaButtonLabel: "Tư vấn",
    ctaButtonHref: "/lien-he",
    strategicPartnersTitle: "ĐỐI TÁC CHIẾN LƯỢC",
    strategicPartners: [],
    networkPartnersTitle: "MẠNG LƯỚI ĐỐI TÁC CÔNG NGHỆ",
    networkPartners: [],
    clientsTitle: "KHÁCH HÀNG ĐA LĨNH VỰC",
    clientCategories: ["Tất cả", "Viễn thông/Di động", "Truyền hình", "Tài chính", "Chính phủ", "Doanh nghiệp", "Khách hàng nước ngoài"],
    clients: [],
  },
  en: {
    heroTitle: "Clients & Partners",
    heroDescription:
      "DTS leverages its position as one of the leading system integrators in Vietnam through strategic business partnerships with top technology partners domestically and internationally. We provide customers with a wide range of optimal, advanced products and technologies suited to the IT landscape in Vietnam. Customer satisfaction is our top priority.",
    heroBackgroundImage: null,
    ctaButtonLabel: "Consult",
    ctaButtonHref: "/contact",
    strategicPartnersTitle: "STRATEGIC PARTNERS",
    strategicPartners: [],
    networkPartnersTitle: "TECHNOLOGY PARTNER NETWORK",
    networkPartners: [],
    clientsTitle: "MULTI-SECTOR CLIENTS",
    clientCategories: ["All", "Telecom/Mobile", "Broadcasting", "Finance", "Government", "Enterprise", "International"],
    clients: [],
  },
};

export async function getPartnersPageData(
  lang: string
): Promise<PartnersPageData> {
  try {
    const data = await client.fetch<PartnersPageData | null>(
      PARTNERS_PAGE_QUERY,
      { lang }
    );
    if (data?.heroTitle) {
      return {
        ...data,
        strategicPartners: data.strategicPartners ?? [],
        networkPartners: data.networkPartners ?? [],
        clients: data.clients ?? [],
        clientCategories: data.clientCategories ?? partnersFallback[lang]?.clientCategories ?? [],
      };
    }
  } catch {}
  return partnersFallback[lang] || partnersFallback.vi;
}
