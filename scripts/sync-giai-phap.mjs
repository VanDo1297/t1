import { createClient } from "@sanity/client";
import { randomUUID } from "crypto";

const client = createClient({
  projectId: "036on1ws",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

const k = () => randomUUID().replace(/-/g, "").slice(0, 12);

const viTabs = [
  {
    _key: "t1",
    label: "Bảo mật mạng hỗ trợ bởi AI",
    title: "Bảo mật mạng hỗ trợ bởi AI",
    description: "Bảo vệ mọi người và mọi thứ khỏi các mối đe dọa mới nhất ở mọi địa điểm. Được xây dựng cho Zero Trust và hỗ trợ bởi AI, nền tảng Strata™ Network Security chủ động giám sát, phân tích và ngăn chặn các mối đe dọa tinh vi trong thời gian thực với độ phức tạp thấp hơn, cho phép tăng trưởng và đổi mới an toàn cho tổ chức của bạn.",
    ctaLabel: "Khám phá Bảo mật mạng",
    ctaHref: "/giai-phap-dich-vu/an-ninh-mang",
    stats: [
      { _key: k(), value: "95%", label: "TRONG FORTUNE 100" },
      { _key: k(), value: "70 K", label: "KHÁCH HÀNG" },
    ],
    awards: [
      { _key: k(), source: "Gartner", title: "2025 Gartner® Magic Quadrant™ for Hybrid Mesh Firewall" },
      { _key: k(), source: "Gartner", title: "2025 Gartner® Magic Quadrant™ for SASE Platforms" },
      { _key: k(), source: "Forrester", title: "The Forrester Wave™ Enterprise Firewall Solutions" },
      { _key: k(), source: "Gartner", title: "Gartner® Magic Quadrant™ for Single-Vendor SASE" },
      { _key: k(), source: "Gartner", title: "Gartner® Magic Quadrant™ for Network Firewalls" },
      { _key: k(), source: "Gartner", title: "Gartner® Magic Quadrant™ for SD-WAN" },
    ],
  },
  {
    _key: "t2",
    label: "Vận hành bảo mật hỗ trợ bởi AI",
    title: "Vận hành bảo mật hỗ trợ bởi AI",
    description: "Tăng tốc phát hiện và phản hồi mối đe dọa với nền tảng SOC hiện đại. Cortex XSIAM™ tích hợp AI tiên tiến để tự động phân tích, ưu tiên và xử lý sự cố bảo mật, giảm thời gian phản hồi từ hàng giờ xuống vài phút, đồng thời giảm tải cho đội ngũ bảo mật với khả năng tự động hóa toàn diện.",
    ctaLabel: "Khám phá Vận hành bảo mật",
    ctaHref: "/giai-phap-dich-vu/an-ninh-mang",
    stats: [
      { _key: k(), value: "8x", label: "PHÁT HIỆN NHANH HƠN" },
      { _key: k(), value: "98%", label: "ĐỘ CHÍNH XÁC" },
    ],
    awards: [
      { _key: k(), source: "Gartner", title: "Gartner® Magic Quadrant™ for SIEM" },
      { _key: k(), source: "Forrester", title: "The Forrester Wave™ XDR Platforms" },
      { _key: k(), source: "Gartner", title: "Gartner® Magic Quadrant™ for Endpoint Protection" },
      { _key: k(), source: "IDC", title: "IDC MarketScape for SOAR" },
      { _key: k(), source: "Gartner", title: "Gartner® Magic Quadrant™ for MDR Services" },
      { _key: k(), source: "Forrester", title: "The Forrester Wave™ Security Analytics Platforms" },
    ],
  },
  {
    _key: k(),
    label: "Bảo mật đám mây thời gian thực",
    title: "Bảo mật đám mây thời gian thực",
    description: "Bảo vệ toàn diện ứng dụng đám mây, dữ liệu và hạ tầng với nền tảng Prisma Cloud™. Giám sát liên tục, phát hiện cấu hình sai và lỗ hổng bảo mật trên đa nền tảng cloud, kết hợp phản hồi tự động để đảm bảo tuân thủ và bảo mật xuyên suốt vòng đời phát triển ứng dụng.",
    ctaLabel: "Khám phá Bảo mật đám mây",
    ctaHref: "/giai-phap-dich-vu/dam-may",
    stats: [
      { _key: k(), value: "100%", label: "KHẢ NĂNG HIỂN THỊ" },
      { _key: k(), value: "3M+", label: "TÀI SẢN ĐƯỢC BẢO VỆ" },
    ],
    awards: [
      { _key: k(), source: "Gartner", title: "Gartner® Magic Quadrant™ for CNAPP" },
      { _key: k(), source: "Forrester", title: "The Forrester Wave™ Cloud Security" },
      { _key: k(), source: "Gartner", title: "Gartner® Magic Quadrant™ for Cloud Infrastructure" },
      { _key: k(), source: "IDC", title: "IDC MarketScape for CSPM" },
      { _key: k(), source: "Gartner", title: "Gartner® Magic Quadrant™ for CWP" },
      { _key: k(), source: "Forrester", title: "The Forrester Wave™ Container Security" },
    ],
  },
];

const enTabs = [
  {
    _key: "t1",
    label: "AI-Powered Network Security",
    title: "AI-Powered Network Security",
    description: "Protect everyone and everything from the latest threats at every location. Built for Zero Trust and powered by AI, the Strata™ Network Security platform proactively monitors, analyzes and prevents sophisticated threats in real time with less complexity, enabling safe growth and innovation for your organization.",
    ctaLabel: "Explore Network Security",
    ctaHref: "/solutions/cybersecurity",
    stats: [
      { _key: k(), value: "95%", label: "OF FORTUNE 100" },
      { _key: k(), value: "70 K", label: "CUSTOMERS" },
    ],
    awards: [
      { _key: k(), source: "Gartner", title: "2025 Gartner® Magic Quadrant™ for Hybrid Mesh Firewall" },
      { _key: k(), source: "Gartner", title: "2025 Gartner® Magic Quadrant™ for SASE Platforms" },
      { _key: k(), source: "Forrester", title: "The Forrester Wave™ Enterprise Firewall Solutions" },
      { _key: k(), source: "Gartner", title: "Gartner® Magic Quadrant™ for Single-Vendor SASE" },
      { _key: k(), source: "Gartner", title: "Gartner® Magic Quadrant™ for Network Firewalls" },
      { _key: k(), source: "Gartner", title: "Gartner® Magic Quadrant™ for SD-WAN" },
    ],
  },
  {
    _key: "t2",
    label: "AI-Powered Security Operations",
    title: "AI-Powered Security Operations",
    description: "Accelerate threat detection and response with a modern SOC platform. Cortex XSIAM™ integrates advanced AI to automatically analyze, prioritize and remediate security incidents, reducing response time from hours to minutes while relieving security teams with comprehensive automation.",
    ctaLabel: "Explore Security Operations",
    ctaHref: "/solutions/cybersecurity",
    stats: [
      { _key: k(), value: "8x", label: "FASTER DETECTION" },
      { _key: k(), value: "98%", label: "ACCURACY" },
    ],
    awards: [
      { _key: k(), source: "Gartner", title: "Gartner® Magic Quadrant™ for SIEM" },
      { _key: k(), source: "Forrester", title: "The Forrester Wave™ XDR Platforms" },
      { _key: k(), source: "Gartner", title: "Gartner® Magic Quadrant™ for Endpoint Protection" },
      { _key: k(), source: "IDC", title: "IDC MarketScape for SOAR" },
      { _key: k(), source: "Gartner", title: "Gartner® Magic Quadrant™ for MDR Services" },
      { _key: k(), source: "Forrester", title: "The Forrester Wave™ Security Analytics Platforms" },
    ],
  },
  {
    _key: k(),
    label: "Real-Time Cloud Security",
    title: "Real-Time Cloud Security",
    description: "Comprehensive protection for cloud applications, data and infrastructure with Prisma Cloud™. Continuous monitoring, misconfiguration and vulnerability detection across multi-cloud platforms, combined with automated response to ensure compliance and security throughout the application development lifecycle.",
    ctaLabel: "Explore Cloud Security",
    ctaHref: "/solutions/cloud",
    stats: [
      { _key: k(), value: "100%", label: "VISIBILITY" },
      { _key: k(), value: "3M+", label: "ASSETS PROTECTED" },
    ],
    awards: [
      { _key: k(), source: "Gartner", title: "Gartner® Magic Quadrant™ for CNAPP" },
      { _key: k(), source: "Forrester", title: "The Forrester Wave™ Cloud Security" },
      { _key: k(), source: "Gartner", title: "Gartner® Magic Quadrant™ for Cloud Infrastructure" },
      { _key: k(), source: "IDC", title: "IDC MarketScape for CSPM" },
      { _key: k(), source: "Gartner", title: "Gartner® Magic Quadrant™ for CWP" },
      { _key: k(), source: "Forrester", title: "The Forrester Wave™ Container Security" },
    ],
  },
];

async function run() {
  await client
    .patch("1u9iY0s9jtUgL018CSb2Gz")
    .set({ tabs: viTabs })
    .commit();
  console.log("VI: updated all 3 tabs");

  await client
    .patch("1u9iY0s9jtUgL018CSb2KD")
    .set({ tabs: enTabs })
    .commit();
  console.log("EN: updated all 3 tabs");
  console.log("Done!");
}

run().catch(console.error);
