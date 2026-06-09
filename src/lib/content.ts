import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type HomeContent = {
  heroTitle: string; heroSubtitle: string; partnerTitle: string;
  serviceEyebrow: string; serviceTitle: string; serviceDescription: string;
  whyEyebrow: string; whyTitle: string; customerTitle: string;
  newsEyebrow: string; newsTitle: string; contactTitle: string;
  contactDescription: string; body: string;
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
