import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

type Stat = { value: string; label: string; description: string };
type ContentCard = { title: string; description: string };
type NewsItem = { category: string; title: string; description: string; date: string; image: string };
type SolutionItem = { title: string; description: string };
type Solution = { title: string; tag: string; description: string; modules: SolutionItem[] };
type AssessmentOption = { title: string; description: string };
type AssessmentStep = { label: string; title: string; options: AssessmentOption[] };

export type HomeContent = {
  heroTitle: string;
  heroSubtitle: string;
  heroPrimaryButton: string;
  heroSecondaryButton: string;
  aboutTitle: string;
  aboutDescription: string;
  stats: Stat[];
  solutionsTitle: string;
  solutionsDescription: string;
  solutions: Solution[];
  servicesTitle: string;
  servicesDescription: string;
  services: ContentCard[];
  productsTitle: string;
  productsDescription: string;
  products: ContentCard[];
  partnerTitle: string;
  partnerNames: string[];
  customerTitle: string;
  customerNames: string[];
  assessmentTitle: string;
  assessmentDescription: string;
  assessmentSteps: AssessmentStep[];
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

export type ServicesContent = {
  title: string;
  subtitle: string;
  introTitle: string;
  introDescription: string;
  groups: {
    id: string;
    number: string;
    title: string;
    description: string;
    image: string;
    items: ContentCard[];
  }[];
  benefits: { number: string; title: string; description: string }[];
  contactTitle: string;
  contactDescription: string;
};

export function getServicesContent(): ServicesContent {
  const file = fs.readFileSync(path.join(process.cwd(), "content/services.md"), "utf8");
  const { data } = matter(file);
  return data as ServicesContent;
}
