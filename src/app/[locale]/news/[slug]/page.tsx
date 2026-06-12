import { notFound } from "next/navigation";
import { NEWS_ITEMS } from "@/lib/constants";
import { NewsDetailPage } from "./NewsDetailPage";

export function generateStaticParams() {
  return NEWS_ITEMS.map((item) => ({ slug: item.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const newsItem = NEWS_ITEMS.find((item) => item.slug === slug);
  if (!newsItem) notFound();

  return <NewsDetailPage slug={slug} tag={newsItem.tag} date={newsItem.date} image={newsItem.image} />;
}
