import { notFound } from "next/navigation";
import { CORE_SERVICES } from "@/lib/constants";
import { SolutionDetailPage } from "./SolutionDetailPage";

export function generateStaticParams() {
  return CORE_SERVICES.map((s) => ({ slug: s.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const service = CORE_SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return <SolutionDetailPage serviceKey={service.key} slug={slug} />;
}
