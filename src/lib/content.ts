import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

type Stat = { value: string; label: string; description: string };
type ContentCard = { title: string; description: string };
type NewsItem = { category: string; title: string };

export type HomeContent = {
  heroTitle: string;
  heroSubtitle: string;
  aboutTitle: string;
  aboutDescription: string;
  stats: Stat[];
  solutionsTitle: string;
  solutionsDescription: string;
  solutions: string[];
  servicesTitle: string;
  servicesDescription: string;
  services: ContentCard[];
  productsTitle: string;
  productsDescription: string;
  products: ContentCard[];
  partnerTitle: string;
  customerTitle: string;
  contactTitle: string;
  contactDescription: string;
  newsTitle: string;
  newsDescription: string;
  news: NewsItem[];
  body: string;
};

export function getHomeContent(): HomeContent {
  const file = fs.readFileSync(path.join(process.cwd(), "content/home.md"), "utf8");
  const { data, content } = matter(file);
  return { ...(data as Omit<HomeContent, "body">), body: content.trim() };
}

export type WhyChooseContent = {
  title: string;
  introTitle: string;
  introParagraphs: string[];
  workforceTitle: string;
  workforceDescription: string;
  contactTitle: string;
  contactDescription: string;
};

export function getWhyChooseContent(): WhyChooseContent {
  const file = fs.readFileSync(path.join(process.cwd(), "content/why-choose-svtech.md"), "utf8");
  const { data } = matter(file);
  return data as WhyChooseContent;
}

export type BrandStoryContent = {
  title: string;
  introParagraphs: string[];
  principles: ContentCard[];
  history: { year: string; title: string; description: string }[];
  leaders: { name: string; role: string }[];
  cultureValues: string[];
  cultureActivities: string[];
  certificates: { title: string; image: string }[];
};

export function getBrandStoryContent(): BrandStoryContent {
  const file = fs.readFileSync(path.join(process.cwd(), "content/brand-story.md"), "utf8");
  const { data } = matter(file);
  return data as BrandStoryContent;
}
