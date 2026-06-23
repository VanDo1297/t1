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
  sectionTitle: string;
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
          {
            title: "Dịch vụ khác",
            href: "/giai-phap-dich-vu#dich-vu-khac",
            description: "Other Services",
            children: [
              { label: "Tư vấn và triển khai giải pháp", href: "/giai-phap-dich-vu#dich-vu-khac" },
              { label: "Bảo hành bảo trì", href: "/giai-phap-dich-vu#dich-vu-khac" },
              { label: "Ứng cứu sự cố", href: "/giai-phap-dich-vu#dich-vu-khac" },
              { label: "Cho thuê thiết bị", href: "/giai-phap-dich-vu#dich-vu-khac" },
            ],
          },
        ],
      },
      {
        label: "Đối tác & Khách hàng",
        href: "/doi-tac",
        children: [
          { label: "Đối tác", href: "/doi-tac#doi-tac" },
          { label: "Khách hàng", href: "/doi-tac#khach-hang" },
        ],
      },
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
          {
            title: "Other Services",
            href: "/giai-phap-dich-vu#dich-vu-khac",
            description: "Dịch vụ khác",
            children: [
              { label: "Consulting & Deployment", href: "/giai-phap-dich-vu#dich-vu-khac" },
              { label: "Warranty & Maintenance", href: "/giai-phap-dich-vu#dich-vu-khac" },
              { label: "Incident Response", href: "/giai-phap-dich-vu#dich-vu-khac" },
              { label: "Equipment Leasing", href: "/giai-phap-dich-vu#dich-vu-khac" },
            ],
          },
        ],
      },
      {
        label: "Partners & Clients",
        href: "/doi-tac",
        children: [
          { label: "Partners", href: "/doi-tac#doi-tac" },
          { label: "Clients", href: "/doi-tac#khach-hang" },
        ],
      },
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

// Hrefs that should use mega menu — used as fallback when Sanity data lacks megaMenu
const MEGA_MENU_HREFS = ["/giai-phap-dich-vu"];

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
  ctaLabel?: string;
  ctaHref?: string;
}

const GIOI_THIEU_QUERY = `*[_type == "gioiThieu" && language == $lang][0]{
  label,
  title,
  description,
  "imageUrl": image.asset->url,
  ctaLabel,
  ctaHref
}`;

const gioiThieuFallback: Record<string, GioiThieuData> = {
  vi: {
    label: "Giới thiệu về chúng tôi",
    title: "Let's shape\nthe future",
    description:
      "DTS tự hào là một thương hiệu uy tín cung cấp các giải pháp tổng thể bao gồm: Tư vấn giải pháp, kiến trúc hệ thống và cung cấp thiết bị, triển khai, vận hành, đào tạo. Từ khi thành lập đến nay, với chiến lược kinh doanh, doanh số, thị phần và uy tín của DTS không ngừng tăng trưởng và trở thành nhà tích hợp hệ thống hàng đầu tại Việt Nam.",
    imageUrl: null,
    ctaLabel: "Tìm hiểu thêm",
    ctaHref: "/ve-chung-toi",
  },
  en: {
    label: "About Us",
    title: "Let's shape\nthe future",
    description:
      "DTS is proud to be a reputable brand providing comprehensive solutions including: Solution consulting, system architecture, equipment supply, deployment, operation, and training. Since its establishment, DTS has continuously grown in business strategy, revenue, market share and reputation to become a leading system integrator in Vietnam.",
    imageUrl: null,
    ctaLabel: "Learn more",
    ctaHref: "/ve-chung-toi",
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
  imageUrl?: string;
}

export interface GiaiPhapTab {
  label: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  bgImageUrl?: string;
  stats: GiaiPhapStat[];
  awards: GiaiPhapAward[];
}

export interface GiaiPhapData {
  sectionHeading: string;
  tabs: GiaiPhapTab[];
  viewAllLabel: string;
}

const GIAI_PHAP_QUERY = `*[_type == "giaiPhap" && language == $lang][0]{
  sectionHeading,
  tabs[]{ label, title, description, ctaLabel, ctaHref, "bgImageUrl": bgImage.asset->url, stats[]{ value, label }, awards[]{ source, title, "imageUrl": image.asset->url } },
  viewAllLabel
}`;

const giaiPhapFallback: Record<string, GiaiPhapData> = {
  vi: {
    sectionHeading: "Giới thiệu Giải pháp\nvà Dịch vụ của DTG",
    viewAllLabel: "Xem tất cả",
    tabs: [
      {
        label: "Giải pháp Công nghệ",
        title: "Giải pháp Công nghệ",
        description: "Cung cấp hạ tầng và giải pháp công nghệ hiện đại, đáp ứng nhu cầu vận hành và phát triển của doanh nghiệp.",
        ctaLabel: "Khám phá Giải pháp Công nghệ",
        ctaHref: "/giai-phap-dich-vu/cong-nghe",
        stats: [],
        awards: [
          { source: "An toàn Thông tin", title: "Tập trung vào bảo mật doanh nghiệp với các giải pháp như NGFW, WAF, Zero Trust, và quản lý danh tính." },
          { source: "Trung tâm Dữ liệu", title: "Cung cấp hạ tầng ảo hóa, máy chủ, lưu trữ doanh nghiệp và các nền tảng Hybrid Cloud hiện đại." },
          { source: "Hệ thống Mạng", title: "Giải pháp mạng doanh nghiệp toàn diện bao gồm Switching, Wireless, SD-WAN và các hệ thống hội họp trực tuyến." },
          { source: "Bảo vệ Dữ liệu", title: "Đảm bảo tính liên tục của kinh doanh thông qua Backup, Disaster Recovery (DR) và phòng chống Ransomware." },
        ],
      },
      {
        label: "Dịch vụ An ninh mạng",
        title: "Dịch vụ An ninh mạng",
        description: "Bảo vệ toàn diện hệ thống và dữ liệu trước mọi mối đe dọa an ninh mạng.",
        ctaLabel: "Khám phá Dịch vụ An ninh mạng",
        ctaHref: "/giai-phap-dich-vu/an-ninh-mang",
        stats: [],
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
        label: "Giải pháp AI",
        title: "Giải pháp AI",
        description: "Ứng dụng AI để tối ưu quy trình, nâng cao hiệu quả và mở ra giá trị mới cho doanh nghiệp.",
        ctaLabel: "Khám phá Giải pháp AI",
        ctaHref: "/giai-phap-dich-vu/ai",
        stats: [],
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
        label: "Dịch vụ khác",
        title: "Dịch vụ khác",
        description: "Các dịch vụ hỗ trợ toàn diện, đồng hành cùng doanh nghiệp trong suốt quá trình vận hành.",
        ctaLabel: "Liên hệ tư vấn",
        ctaHref: "/lien-he",
        stats: [],
        awards: [
          { source: "Tư vấn & triển khai giải pháp", title: "Tư vấn chiến lược, thiết kế và triển khai các giải pháp công nghệ phù hợp với nhu cầu và mục tiêu của doanh nghiệp." },
          { source: "Bảo hành bảo trì", title: "Đảm bảo hệ thống vận hành ổn định, với đội ngũ kỹ thuật chuyên nghiệp." },
          { source: "Ứng cứu sự cố", title: "Hỗ trợ khẩn cấp khi xảy ra sự cố IT, giảm thiểu gián đoạn và rủi ro cho doanh nghiệp." },
          { source: "Cho thuê thiết bị", title: "Cung cấp thiết bị công nghệ chính hãng với chi phí tối ưu và linh hoạt theo nhu cầu." },
        ],
      },
    ],
  },
  en: {
    sectionHeading: "Introducing DTG's Solutions\nand Services",
    viewAllLabel: "View all",
    tabs: [
      {
        label: "Technology Solutions",
        title: "Technology Solutions",
        description: "Providing modern infrastructure and technology solutions to meet enterprise operational and growth needs.",
        ctaLabel: "Explore Technology Solutions",
        ctaHref: "/giai-phap-dich-vu/cong-nghe",
        stats: [],
        awards: [
          { source: "Cyber Security", title: "Enterprise security with NGFW, WAF, Zero Trust, and identity management." },
          { source: "Data Center", title: "Virtualization infrastructure, enterprise servers, storage and modern Hybrid Cloud platforms." },
          { source: "Network", title: "Comprehensive enterprise networking including Switching, Wireless, SD-WAN and video conferencing." },
          { source: "Data Protection", title: "Business continuity through Backup, Disaster Recovery (DR) and Ransomware protection." },
        ],
      },
      {
        label: "Cyber Security Services",
        title: "Cyber Security Services",
        description: "Comprehensive protection for systems and data against all cybersecurity threats.",
        ctaLabel: "Explore Security Services",
        ctaHref: "/giai-phap-dich-vu/an-ninh-mang",
        stats: [],
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
        label: "AI Solutions",
        title: "AI Solutions",
        description: "Applying AI to optimize processes, enhance efficiency and unlock new value for enterprises.",
        ctaLabel: "Explore AI Solutions",
        ctaHref: "/giai-phap-dich-vu/ai",
        stats: [],
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
        label: "Other Services",
        title: "Other Services",
        description: "Comprehensive support services, accompanying enterprises throughout their operations.",
        ctaLabel: "Contact Us",
        ctaHref: "/lien-he",
        stats: [],
        awards: [
          { source: "Consulting & Deployment", title: "Strategic consulting, design and deployment of technology solutions tailored to enterprise needs." },
          { source: "Warranty & Maintenance", title: "Ensuring stable system operations with a professional technical team." },
          { source: "Incident Response", title: "Emergency support for IT incidents, minimizing disruption and risk." },
          { source: "Equipment Leasing", title: "Genuine technology equipment with optimal costs and flexible terms." },
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
  "sectionTitle": tieuDeMuc,
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
    sectionTitle: "Đối tác đồng hành cùng chúng tôi",
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
    sectionTitle: "Our Partners",
    heroTitle: "Clients & Partners",
    heroDescription:
      "DTS leverages its position as one of the leading system integrators in Vietnam through strategic business partnerships with top technology partners domestically and internationally. We provide customers with a wide range of optimal, advanced products and technologies suited to the IT landscape in Vietnam. Customer satisfaction is our top priority.",
    heroBackgroundImage: null,
    ctaButtonLabel: "Consult",
    ctaButtonHref: "/lien-he",
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

export interface FallbackImage {
  src: string;
  alt?: string;
  caption?: string;
}

export interface TinTucDetail extends TinTucItem {
  body: unknown[];
  fallbackBody?: string[];
  fallbackImages?: FallbackImage[];
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
  homeSectionTitle: string;
  homeSectionSubtitle: string;
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
    homeSectionTitle: "TIN TỨC MỚI NHẤT",
    homeSectionSubtitle: "Cập nhật các hoạt động mới nhất của chúng tôi",
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
    homeSectionTitle: "LATEST NEWS",
    homeSectionSubtitle: "Stay updated with our latest activities",
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

const tinTucFallbackDetails: Record<string, { fallbackBody: string[]; fallbackImages: FallbackImage[] }> = {
  "dtg-dong-hanh-cp-viet-nam": {
    fallbackBody: [
      "Trong bối cảnh chuyển đổi số đang trở thành ưu tiên hàng đầu, các doanh nghiệp không ngừng nâng cấp hệ thống nhằm nâng cao chất lượng quản lý và tối ưu hóa quy trình vận hành. Việc chuẩn bị cho bất kỳ sự thay đổi hạ tầng CNTT nào đều cần thiết hơn bao giờ hết. Thay vì đầu tư vào cơ sở hạ tầng và tự tổ chức hoạt động khôi phục sau thảm họa, lựa chọn dịch vụ và giải pháp hỗ trợ từ các chuyên gia là phương án tối ưu và được nhiều doanh nghiệp tin tưởng.",
      "Trong bối cảnh chuyển đổi số đang trở thành ưu tiên hàng đầu, các doanh nghiệp không ngừng nâng cấp hệ thống nhằm nâng cao chất lượng quản lý và tối ưu hóa quy trình vận hành. Việc chuẩn bị cho bất kỳ thảm họa dữ liệu nào trở thành vấn đề cần thiết hơn bao giờ hết. Thay vì đầu tư vào cơ sở hạ tầng và tự tổ chức hoạt động khôi phục sau thảm họa, lựa chọn dịch vụ và giải pháp hỗ trợ từ các chuyên gia là phương án tối ưu và được nhiều doanh nghiệp tin tưởng.",
      "Công Ty Cổ Phần Công Nghệ DTG (DTG Corp) tự hào đồng hành cùng Công Ty CP Chăn Nuôi C.P. Việt Nam (C.P. Việt Nam) - Một trong những công ty dẫn đầu trong lĩnh vực chăn nuôi với hơn 20 năm hoạt động. DTG Corp đã hỗ trợ nâng cấp phần mềm máy chủ Veeam Backup & HPE Zerto và hệ thống máy chủ cho Data Center & DR Site. Song song đó cũng thuê phần mềm giám sát phát hiện xâm nhập. Những lợi ích cụ thể của việc nâng cấp này bao gồm phục hồi dữ liệu và duy trì hoạt động của hệ thống sau thảm họa trong thời gian ngắn nhất, sao chép toàn bộ hệ thống dữ liệu từ các phần mềm đã cài đặt lên ra nơi lưu trữ các trung tâm dữ liệu doanh nghiệp và bảo vệ hệ thống.",
      "Như những lợi ích vượt trội này, C.P. Việt Nam đã tăng cường hiệu quả quản lý và bảo vệ dữ liệu, đảm bảo hoạt động kinh doanh không bị gián đoạn trước mọi thách thức. Sự hợp tác đầu tư vào công nghệ và giải pháp chuyên nghiệp này cũng đã góp phần nâng cao vị thế của cả hai trong thị trường Việt Nam.",
    ],
    fallbackImages: [],
  },
  "dtg-hanh-trinh-ket-noi-tri-tue": {
    fallbackBody: [
      "Hội thảo \"AI THỰC TIỄN PHÒNG, THỰC SỰ\" đã diễn ra thành công tốt đẹp với sự tham gia của hàng trăm chuyên gia và doanh nghiệp hàng đầu. Sự kiện là cơ hội để DTG Corp chia sẻ tầm nhìn về ứng dụng AI trong thực tiễn doanh nghiệp.",
      "DTG Corp tổ chức sự kiện với mục tiêu kết nối tri thức, cảm xúc và công nghệ, tạo ra một không gian chia sẻ và học hỏi lẫn nhau. Đây không chỉ là một sự kiện công nghệ mà còn là hành trình kết nối con người.",
    ],
    fallbackImages: [],
  },
  "dich-vu-tu-van-lap-ho-so-attt": {
    fallbackBody: [
      "Trong bối cảnh các quy định về an toàn và bảo mật thông tin (ATTT) ngày càng chặt chẽ, việc lập Hồ sơ đề xuất cấp độ An toàn Thông tin (HSĐXCĐ) trở thành yêu cầu bắt buộc đối với các hệ thống thông tin của tổ chức, doanh nghiệp.",
      "Cấp độ An toàn Thông tin (theo NĐ85/2016) là nghĩa vụ pháp lý bắt buộc đối với các hệ thống thông tin công nghệ thông tin. DTG cung cấp dịch vụ tư vấn lập hồ sơ đề xuất cấp độ ATTT chuyên nghiệp, đảm bảo tuân thủ đầy đủ các quy định pháp luật hiện hành.",
      "Dịch vụ bao gồm: Khảo sát và đánh giá hiện trạng hệ thống, Xác định cấp độ an toàn phù hợp, Lập hồ sơ đề xuất theo mẫu quy định, Hỗ trợ trình cơ quan có thẩm quyền phê duyệt.",
    ],
    fallbackImages: [],
  },
  "dich-vu-cyber-security-assessment": {
    fallbackBody: [
      "Dịch vụ Đánh giá An toàn Thông tin (Cyber Security Assessment) của DTG là giải pháp đánh giá toàn diện mức độ an toàn của hệ thống CNTT, bao gồm hạ tầng, ứng dụng, kiến trúc thông tin, đào tạo.",
      "DTG sử dụng phương pháp đánh giá theo chuẩn quốc tế NIST, ISO 27001, và các tiêu chuẩn bảo mật hàng đầu để đưa ra báo cáo chi tiết về hiện trạng bảo mật và đề xuất giải pháp khắc phục.",
      "Quy trình đánh giá bao gồm: Thu thập thông tin và khảo sát, Kiểm tra lỗ hổng bảo mật, Đánh giá chính sách và quy trình, Phân tích rủi ro, Báo cáo và khuyến nghị.",
    ],
    fallbackImages: [],
  },
  "dich-vu-van-hanh-bao-mat": {
    fallbackBody: [
      "Giải pháp vận hành bảo mật toàn diện giúp doanh nghiệp bảo vệ hệ thống 24/7 với đội ngũ chuyên gia hàng đầu. DTG cung cấp dịch vụ vận hành bảo mật (Managed Security Services) cho các doanh nghiệp không có đội ngũ chuyên trách về an ninh mạng.",
      "Dịch vụ bao gồm: Giám sát an ninh mạng liên tục 24/7, Quản lý thiết bị bảo mật (Firewall, IDS/IPS, WAF), Phân tích và phản hồi sự cố, Báo cáo định kỳ về tình trạng bảo mật.",
    ],
    fallbackImages: [],
  },
  "dich-vu-ung-cuu-su-co-attt": {
    fallbackBody: [
      "Ứng cứu sự cố an toàn thông tin nhanh chóng, chuyên nghiệp, giảm thiểu thiệt hại cho doanh nghiệp. DTG cung cấp dịch vụ ứng cứu sự cố (Incident Response) với đội ngũ chuyên gia giàu kinh nghiệm.",
      "Khi xảy ra sự cố bảo mật, thời gian phản hồi là yếu tố quyết định. DTG cam kết thời gian phản hồi trong vòng 2 giờ và có mặt tại hiện trường trong vòng 24 giờ trên toàn quốc.",
      "Quy trình ứng cứu: Tiếp nhận và đánh giá sự cố, Ngăn chặn và cô lập, Khắc phục và phục hồi, Phân tích nguyên nhân gốc rễ, Báo cáo và khuyến nghị phòng ngừa.",
    ],
    fallbackImages: [],
  },
  "dtg-ky-niem-25-nam": {
    fallbackBody: [
      "Nhân dịp kỷ niệm 25 năm thành lập, DTG nhìn lại chặng đường phát triển đáng tự hào và hướng tới tương lai với nhiều kế hoạch mới. Từ một công ty nhỏ thành lập năm 2000, DTG đã trở thành một trong những nhà tích hợp hệ thống hàng đầu tại Việt Nam.",
      "Qua 25 năm, DTG đã phục vụ hơn 500 khách hàng doanh nghiệp, hợp tác với hơn 30 đối tác công nghệ quốc tế và xây dựng đội ngũ hơn 200 chuyên gia công nghệ. Chúng tôi cam kết tiếp tục đồng hành cùng doanh nghiệp Việt Nam trên hành trình chuyển đổi số.",
    ],
    fallbackImages: [],
  },
  "dtg-team-building-2026": {
    fallbackBody: [
      "Hoạt động team building thường niên giúp gắn kết đội ngũ và tạo động lực làm việc hiệu quả hơn. Năm 2026, DTG tổ chức chương trình team building với chủ đề \"Kết nối để vươn xa\" tại Đà Lạt.",
      "Chương trình bao gồm các hoạt động ngoài trời, workshop chia sẻ kinh nghiệm giữa các phòng ban và buổi tiệc gala vinh danh những cá nhân và đội nhóm xuất sắc trong năm qua.",
    ],
    fallbackImages: [],
  },
  "xu-huong-ai-2026": {
    fallbackBody: [
      "Trí tuệ nhân tạo tiếp tục là xu hướng công nghệ hàng đầu trong năm 2026, mở ra nhiều cơ hội cho doanh nghiệp chuyển đổi số. Từ AI Agent đến Generative AI, các ứng dụng thực tiễn ngày càng phong phú và dễ tiếp cận hơn.",
      "Một số xu hướng AI nổi bật trong năm 2026: AI Agent tự động hóa quy trình kinh doanh, AI tích hợp vào bảo mật (AI-Powered Security), Edge AI cho các ứng dụng thời gian thực, AI Governance và đạo đức AI.",
      "DTG đang tích cực phát triển và triển khai các giải pháp AI cho doanh nghiệp Việt Nam, bao gồm Dsoha AI, AI Agent, AI Kiosk và nhiều sản phẩm khác.",
    ],
    fallbackImages: [],
  },
  "zero-trust-bao-mat-hien-dai": {
    fallbackBody: [
      "Mô hình Zero Trust đang trở thành tiêu chuẩn mới trong bảo mật doanh nghiệp, thay thế các phương pháp truyền thống dựa trên \"tin tưởng nhưng xác minh\" bằng nguyên tắc \"không bao giờ tin tưởng, luôn xác minh\".",
      "Zero Trust không chỉ là một sản phẩm mà là một chiến lược bảo mật toàn diện, bao gồm: Xác thực đa yếu tố (MFA) cho mọi truy cập, Phân đoạn mạng (Micro-segmentation), Giám sát liên tục và phân tích hành vi, Nguyên tắc quyền truy cập tối thiểu (Least Privilege).",
      "DTG cung cấp dịch vụ tư vấn và triển khai mô hình Zero Trust cho doanh nghiệp, giúp nâng cao khả năng phòng thủ trước các mối đe dọa ngày càng tinh vi.",
    ],
    fallbackImages: [],
  },
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
    if (data?.title) {
      const detail = tinTucFallbackDetails[data.slug];
      return {
        ...data,
        fallbackBody: data.body?.length ? [] : (detail?.fallbackBody || []),
        fallbackImages: data.body?.length ? [] : (detail?.fallbackImages || []),
      };
    }
  } catch {}

  // Fallback
  const all = Object.values(tinTucFallbackArticles).flat();
  const found = all.find((a) => a.slug === slug);
  if (found) {
    const detail = tinTucFallbackDetails[slug];
    return {
      ...found,
      body: [],
      fallbackBody: detail?.fallbackBody || [],
      fallbackImages: detail?.fallbackImages || [],
    };
  }
  return null;
}

/* ── Về chúng tôi (Trang) ── */

export interface VisionCard { title: string; description: string; imageUrl?: string; }
export interface HistoryMilestone { month: string; content: string; }
export interface HistoryYear { year: string; imageUrl?: string; milestones: HistoryMilestone[]; }
export interface Leader { name: string; role: string; photoUrl?: string; }
export interface Certificate { year: string; title: string; }

export interface VeChungToiPageData {
  brandStoryTitle: string;
  brandStoryContent: string;
  slogan: string;
  learnMoreLabel: string;
  learnMoreHref: string;
  visionCards: VisionCard[];
  historyTitle: string;
  historyYears: HistoryYear[];
  leadershipTitle: string;
  leaders: Leader[];
  cultureTitle: string;
  coreValuesTitle: string;
  coreValues: string[];
  companyCultureTitle: string;
  companyCultureItems: string[];
  certificatesTitle: string;
  certificates: Certificate[];
  galleryImages?: string[];
  coreValueIcons?: { icon: string; title: string; desc: string }[];
}

const VE_CHUNG_TOI_PAGE_QUERY = `*[_type == "veChungToiPage" && language == $lang][0]{
  brandStoryTitle, brandStoryContent, slogan, learnMoreLabel, learnMoreHref,
  visionCards[]{ title, description, "imageUrl": image.asset->url },
  historyTitle, historyYears[]{ year, "imageUrl": image.asset->url, milestones[]{ month, content } },
  leadershipTitle, leaders[]{ name, role, "photoUrl": photo.asset->url },
  cultureTitle, coreValuesTitle, coreValues, companyCultureTitle, companyCultureItems,
  "galleryImages": galleryImages[].asset->url
}`;

const veChungToiFallback: Record<string, VeChungToiPageData> = {
  vi: {
    brandStoryTitle: "CÂU CHUYỆN THƯƠNG HIỆU",
    brandStoryContent: "Tại DTG CORP, chúng tôi không chỉ nhìn nhận công nghệ như một công cụ, mà là nền tảng cốt yếu để doanh nghiệp bứt phá. Giữa làn sóng chuyển đổi số mạnh mẽ, DTG Tiền thân của Công Ty Cổ Phần Công Nghệ DTG (DTG CORP) là của hàng kinh doanh sản phẩm Công Nghệ Thông Tin (CNTT) Tracinet Computer do Ông Trần Quốc Hoàn - Chủ Tịch Hội Đồng Quản Trị kiêm Tổng Giám Đốc sáng lập năm 2000. Năm 2007, đổi tên thành Công Ty Thương Mại Đại Trần Gia. Năm 2007, và sự phát triển vượt bậc công ty đã chính thức đổi tên thành Công ty CP Công nghệ DTG (DTG).\n\nChúng tôi tin rằng công nghệ phải phục vụ con người và mang lại hiệu quả thực tế, minh bạch, an toàn và bền vững. Đó là kim chỉ nam cho mọi sản phẩm và dịch vụ mang thương hiệu DTG.",
    slogan: "VỮNG MÃI MỘT NIỀM TIN",
    learnMoreLabel: "Tìm hiểu thêm",
    learnMoreHref: "/ve-chung-toi",
    visionCards: [
      { title: "TẦM NHÌN", description: "Trở thành Tập đoàn kinh doanh với 4 trụ cột chiến lược là Công Nghệ Thông Tin, Thiết bị điện, Thiết bị Led cao cấp, Nhà hàng và giải trí." },
      { title: "SỨ MỆNH", description: "Cung cấp mọi yêu cầu của Khách Hàng, nhằm đem lại lợi ích tốt nhất cho sự phồn vinh của Khách Hàng, của Cổ Đông, của Nhân Viên và của Cộng Đồng." },
      { title: "PHƯƠNG CHÂM", description: "Luôn tiến về phía trước, dựa trên nền tảng CNTT không ngừng đổi mới." },
    ],
    historyTitle: "LỊCH SỬ HÌNH THÀNH VÀ PHÁT TRIỂN",
    historyYears: [
      { year: "2021", milestones: [
        { month: "Tháng 07", content: "DTG tổ chức hội thảo trực tuyến: \"Chuyển Đổi Số cùng DTG Corp với các giải pháp công nghệ từ Dell Technologies\"." },
        { month: "Tháng 04", content: "Chính thức đổi tên từ Công Ty Cổ Phần Công Nghệ Đại Trần Gia sang \"Công Ty Cổ Phần Công Nghệ DTG\"." },
        { month: "Tháng 03", content: "DTG tổ chức cuộc thi \"AI thông minh hơn phụ nữ DTG Corp\"." },
        { month: "Tháng 01", content: "DTG tổ chức hội thảo: \"Định hướng CBS và an toàn thông tin trong tổ chức CBS\"." },
      ]},
      { year: "2020", milestones: [
        { month: "Tháng 06", content: "DTG mở rộng văn phòng tại Đà Nẵng." },
      ]},
      { year: "2019", milestones: [
        { month: "Tháng 03", content: "DTG đạt chứng nhận đối tác Gold của Dell Technologies." },
      ]},
      { year: "2010", milestones: [
        { month: "", content: "Mở rộng sang lĩnh vực giải pháp hạ tầng CNTT cho doanh nghiệp." },
      ]},
      { year: "2007", milestones: [
        { month: "", content: "Đổi tên thành Công Ty Thương Mại Đại Trần Gia." },
      ]},
      { year: "2000", milestones: [
        { month: "", content: "Thành lập Tracinet Computer — tiền thân của DTG Corp." },
      ]},
    ],
    leadershipTitle: "BAN LÃNH ĐẠO",
    leaders: [
      { name: "Trần Quốc Hoàn", role: "Chủ tịch Hội đồng Quản trị — Tổng Giám đốc" },
      { name: "Trần Lê Khải", role: "Thành viên HĐQT — Phó Tổng Giám đốc Quản lý nội bộ" },
      { name: "Trần Thị Hoài Hương", role: "Phó Tổng Giám đốc Tài chính — Văn phòng" },
      { name: "Huỳnh Đình Tú", role: "Thành viên HĐQT — Phó Tổng Giám đốc Thị trường" },
      { name: "Nguyễn Thị Liên", role: "Thành viên HĐQT — Phó Tổng Giám đốc Kinh doanh" },
    ],
    cultureTitle: "VĂN HÓA DTG",
    coreValuesTitle: "GIÁ TRỊ CỐT LÕI",
    coreValues: [
      "DTG là một gia đình lớn, và hồ thu nhỏ của những con người trẻ tuổi, nhiệt huyết, năng động, giàu ý thức, đoàn kết, sáng tạo, cùng chung một mục tiêu và vì phần đâu không ngừng nghỉ cho sự phát triển thịnh vượng, bền vững của Công Ty DTG.",
      "Đối với DTG, mỗi cá nhân là một bộ phận không thể tách rời ra khỏi tất cả con người, cùng nỗ lực không ngừng tạo lên sự phát triển bền vững cho Công Ty.",
      "DTG được đáp ứng đầy đủ các chính sách phúc lợi theo luật pháp, đào tạo lâu dài, và sự minh bạch rõ ràng.",
      "Chúng tôi là một tập thể giàu truyền thống văn hóa, tinh thần doanh nghiệp mạnh mẽ, cùng nhau gắn kết, gìn giữ và phát triển các giá trị truyền thống tươi sáng mãi với thời gian.",
    ],
    companyCultureTitle: "VĂN HÓA CÔNG TY",
    companyCultureItems: [
      "Ngày Hội Kỷ Niệm Ngày Thành Lập Công Ty 12 tháng 5",
      "13 cuộc Sinh Nhật Tập Thể theo công Quý",
      "Tham gia các đội bóng Nội bộ",
      "DTG bình chọn Cá Nhân xuất sắc",
    ],
    certificatesTitle: "CHỨNG NHẬN NỔI BẬT",
    certificates: [
      { year: "2021", title: "Chứng nhận Đối tác Silver của Aruba 2021" },
      { year: "2021", title: "Chứng nhận Đối tác Gold của Dell Technologies 2021-2022" },
      { year: "2021", title: "Chứng nhận Đối tác Silver của HPE 2021" },
    ],
  },
  en: {
    brandStoryTitle: "BRAND STORY",
    brandStoryContent: "At DTG CORP, we do not merely see technology as a tool, but as a vital foundation for business breakthroughs.\n\nWe believe technology must serve people and deliver practical, transparent, safe, and sustainable results.",
    slogan: "STEADFAST IN TRUST",
    learnMoreLabel: "Learn more",
    learnMoreHref: "/ve-chung-toi",
    visionCards: [
      { title: "VISION", description: "To become a conglomerate with 4 strategic pillars: IT, Electrical equipment, Premium LED, Restaurant & Entertainment." },
      { title: "MISSION", description: "To fulfill every customer need, bringing the best benefits for the prosperity of Customers, Shareholders, Employees, and the Community." },
      { title: "MOTTO", description: "Always moving forward, built on a constantly innovative IT foundation." },
    ],
    historyTitle: "HISTORY & DEVELOPMENT",
    historyYears: [
      { year: "2021", milestones: [
        { month: "Jul", content: "DTG held online seminar on Digital Transformation with Dell Technologies." },
        { month: "Apr", content: "Officially renamed to DTG Technology Joint Stock Company." },
        { month: "Jan", content: "DTG held seminar on CBS orientation and information security." },
      ]},
      { year: "2007", milestones: [
        { month: "", content: "Renamed to Dai Tran Gia Trading Company." },
      ]},
      { year: "2000", milestones: [
        { month: "", content: "Founded Tracinet Computer — predecessor of DTG Corp." },
      ]},
    ],
    leadershipTitle: "LEADERSHIP",
    leaders: [
      { name: "Tran Quoc Hoan", role: "Chairman & CEO" },
      { name: "Tran Le Khai", role: "Board Member — Deputy CEO, Internal Management" },
      { name: "Tran Thi Hoai Huong", role: "Deputy CEO, Finance & Administration" },
      { name: "Huynh Dinh Tu", role: "Board Member — Deputy CEO, Market Development" },
      { name: "Nguyen Thi Lien", role: "Board Member — Deputy CEO, Business" },
    ],
    cultureTitle: "DTG CULTURE",
    coreValuesTitle: "CORE VALUES",
    coreValues: [
      "DTG is a big family of young, enthusiastic, dynamic people united by a shared goal.",
      "Each individual is an inseparable part of the whole, working together for sustainable growth.",
      "DTG provides comprehensive welfare policies, long-term training, and transparency.",
      "We are a collective rich in cultural tradition and strong entrepreneurial spirit.",
    ],
    companyCultureTitle: "COMPANY CULTURE",
    companyCultureItems: [
      "Annual Founding Anniversary — May 12th",
      "13 quarterly group birthday celebrations",
      "Internal sports teams",
      "DTG Outstanding Individual Awards",
    ],
    certificatesTitle: "NOTABLE CERTIFICATIONS",
    certificates: [
      { year: "2021", title: "Aruba Silver Partner 2021" },
      { year: "2021", title: "Dell Technologies Gold Partner 2021-2022" },
      { year: "2021", title: "HPE Silver Partner 2021" },
    ],
  },
};

export async function getVeChungToiPageData(
  lang: string
): Promise<VeChungToiPageData> {
  const fb = veChungToiFallback[lang] || veChungToiFallback.vi;
  try {
    const data = await client.fetch<VeChungToiPageData | null>(
      VE_CHUNG_TOI_PAGE_QUERY,
      { lang }
    );
    if (data?.brandStoryTitle) {
      return {
        ...fb,
        ...data,
        visionCards: data.visionCards ?? fb.visionCards,
        historyYears: data.historyYears ?? fb.historyYears,
        leaders: data.leaders ?? fb.leaders,
        coreValues: data.coreValues ?? fb.coreValues,
        companyCultureItems: data.companyCultureItems ?? fb.companyCultureItems,
      };
    }
  } catch {}
  return fb;
}

/* ── Solution Category Page (card bg + goals) ── */

export interface SolutionCategoryPageGoal {
  title: string;
  description: string;
  imageUrl: string | null;
}

export interface SolutionCategoryPageData {
  cardBgImageUrl: string | null;
  goals: SolutionCategoryPageGoal[];
}

const SOLUTION_CATEGORY_PAGE_QUERY = `*[_type == "solutionCategoryPage" && language == $lang && categorySlug == $slug][0]{
  "cardBgImageUrl": cardBgImage.asset->url,
  goals[]{ title, description, "imageUrl": image.asset->url }
}`;

export async function getSolutionCategoryPageData(
  lang: string,
  slug: string
): Promise<SolutionCategoryPageData> {
  try {
    const data = await client.fetch<SolutionCategoryPageData | null>(
      SOLUTION_CATEGORY_PAGE_QUERY,
      { lang, slug }
    );
    if (data) {
      return {
        cardBgImageUrl: data.cardBgImageUrl || null,
        goals: data.goals || [],
      };
    }
  } catch {}
  return { cardBgImageUrl: null, goals: [] };
}

/* ── Bài viết Giải pháp ── */

export interface SolutionArticleItem {
  slug: string;
  title: string;
  excerpt: string;
  solutionCategory: string;
  publishedAt: string;
  thumbnailUrl: string | null;
}

export interface SolutionArticleDetail extends SolutionArticleItem {
  body: unknown[];
  fallbackBody?: string[];
}

const SOLUTION_ARTICLES_QUERY = `*[_type == "baiVietGiaiPhap" && language == $lang && solutionCategory == $solutionCategory] | order(publishedAt desc) {
  "slug": slug.current,
  title,
  excerpt,
  solutionCategory,
  publishedAt,
  "thumbnailUrl": thumbnail.asset->url
}`;

const SOLUTION_ARTICLE_DETAIL_QUERY = `*[_type == "baiVietGiaiPhap" && language == $lang && slug.current == $slug][0]{
  "slug": slug.current,
  title,
  excerpt,
  solutionCategory,
  publishedAt,
  "thumbnailUrl": thumbnail.asset->url,
  body
}`;

export async function getSolutionArticles(
  lang: string,
  solutionCategory: string
): Promise<SolutionArticleItem[]> {
  try {
    const data = await client.fetch<SolutionArticleItem[]>(SOLUTION_ARTICLES_QUERY, {
      lang,
      solutionCategory,
    });
    if (data?.length) return data;
  } catch {}

  // Fallback
  const { solutionArticlesFallback } = await import("@/data/solution-articles");
  return solutionArticlesFallback[solutionCategory] || [];
}

export async function getSolutionArticleDetail(
  lang: string,
  slug: string
): Promise<SolutionArticleDetail | null> {
  try {
    const data = await client.fetch<SolutionArticleDetail | null>(
      SOLUTION_ARTICLE_DETAIL_QUERY,
      { lang, slug }
    );
    if (data?.title) {
      const { solutionArticleDetailsFallback } = await import("@/data/solution-articles");
      const detail = solutionArticleDetailsFallback[data.slug];
      return {
        ...data,
        fallbackBody: data.body?.length ? [] : (detail?.fallbackBody || []),
      };
    }
  } catch {}

  // Fallback
  const { solutionArticlesFallback, solutionArticleDetailsFallback } = await import("@/data/solution-articles");
  const all = Object.values(solutionArticlesFallback).flat();
  const found = all.find((a) => a.slug === slug);
  if (found) {
    const detail = solutionArticleDetailsFallback[slug];
    return {
      ...found,
      body: [],
      fallbackBody: detail?.fallbackBody || [],
    };
  }

  // Also check an-ninh-mang / ai slugs (direct detail)
  const detail = solutionArticleDetailsFallback[slug];
  if (detail) {
    return {
      slug,
      title: "",
      excerpt: "",
      solutionCategory: slug,
      publishedAt: new Date().toISOString(),
      thumbnailUrl: null,
      body: [],
      fallbackBody: detail.fallbackBody,
    };
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
  companyName: string;
  phoneLabel: string;
  ctaTitle: string;
  ctaButtonLabel: string;
  hotline: string;
  email: string;
  socialLinks: SocialLink[];
  offices: Office[];
  companyProfileUrl?: string;
}

const FOOTER_QUERY = `*[_type == "footer" && language == $lang][0]{
  companyName,
  phoneLabel,
  ctaTitle,
  ctaButtonLabel,
  hotline,
  email,
  socialLinks[]{ platform, url },
  offices[]{ name, address, phone, fax },
  "companyProfileUrl": companyProfile.asset->url
}`;

const footerFallback: Record<string, FooterData> = {
  vi: {
    companyName: "CÔNG TY CỔ PHẦN CÔNG NGHỆ DTG",
    phoneLabel: "Điện thoại",
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
    companyName: "Service Support Center",
    phoneLabel: "Tel",
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

/* ── Thông báo sử dụng dữ liệu ── */

export interface ThongBaoDuLieuData {
  heroTitle: string;
  formSectionTitle: string;
  nameLabel: string;
  phoneLabel: string;
  emailLabel: string;
  positionLabel: string;
  positions: string[];
  contentTitle: string;
  body: unknown[];
  fallbackBody?: string[];
  consentLabel: string;
  submitLabel: string;
}

const THONG_BAO_DU_LIEU_QUERY = `*[_type == "thongBaoDuLieu" && language == $lang][0]{
  heroTitle, formSectionTitle, nameLabel, phoneLabel, emailLabel, positionLabel, positions,
  contentTitle, body, consentLabel, submitLabel
}`;

const thongBaoDuLieuFallback: Record<string, ThongBaoDuLieuData> = {
  vi: {
    heroTitle: "Thông báo và đồng ý về\nviệc xử lý dữ liệu cá nhân",
    formSectionTitle: "THÔNG TIN CÁ NHÂN",
    nameLabel: "HỌ VÀ TÊN",
    phoneLabel: "SỐ ĐIỆN THOẠI",
    emailLabel: "EMAIL",
    positionLabel: "VỊ TRÍ ỨNG TUYỂN",
    positions: ["Chọn vị trí", "Nhân viên kinh doanh", "Kỹ sư hệ thống", "Chuyên viên bảo mật", "Nhân viên kế toán", "Khác"],
    contentTitle: "NỘI DUNG",
    body: [],
    fallbackBody: [
      'Bằng việc tích vào ô "Đồng ý", Tôi xác nhận đã đọc, hiểu và đồng ý với những điều kiện và điều khoản về hoạt động xử lý Dữ liệu cá nhân của Công ty Cổ phần Công nghệ Truyền thông DTS và Công ty TNHH MetaServ (METASERV) là công ty thành viên do DTS sở hữu 100% vốn) - sau đây gọi chung là "Công ty" - cụ thể như sau.',
      '1. Định nghĩa:\n1.1. Dữ liệu cá nhân là dữ liệu số hoặc thông tin dưới dạng khác xác định hoặc giúp xác định một con người cụ thể, bao gồm: dữ liệu cá nhân cơ bản và dữ liệu cá nhân nhạy cảm. Dữ liệu cá nhân sau khi khử nhận dạng không còn là dữ liệu cá nhân.\n1.2. Mối quan hệ của Tôi và Công ty trong quá trình xử lý Dữ liệu cá nhân của Tôi như sau:\n- Tôi là Chủ thể dữ liệu\n- Công ty là Bên kiểm soát dữ liệu hoặc Bên kiểm soát và xử lý dữ liệu cá nhân của Tôi\n- Bên được Công ty ủy quyền tiến hành xử lý những dữ liệu cá nhân do Tôi cung cấp sẽ là Bên xử lý dữ liệu\n1.3. Xử lý Dữ liệu cá nhân là hoạt động tác động đến Dữ liệu cá nhân, bao gồm một hoặc nhiều hoạt động như sau: thu thập, phân tích, tổng hợp, mã hóa, giải mã, chỉnh sửa, xóa, hủy, khử nhận dạng, cung cấp, công khai, chuyển giao Dữ liệu cá nhân và hoạt động khác tác động đến Dữ liệu cá nhân.\n1.4. Quan hệ tuyển dụng: là quan hệ phát sinh giữa Công ty và cá nhân ứng tuyển trong quá trình Công ty tiếp nhận, xem xét, đánh giá hồ sơ, phỏng vấn, kiểm tra, xác minh thông tin, thương lượng điều kiện làm việc và quyết định tuyển dụng hoặc không tuyển dụng, bao gồm cả các hoạt động chuẩn bị cho việc giao kết hợp đồng lao động.',
      '2. Phạm vi Dữ liệu cá nhân được xử lý:\nTrong quá trình thực hiện quy trình tuyển dụng, Công ty có thể thu thập, lưu trữ, sử dụng và xử lý Dữ liệu cá nhân của Tôi theo quy định pháp luật, theo đó:\n2.1. Dữ liệu cá nhân cơ bản bao gồm: Họ, chữ đệm và tên khai sinh, tên gọi khác (nếu có); Ngày, tháng, năm sinh; Giới tính; Nơi sinh, nơi đăng ký khai sinh, nơi đăng ký thường trú, nơi ở hiện tại, quê quán, địa chỉ liên hệ; Quốc tịch; Hình ảnh của cá nhân; Số điện thoại, số định danh cá nhân, số hộ chiếu, số giấy phép lái xe; Tình trạng hôn nhân; Thông tin về mối quan hệ gia đình; Thông tin về tài khoản số của cá nhân.\n2.2. Dữ liệu cá nhân nhạy cảm bao gồm: Dữ liệu tiết lộ nguồn gốc chủng tộc, nguồn gốc dân tộc; Quan điểm về chính trị, tôn giáo, tín ngưỡng; Tình trạng sức khỏe; Dữ liệu sinh trắc học, đặc điểm di truyền; Dữ liệu về tội phạm, vi phạm pháp luật; Hình ảnh thẻ căn cước, chứng minh nhân dân.',
      '3. Mục đích xử lý Dữ liệu cá nhân:\nCông ty sẽ tự mình hoặc thông qua Bên xử lý dữ liệu để xử lý dữ liệu cá nhân của Tôi nhằm các mục đích:\n● (Bắt buộc) Tuyển dụng: Xác nhận, xác thực thông tin và đánh giá năng lực của Tôi trong suốt quy trình tuyển dụng tại Công ty;\n● (Bắt buộc) Quản trị nội bộ: Thực hiện các hoạt động quản lý lao động, hành chính, kế toán, tài chính, an ninh - an toàn hệ thống;\n● (Bắt buộc) Thiết lập hồ sơ nhân sự: Sử dụng làm thông tin đầu vào để soạn thảo các văn bản và hồ sơ liên quan khi Tôi được tuyển dụng;\n● (Tùy chọn) Lưu trữ thông tin để xem xét và liên hệ cho các vị trí công việc phù hợp trong tương lai.',
      '4. Cách thức xử lý Dữ liệu cá nhân:\nCông ty thực hiện việc xử lý Dữ liệu cá nhân thông qua một hoặc nhiều hoạt động: thu thập, phân tích, tổng hợp, mã hóa, giải mã, chỉnh sửa, xóa, hủy, khử nhận dạng, cung cấp, công khai, và hoạt động khác. Đối với Dữ liệu cá nhân nhạy cảm, Công ty áp dụng các biện pháp bảo vệ bao gồm: chỉ nhân sự có thẩm quyền mới được tiếp cận; áp dụng các biện pháp lưu trữ riêng biệt; thực hiện theo quy trình bảo mật nội bộ.',
      '5. Chuyển giao Dữ liệu cá nhân:\nCông ty có thể chuyển giao Dữ liệu cá nhân của Tôi với các bên thứ ba trong phạm vi cần thiết, bao gồm: các công ty thành viên, công ty mẹ, công ty liên kết, các cá nhân/tổ chức đóng vai trò tư vấn quá trình tuyển dụng; Bên xử lý dữ liệu được Công ty ủy quyền.',
      '6. Quyền và nghĩa vụ của Chủ thể dữ liệu:\n6.1. Quyền: Xem hoặc yêu cầu chỉnh sửa Dữ liệu cá nhân; Đồng ý hoặc không đồng ý, yêu cầu rút lại sự đồng ý; Yêu cầu cung cấp, xóa, hạn chế xử lý Dữ liệu cá nhân.\n6.2. Nghĩa vụ: Tự bảo vệ dữ liệu cá nhân của mình; Tôn trọng, bảo vệ dữ liệu cá nhân của người khác; Cung cấp đầy đủ, chính xác dữ liệu cá nhân; Chấp hành pháp luật về bảo vệ dữ liệu cá nhân.',
      '7. Lưu trữ Dữ liệu cá nhân:\nDữ liệu cá nhân của Tôi sẽ được lưu trữ kể từ thời điểm Tôi đồng ý cho đến khi hết 05 năm hoặc khi tôi yêu cầu xóa. Trường hợp Tôi trúng tuyển và trở thành người lao động, dữ liệu này sẽ được chuyển giao và lưu trữ theo chế độ của quan hệ lao động.',
      '8. Kiểm tra tham chiếu:\nCông ty có thể tự mình tiến hành kiểm tra lý lịch hoặc thông qua bên thứ ba. Việc kiểm tra tham chiếu sẽ chỉ liên quan đến thông tin về quá trình làm việc trước đó hoặc phạm vi khác được pháp luật cho phép.',
      '9. Rút lại sự đồng ý:\nTôi có quyền rút lại việc đồng ý bằng cách gửi yêu cầu bằng văn bản trực tiếp hoặc thư điện tử đến:\n- Bộ phận Bảo vệ dữ liệu cá nhân - Công ty Cổ phần Công nghệ Truyền thông DTS\n- Địa chỉ: Số 287B Điện Biên Phủ, Phường Xuân Hòa, TP. Hồ Chí Minh, Việt Nam\n- Email: bvdlcn@dts.com.vn\nCông ty sẽ xử lý yêu cầu trong vòng 02 ngày làm việc.',
      '10. Các rủi ro và biện pháp an toàn:\nTôi hiểu rằng trong trường hợp xảy ra sự cố an ninh thông tin hoặc các sự kiện bất khả kháng, dữ liệu cá nhân có thể bị truy cập trái phép. Công ty đã và đang áp dụng các biện pháp kỹ thuật, quản lý và tổ chức phù hợp để bảo vệ dữ liệu.',
      '11. Xác nhận đồng ý:\nBằng việc tích chọn vào ô "Đồng ý", Tôi xác nhận rằng: (i) Tôi đã đọc, hiểu rõ toàn bộ nội dung; (ii) Tôi đồng ý cho phép Công ty xử lý dữ liệu cá nhân theo đúng phạm vi, mục đích, thời hạn đã quy định; (iii) Nội dung có hiệu lực ngay tại thời điểm Tôi xác nhận đồng ý.',
    ],
    consentLabel: "Tôi đã đọc, hiểu và đồng ý với các nội dung tại Thông báo và đồng ý xử lý dữ liệu cá nhân của Công ty. Tôi hiểu rằng việc đồng ý này là điều kiện cần thiết để thực hiện quy trình tuyển dụng.",
    submitLabel: "XÁC NHẬN",
  },
  en: {
    heroTitle: "Notice and consent on\npersonal data processing",
    formSectionTitle: "PERSONAL INFORMATION",
    nameLabel: "FULL NAME",
    phoneLabel: "PHONE NUMBER",
    emailLabel: "EMAIL",
    positionLabel: "POSITION",
    positions: ["Select position", "Sales Executive", "System Engineer", "Security Specialist", "Accountant", "Other"],
    contentTitle: "CONTENT",
    body: [],
    fallbackBody: [
      'By checking the "Agree" box, I confirm that I have read, understood and agreed to the terms and conditions regarding the personal data processing activities of DTS Communications Technology Joint Stock Company and MetaServ Co., Ltd (METASERV), a subsidiary wholly owned by DTS – hereinafter collectively referred to as "the Company" – specifically as follows.',
    ],
    consentLabel: "I have read, understood and agreed to the terms of personal data processing stated above.",
    submitLabel: "Confirm & Agree",
  },
};

export async function getThongBaoDuLieuData(lang: string): Promise<ThongBaoDuLieuData> {
  const fb = thongBaoDuLieuFallback[lang] || thongBaoDuLieuFallback.vi;
  try {
    const data = await client.fetch<ThongBaoDuLieuData | null>(THONG_BAO_DU_LIEU_QUERY, { lang });
    if (data?.heroTitle) {
      return {
        ...fb,
        ...data,
        positions: data.positions ?? fb.positions,
        fallbackBody: data.body?.length ? [] : fb.fallbackBody,
      };
    }
  } catch {}
  return fb;
}
