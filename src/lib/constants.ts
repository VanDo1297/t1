export const HERO_VIDEO_URL =
  "https://homepage.dtgsoft.vn/api/v1/public/media/54cabb07-4d47-4c49-829f-1bd933ff5e29/file";

export const PROCESS_STEPS = [
  { step: 1, key: "survey" },
  { step: 2, key: "design" },
  { step: 3, key: "procurement" },
  { step: 4, key: "deployment" },
  { step: 5, key: "testing" },
  { step: 6, key: "maintenance" },
] as const;

export const PARTNER_LOGOS = [
  { name: "Dell Technologies", logo: "/assets/svtech/partners/Global1-2.png" },
  { name: "HPE", logo: "/assets/svtech/partners/Global2-2.png" },
  { name: "Cisco", logo: "/assets/svtech/partners/Net1-2.png" },
  { name: "IBM", logo: "/assets/svtech/partners/Net2-2.png" },
  { name: "Google", logo: "/assets/svtech/partners/AI2-2.png" },
  { name: "AI Partner", logo: "/assets/svtech/partners/AI3-3.png" },
  { name: "Security Partner 1", logo: "/assets/svtech/partners/Security2-2.png" },
  { name: "Security Partner 2", logo: "/assets/svtech/partners/Security3-2.png" },
] as const;

export const CLIENT_LOGOS = [
  { name: "Coteccons", logo: "/assets/svtech/clients/Coteccons-1.png" },
  { name: "First Solar", logo: "/assets/svtech/clients/First-Solar-1.png" },
  { name: "Home Credit", logo: "/assets/svtech/clients/Logo-Home-Credit.png" },
  { name: "Mega Market", logo: "/assets/svtech/clients/Logo-Mega-Market-1.webp" },
  { name: "Sacombank", logo: "/assets/svtech/clients/Logo-Sacombank-new-1.png" },
  { name: "Viettel", logo: "/assets/svtech/clients/Logo-Viettel-Vector-Moi-01-1-scaled.png" },
  { name: "Sun Group", logo: "/assets/svtech/clients/Sun-group-logo-1.png" },
  { name: "VNG", logo: "/assets/svtech/clients/VNG_Corp._logo.svg_-1.png" },
] as const;

export const NEWS_ITEMS = [
  {
    slug: "dtg-hop-tac-ha-tang-ai",
    image: "/assets/svtech/news/news-1.jpg",
    tag: "event",
    date: "2026-06-12",
  },
  {
    slug: "hybrid-cloud-architecture",
    image: "/assets/svtech/news/news-2.jpg",
    tag: "technology",
    date: "2026-06-10",
  },
  {
    slug: "dtg-certifications",
    image: "/assets/svtech/news/news-3.jpg",
    tag: "company",
    date: "2026-06-08",
  },
] as const;
