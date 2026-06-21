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
      {
        label: "News",
        href: "/news",
        children: [
          { label: "Project News", href: "/tin-tuc?danh-muc=tin-du-an" },
          { label: "Internal News", href: "/tin-tuc?danh-muc=tin-noi-bo" },
          { label: "Tech News", href: "/tin-tuc?danh-muc=tin-cong-nghe" },
        ],
      },
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

/* ── Tuyển dụng ── */

export interface JobListing {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  deadline: string;
  quantity: number;
  isNew: boolean;
  description: string;
  jobDescription: string;
  requirements: string;
  preferred: string;
  benefits: string;
  contactEmail: string;
  contactPhone: string;
}

export interface TuyenDungData {
  heroTitle: string;
  searchPlaceholder: string;
  industryLabel: string;
  locationLabel: string;
  searchButtonLabel: string;
  industries: string[];
  locations: string[];
  quote: string;
  contactPhone: string;
  contactName: string;
  contactEmail: string;
  jobs: JobListing[];
}

const TUYEN_DUNG_QUERY = `*[_type == "tuyenDung" && language == $lang][0]{
  heroTitle,
  searchPlaceholder,
  industryLabel,
  locationLabel,
  searchButtonLabel,
  industries,
  locations,
  quote,
  contactPhone,
  contactName,
  contactEmail,
  jobs[]{ slug, title, department, location, type, salary, deadline, quantity, isNew, description, jobDescription, requirements, preferred, benefits, contactEmail, contactPhone }
}`;

const tuyenDungFallback: Record<string, TuyenDungData> = {
  vi: {
    heroTitle: "Tìm kiếm các vị trí tuyển dụng",
    searchPlaceholder: "Nhập từ khoá tìm kiếm",
    industryLabel: "Ngành nghề",
    locationLabel: "Địa điểm",
    searchButtonLabel: "Tìm kiếm",
    industries: [
      "Tất cả ngành nghề",
      "Công nghệ thông tin",
      "An ninh mạng",
      "Trí tuệ nhân tạo",
      "Kinh doanh",
      "Marketing",
      "Hành chính - Nhân sự",
    ],
    locations: [
      "Tất cả địa điểm",
      "Hà Nội",
      "TP. Hồ Chí Minh",
      "Đà Nẵng",
    ],
    quote:
      "Chúng tôi luôn tìm kiếm những nhân viên xuất sắc với niềm đam mê nghề nghiệp. Đừng ngần ngại liên hệ với chúng tôi nếu bạn quan tâm một vị trí bất kỳ tương ứng với kinh nghiệm của bản thân, ngay cả khi vị trí đó chưa có thông báo tuyển dụng. Vì biết đâu, bạn có thể là một mảnh ghép tuyệt vời cho đội ngũ của chúng tôi!",
    contactPhone: "093 463 8683",
    contactName: "Ms.Thuỷ",
    contactEmail: "thuynt@dts.com.vn",
    jobs: [],
  },
  en: {
    heroTitle: "Search for job openings",
    searchPlaceholder: "Enter search keyword",
    industryLabel: "Industry",
    locationLabel: "Location",
    searchButtonLabel: "Search",
    industries: [
      "All industries",
      "Information Technology",
      "Cybersecurity",
      "Artificial Intelligence",
      "Business",
      "Marketing",
      "HR & Administration",
    ],
    locations: [
      "All locations",
      "Hanoi",
      "Ho Chi Minh City",
      "Da Nang",
    ],
    quote:
      "We are always looking for outstanding employees with a passion for their profession. Don't hesitate to contact us if you are interested in any position that matches your experience, even if there is no job posting. You might just be a perfect fit for our team!",
    contactPhone: "093 463 8683",
    contactName: "Ms.Thuy",
    contactEmail: "thuynt@dts.com.vn",
    jobs: [],
  },
};

export async function getTuyenDungData(lang: string): Promise<TuyenDungData> {
  try {
    const data = await client.fetch<TuyenDungData | null>(TUYEN_DUNG_QUERY, { lang });
    if (data?.heroTitle) return { ...tuyenDungFallback[lang], ...data };
  } catch {}
  return tuyenDungFallback[lang] || tuyenDungFallback.vi;
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

/* ── Liên hệ ── */

export interface LienHePhone {
  label: string;
  number: string;
}

export interface LienHeSolution {
  key: string;
  label: string;
}

export interface LienHeData {
  title: string;
  infoTitle: string;
  address: string;
  phones: LienHePhone[];
  email: string;
  fax: string;
  mapEmbedUrl: string;
  formTitle: string;
  formNameLabel: string;
  formCompanyLabel: string;
  formPhoneEmailLabel: string;
  formSolutionLabel: string;
  formMessageLabel: string;
  formSubmitLabel: string;
  formSuccessMessage: string;
  solutions: LienHeSolution[];
}

const LIEN_HE_QUERY = `*[_type == "lienHe" && language == $lang][0]{
  title, infoTitle, address,
  phones[]{ label, number },
  email, fax, mapEmbedUrl,
  formTitle, formNameLabel, formCompanyLabel,
  formPhoneEmailLabel, formSolutionLabel,
  formMessageLabel, formSubmitLabel, formSuccessMessage,
  solutions[]{ key, label }
}`;

const lienHeFallback: Record<string, LienHeData> = {
  vi: {
    title: "Liên hệ",
    infoTitle: "Thông tin liên hệ",
    address: "Tòa nhà DTS, 287B Điện Biên Phủ, P. Xuân Hòa, TP. Hồ Chí Minh",
    phones: [
      { label: "DTS HCM", number: "+(84) 28 3933 6666" },
      { label: "DTS Hà Nội", number: "+(84) 24 3942 6568" },
      { label: "DTS Đà Nẵng", number: "+(84) 236 381 2936" },
    ],
    email: "support@dts.com.vn",
    fax: "+(84) 28 3932 2369",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1267!2d106.6944!3d10.8006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ4JzAyLjIiTiAxMDbCsDQxJzM5LjgiRQ!5e0!3m2!1svi!2svn!4v1700000000000",
    formTitle: "Gửi yêu cầu tư vấn",
    formNameLabel: "Họ và tên",
    formCompanyLabel: "Tên công ty",
    formPhoneEmailLabel: "SĐT / Email",
    formSolutionLabel: "Mảng giải pháp",
    formMessageLabel: "Nội dung yêu cầu",
    formSubmitLabel: "Gửi yêu cầu",
    formSuccessMessage: "Cảm ơn bạn! Yêu cầu đã được gửi thành công. Chúng tôi sẽ liên hệ lại sớm nhất.",
    solutions: [
      { key: "cyber-security", label: "An ninh mạng" },
      { key: "it-infrastructure", label: "Hạ tầng CNTT" },
      { key: "ai-solutions", label: "Giải pháp AI" },
      { key: "soc-services", label: "Dịch vụ SOC" },
      { key: "other", label: "Khác" },
    ],
  },
  en: {
    title: "Contact",
    infoTitle: "Contact Information",
    address: "DTS Building, 287B Dien Bien Phu, Xuan Hoa Ward, Ho Chi Minh City",
    phones: [
      { label: "DTS HCM", number: "+(84) 28 3933 6666" },
      { label: "DTS Hanoi", number: "+(84) 24 3942 6568" },
      { label: "DTS Da Nang", number: "+(84) 236 381 2936" },
    ],
    email: "support@dts.com.vn",
    fax: "+(84) 28 3932 2369",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1267!2d106.6944!3d10.8006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ4JzAyLjIiTiAxMDbCsDQxJzM5LjgiRQ!5e0!3m2!1sen!2svn!4v1700000000000",
    formTitle: "Send a consultation request",
    formNameLabel: "Full name",
    formCompanyLabel: "Company name",
    formPhoneEmailLabel: "Phone / Email",
    formSolutionLabel: "Solution area",
    formMessageLabel: "Message",
    formSubmitLabel: "Send request",
    formSuccessMessage: "Thank you! Your request has been sent successfully. We will get back to you shortly.",
    solutions: [
      { key: "cyber-security", label: "Cyber Security" },
      { key: "it-infrastructure", label: "IT Infrastructure" },
      { key: "ai-solutions", label: "AI Solutions" },
      { key: "soc-services", label: "SOC Services" },
      { key: "other", label: "Other" },
    ],
  },
};

export async function getLienHeData(lang: string): Promise<LienHeData> {
  const fb = lienHeFallback[lang] || lienHeFallback.vi;
  try {
    const data = await client.fetch<LienHeData | null>(LIEN_HE_QUERY, { lang });
    if (data?.title) {
      return {
        ...fb,
        ...data,
        phones: data.phones ?? fb.phones,
        solutions: data.solutions ?? fb.solutions,
      };
    }
  } catch {}
  return fb;
}

/* ── Tin tức ── */

export interface TinTucItem {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  thumbnailUrl: string | null;
}

export interface TinTucDetail extends TinTucItem {
  body: unknown[];
}

export interface TinTucCategory {
  value: string;
  label: string;
}

export interface TinTucPageData {
  categories: TinTucCategory[];
  breadcrumbHome: string;
  breadcrumbNews: string;
  latestLabel: string;
  previousLabel: string;
  detailLabel: string;
  allLabel: string;
}

const TIN_TUC_LIST_QUERY = `*[_type == "tinTuc" && language == $lang && category == $category] | order(publishedAt desc) {
  "slug": slug.current,
  title,
  excerpt,
  category,
  publishedAt,
  "thumbnailUrl": thumbnail.asset->url
}`;

const TIN_TUC_ALL_QUERY = `*[_type == "tinTuc" && language == $lang] | order(publishedAt desc) {
  "slug": slug.current,
  title,
  excerpt,
  category,
  publishedAt,
  "thumbnailUrl": thumbnail.asset->url
}`;

const TIN_TUC_DETAIL_QUERY = `*[_type == "tinTuc" && language == $lang && slug.current == $slug][0]{
  "slug": slug.current,
  title,
  excerpt,
  category,
  publishedAt,
  "thumbnailUrl": thumbnail.asset->url,
  body
}`;

const tinTucPageFallback: Record<string, TinTucPageData> = {
  vi: {
    categories: [
      { value: "tin-du-an", label: "Tin dự án" },
      { value: "tin-noi-bo", label: "Tin nội bộ" },
      { value: "tin-cong-nghe", label: "Tin công nghệ" },
    ],
    breadcrumbHome: "TRANG CHỦ",
    breadcrumbNews: "TIN TỨC",
    latestLabel: "TIN MỚI NHẤT",
    previousLabel: "BÀI VIẾT TRƯỚC ĐÓ",
    detailLabel: "Chi tiết",
    allLabel: "Tất cả",
  },
  en: {
    categories: [
      { value: "tin-du-an", label: "Project News" },
      { value: "tin-noi-bo", label: "Internal News" },
      { value: "tin-cong-nghe", label: "Tech News" },
    ],
    breadcrumbHome: "HOME",
    breadcrumbNews: "NEWS",
    latestLabel: "LATEST NEWS",
    previousLabel: "PREVIOUS ARTICLES",
    detailLabel: "Details",
    allLabel: "All",
  },
};

const tinTucFallbackArticles: Record<string, TinTucItem[]> = {
  "tin-du-an": [
    {
      slug: "dtg-dong-hanh-cp-viet-nam",
      title: "CÔNG TY CỔ PHẦN CÔNG NGHỆ DTG ĐỒNG HÀNH CÙNG CÔNG TY CP CHĂN NUÔI C.P. VIỆT NAM NÂNG TẦM HỆ THỐNG PHẦN MỀM MÁY CHỦ",
      excerpt: "Trong bối cảnh chuyển đổi số đang trở thành ưu tiên hàng đầu, các doanh nghiệp không ngừng nâng cấp hệ thống nhằm nâng cao chất lượng quản lý và tối ưu hóa quy trình vận hành. Việc chuẩn bị cho bất kỳ sự thay đổi hạ tầng CNTT nào đều cần có sự tham vấn từ các chuyên gia uy tín.",
      category: "tin-du-an",
      publishedAt: "2026-05-14T00:00:00Z",
      thumbnailUrl: null,
    },
    {
      slug: "dtg-hanh-trinh-ket-noi-tri-tue",
      title: "DTG CORP – HÀNH TRÌNH KẾT NỐI TRI TUỆ, CẢM XÚC & CÔNG NGHỆ",
      excerpt: "Hội thảo AI THỰC TIỄN PHÒNG, THỰC SỰ đã diễn ra thành công với sự tham gia của hàng trăm chuyên gia và doanh nghiệp hàng đầu.",
      category: "tin-du-an",
      publishedAt: "2025-11-24T00:00:00Z",
      thumbnailUrl: null,
    },
    {
      slug: "dich-vu-tu-van-lap-ho-so-attt",
      title: "DỊCH VỤ TƯ VẤN LẬP HỒ SƠ ĐỀ XUẤT CẤP ĐỘ AN TOÀN THÔNG TIN (HSĐXCĐ) THEO NĐ 85/2016 & TT 12/2022",
      excerpt: "Trong bối cảnh các quy định về an toàn và bảo mật thông tin (ATTT) ngày càng chặt chẽ, việc lập Hồ sơ đề xuất cấp độ An toàn Thông tin trở thành yêu cầu bắt buộc.",
      category: "tin-du-an",
      publishedAt: "2025-07-01T00:00:00Z",
      thumbnailUrl: null,
    },
    {
      slug: "dich-vu-cyber-security-assessment",
      title: "DỊCH VỤ CYBER SECURITY ASSESSMENT | ĐÁNH GIÁ ATTT TOÀN DIỆN",
      excerpt: "Dịch vụ Đánh giá An toàn Thông tin (Cyber Security Assessment) của DTG là giải pháp đánh giá toàn diện mức độ an toàn của hệ thống CNTT.",
      category: "tin-du-an",
      publishedAt: "2025-06-15T00:00:00Z",
      thumbnailUrl: null,
    },
    {
      slug: "dich-vu-van-hanh-bao-mat",
      title: "DỊCH VỤ VẬN HÀNH BẢO MẬT",
      excerpt: "Giải pháp vận hành bảo mật toàn diện giúp doanh nghiệp bảo vệ hệ thống 24/7 với đội ngũ chuyên gia hàng đầu.",
      category: "tin-du-an",
      publishedAt: "2025-05-20T00:00:00Z",
      thumbnailUrl: null,
    },
    {
      slug: "dich-vu-ung-cuu-su-co-attt",
      title: "DỊCH VỤ ỨNG CỨU SỰ CỐ AN TOÀN THÔNG TIN",
      excerpt: "Ứng cứu sự cố an toàn thông tin nhanh chóng, chuyên nghiệp, giảm thiểu thiệt hại cho doanh nghiệp.",
      category: "tin-du-an",
      publishedAt: "2025-04-10T00:00:00Z",
      thumbnailUrl: null,
    },
  ],
  "tin-noi-bo": [
    {
      slug: "dtg-ky-niem-25-nam",
      title: "DTG KỶ NIỆM 25 NĂM THÀNH LẬP – HÀNH TRÌNH ĐỔI MỚI VÀ PHÁT TRIỂN",
      excerpt: "Nhân dịp kỷ niệm 25 năm thành lập, DTG nhìn lại chặng đường phát triển đáng tự hào và hướng tới tương lai với nhiều kế hoạch mới.",
      category: "tin-noi-bo",
      publishedAt: "2026-03-01T00:00:00Z",
      thumbnailUrl: null,
    },
    {
      slug: "dtg-team-building-2026",
      title: "DTG TEAM BUILDING 2026 – KẾT NỐI ĐỂ VƯƠN XA",
      excerpt: "Hoạt động team building thường niên giúp gắn kết đội ngũ và tạo động lực làm việc hiệu quả hơn.",
      category: "tin-noi-bo",
      publishedAt: "2026-02-15T00:00:00Z",
      thumbnailUrl: null,
    },
  ],
  "tin-cong-nghe": [
    {
      slug: "xu-huong-ai-2026",
      title: "XU HƯỚNG AI NĂM 2026 – NHỮNG ĐIỀU DOANH NGHIỆP CẦN BIẾT",
      excerpt: "Trí tuệ nhân tạo tiếp tục là xu hướng công nghệ hàng đầu trong năm 2026, mở ra nhiều cơ hội cho doanh nghiệp chuyển đổi số.",
      category: "tin-cong-nghe",
      publishedAt: "2026-04-20T00:00:00Z",
      thumbnailUrl: null,
    },
    {
      slug: "zero-trust-bao-mat-hien-dai",
      title: "ZERO TRUST – MÔ HÌNH BẢO MẬT HIỆN ĐẠI CHO DOANH NGHIỆP",
      excerpt: "Mô hình Zero Trust đang trở thành tiêu chuẩn mới trong bảo mật doanh nghiệp, thay thế các phương pháp truyền thống.",
      category: "tin-cong-nghe",
      publishedAt: "2026-03-15T00:00:00Z",
      thumbnailUrl: null,
    },
  ],
};

export function getTinTucPageData(lang: string): TinTucPageData {
  return tinTucPageFallback[lang] || tinTucPageFallback.vi;
}

export async function getTinTucList(
  lang: string,
  category?: string
): Promise<TinTucItem[]> {
  try {
    let data: TinTucItem[] | null;
    if (category) {
      data = await client.fetch<TinTucItem[]>(TIN_TUC_LIST_QUERY, {
        lang,
        category,
      });
    } else {
      data = await client.fetch<TinTucItem[]>(TIN_TUC_ALL_QUERY, { lang });
    }
    if (data?.length) return data;
  } catch {}

  // Fallback
  if (category) {
    return tinTucFallbackArticles[category] || [];
  }
  return Object.values(tinTucFallbackArticles).flat().sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getTinTucDetail(
  lang: string,
  slug: string
): Promise<TinTucDetail | null> {
  try {
    const data = await client.fetch<TinTucDetail | null>(TIN_TUC_DETAIL_QUERY, {
      lang,
      slug,
    });
    if (data?.title) return data;
  } catch {}

  // Fallback
  const all = Object.values(tinTucFallbackArticles).flat();
  const found = all.find((a) => a.slug === slug);
  if (found) {
    return { ...found, body: [] };
  }
  return null;
}

/* ── Footer ── */

export interface SocialLink {
  platform: string;
  url: string;
}

export interface Office {
  name: string;
  address: string;
  phone: string;
  fax?: string;
}

export interface FooterData {
  ctaTitle: string;
  ctaButtonLabel: string;
  hotline: string;
  email: string;
  socialLinks: SocialLink[];
  offices: Office[];
}

const FOOTER_QUERY = `*[_type == "footer" && language == $lang][0]{
  ctaTitle,
  ctaButtonLabel,
  hotline,
  email,
  socialLinks[]{ platform, url },
  offices[]{ name, address, phone, fax }
}`;

const footerFallback: Record<string, FooterData> = {
  vi: {
    ctaTitle: "Bắt đầu câu chuyện nâng cấp hạ tầng ngay hôm nay",
    ctaButtonLabel: "Tư vấn ngay",
    hotline: "1800 1537",
    email: "support@dts.com.vn",
    socialLinks: [
      { platform: "facebook", url: "#" },
      { platform: "linkedin", url: "#" },
      { platform: "youtube", url: "#" },
    ],
    offices: [
      {
        name: "Trụ sở chính",
        address: "Tòa nhà DTS, 287B Điện Biên Phủ, P. Xuân Hòa, TP. Hồ Chí Minh, Việt Nam",
        phone: "+(84) 28 3933 6666",
        fax: "+(84) 28 3932 2369",
      },
      {
        name: "Văn phòng Hà Nội",
        address: "Tòa nhà Sao Bắc, 04 Dã Tượng, P. Cửa Nam, TP. Hà Nội, Việt Nam",
        phone: "+(84) 24 3942 6568",
        fax: "+(84) 24 3942 6566",
      },
      {
        name: "Văn phòng Đà Nẵng",
        address: "Tòa nhà Danabook, Phòng 6.4.5 tầng 6, Tòa nhà 76 Bạch Đằng, P. Hải Châu, TP. Đà Nẵng, Việt Nam",
        phone: "+(84) 236 381 2936",
      },
    ],
  },
  en: {
    ctaTitle: "Start your infrastructure upgrade journey today",
    ctaButtonLabel: "Get in touch",
    hotline: "1800 1537",
    email: "support@dts.com.vn",
    socialLinks: [
      { platform: "facebook", url: "#" },
      { platform: "linkedin", url: "#" },
      { platform: "youtube", url: "#" },
    ],
    offices: [
      {
        name: "Headquarters",
        address: "DTS Building, 287B Dien Bien Phu, Xuan Hoa Ward, Ho Chi Minh City, Vietnam",
        phone: "+(84) 28 3933 6666",
        fax: "+(84) 28 3932 2369",
      },
      {
        name: "Hanoi Office",
        address: "Sao Bac Building, 04 Da Tuong, Cua Nam Ward, Hanoi, Vietnam",
        phone: "+(84) 24 3942 6568",
        fax: "+(84) 24 3942 6566",
      },
      {
        name: "Da Nang Office",
        address: "Danabook Building, Room 6.4.5, 6th Floor, 76 Bach Dang, Hai Chau Ward, Da Nang, Vietnam",
        phone: "+(84) 236 381 2936",
      },
    ],
  },
};

export async function getFooterData(lang: string): Promise<FooterData> {
  const fb = footerFallback[lang] || footerFallback.vi;
  try {
    const data = await client.fetch<FooterData | null>(FOOTER_QUERY, { lang });
    if (data?.hotline) {
      return {
        ...fb,
        ...data,
        socialLinks: data.socialLinks ?? fb.socialLinks,
        offices: data.offices ?? fb.offices,
      };
    }
  } catch {}
  return fb;
}
