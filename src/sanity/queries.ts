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
  navItems[]{
    label, href,
    children[]{ label, href, description },
    megaMenu[]{
      title, href, description,
      children[]{ label, href, description }
    }
  },
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

// Hrefs that should use mega menu — used as fallback when Sanity data lacks megaMenu
const MEGA_MENU_HREFS = ["/giai-phap-dich-vu", "/solutions"];

export async function getHeaderData(lang: string): Promise<HeaderData> {
  const fb = fallback[lang] || fallback.vi;
  try {
    const data = await client.fetch<HeaderData | null>(HEADER_QUERY, { lang });
    if (data?.navItems?.length) {
      // If Sanity nav item matches a mega menu href but has no megaMenu data,
      // inject it from fallback
      data.navItems = data.navItems.map((item) => {
        if (MEGA_MENU_HREFS.includes(item.href) && !item.megaMenu?.length) {
          const fbItem = fb.navItems.find((f) => f.href === item.href);
          if (fbItem?.megaMenu) {
            return { ...item, megaMenu: fbItem.megaMenu, children: undefined };
          }
        }
        return item;
      });
      return data;
    }
  } catch {}
  return fb;
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

/* ── Giải pháp ── */

export interface GiaiPhapStat {
  value: string;
  label: string;
}

export interface GiaiPhapAward {
  source: string;
  title: string;
}

export interface GiaiPhapTab {
  label: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  stats: GiaiPhapStat[];
  awards: GiaiPhapAward[];
}

export interface GiaiPhapData {
  tabs: GiaiPhapTab[];
  viewAllLabel: string;
}

const GIAI_PHAP_QUERY = `*[_type == "giaiPhap" && language == $lang][0]{
  tabs[]{ label, title, description, ctaLabel, ctaHref, stats[]{ value, label }, awards[]{ source, title } },
  viewAllLabel
}`;

const giaiPhapFallback: Record<string, GiaiPhapData> = {
  vi: {
    viewAllLabel: "Xem tất cả",
    tabs: [
      {
        label: "Bảo mật mạng hỗ trợ bởi AI",
        title: "Bảo mật mạng hỗ trợ bởi AI",
        description: "Bảo vệ mọi người và mọi thứ khỏi các mối đe dọa mới nhất ở mọi địa điểm. Được xây dựng cho Zero Trust và hỗ trợ bởi AI, nền tảng giám sát, phân tích và ngăn chặn các mối đe dọa tinh vi trong thời gian thực.",
        ctaLabel: "Khám phá Bảo mật mạng",
        ctaHref: "/giai-phap-dich-vu/an-ninh-mang",
        stats: [
          { value: "95%", label: "TRONG FORTUNE 100" },
          { value: "70 K", label: "KHÁCH HÀNG" },
        ],
        awards: [
          { source: "Gartner", title: "2025 Gartner® Magic Quadrant™ for Hybrid Mesh Firewall" },
          { source: "Gartner", title: "2025 Gartner® Magic Quadrant™ for SASE Platforms" },
          { source: "Forrester", title: "The Forrester Wave™ Enterprise Firewall Solutions" },
          { source: "Gartner", title: "Gartner® Magic Quadrant™ for Single-Vendor SASE" },
          { source: "Gartner", title: "Gartner® Magic Quadrant™ for Network Firewalls" },
          { source: "Gartner", title: "Gartner® Magic Quadrant™ for SD-WAN" },
        ],
      },
      {
        label: "Vận hành bảo mật hỗ trợ bởi AI",
        title: "Vận hành bảo mật hỗ trợ bởi AI",
        description: "Tăng tốc phát hiện và phản hồi mối đe dọa với nền tảng SOC hiện đại, được hỗ trợ bởi AI để bảo vệ toàn diện.",
        ctaLabel: "Khám phá Vận hành bảo mật",
        ctaHref: "/giai-phap-dich-vu/an-ninh-mang",
        stats: [
          { value: "8x", label: "PHÁT HIỆN NHANH HƠN" },
          { value: "98%", label: "ĐỘ CHÍNH XÁC" },
        ],
        awards: [
          { source: "Gartner", title: "Gartner® Magic Quadrant™ for SIEM" },
          { source: "Forrester", title: "The Forrester Wave™ XDR Platforms" },
        ],
      },
      {
        label: "Bảo mật đám mây thời gian thực",
        title: "Bảo mật đám mây thời gian thực",
        description: "Bảo vệ ứng dụng đám mây và dữ liệu với khả năng giám sát liên tục và phản hồi tự động.",
        ctaLabel: "Khám phá Bảo mật đám mây",
        ctaHref: "/giai-phap-dich-vu/dam-may",
        stats: [
          { value: "100%", label: "KHẢ NĂNG HIỂN THỊ" },
          { value: "3M+", label: "TÀI SẢN ĐƯỢC BẢO VỆ" },
        ],
        awards: [
          { source: "Gartner", title: "Gartner® Magic Quadrant™ for CNAPP" },
        ],
      },
    ],
  },
  en: {
    viewAllLabel: "View all",
    tabs: [
      {
        label: "AI-Powered Network Security",
        title: "AI-Powered Network Security",
        description: "Protect everyone and everything from the latest threats at every location. Built for Zero Trust and powered by AI.",
        ctaLabel: "Explore Network Security",
        ctaHref: "/solutions/cybersecurity",
        stats: [
          { value: "95%", label: "OF FORTUNE 100" },
          { value: "70 K", label: "CUSTOMERS" },
        ],
        awards: [
          { source: "Gartner", title: "2025 Gartner® Magic Quadrant™ for Hybrid Mesh Firewall" },
          { source: "Gartner", title: "2025 Gartner® Magic Quadrant™ for SASE Platforms" },
        ],
      },
      {
        label: "AI-Powered Security Operations",
        title: "AI-Powered Security Operations",
        description: "Accelerate threat detection and response with a modern SOC platform powered by AI.",
        ctaLabel: "Explore Security Operations",
        ctaHref: "/solutions/cybersecurity",
        stats: [
          { value: "8x", label: "FASTER DETECTION" },
          { value: "98%", label: "ACCURACY" },
        ],
        awards: [
          { source: "Gartner", title: "Gartner® Magic Quadrant™ for SIEM" },
        ],
      },
      {
        label: "Real-Time Cloud Security",
        title: "Real-Time Cloud Security",
        description: "Protect cloud applications and data with continuous monitoring and automated response.",
        ctaLabel: "Explore Cloud Security",
        ctaHref: "/solutions/cloud",
        stats: [
          { value: "100%", label: "VISIBILITY" },
          { value: "3M+", label: "ASSETS PROTECTED" },
        ],
        awards: [
          { source: "Gartner", title: "Gartner® Magic Quadrant™ for CNAPP" },
        ],
      },
    ],
  },
};

export async function getGiaiPhapData(lang: string): Promise<GiaiPhapData> {
  try {
    const data = await client.fetch<GiaiPhapData | null>(GIAI_PHAP_QUERY, { lang });
    if (data?.tabs?.length) return data;
  } catch {}
  return giaiPhapFallback[lang] || giaiPhapFallback.vi;
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
