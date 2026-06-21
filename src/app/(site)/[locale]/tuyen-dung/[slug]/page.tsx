import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTuyenDungData } from "@/sanity/queries";
import { JobDetailContent } from "@/components/sections/JobDetailContent";

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const data = await getTuyenDungData(locale);
  const job = data.jobs.find((j) => j.slug === slug);
  const isVi = locale === "vi";

  if (!job) notFound();

  return (
    <main className="job-detail-mobile pt-[80px]">
      {/* Hero */}
      <section className="site-hero site-hero--dark">
        <div className="absolute inset-0">
          <Image
            src="/assets/bg/2.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1a2d3d]/75" />
        </div>

        <div className="site-hero-content">
          <h1 className="site-hero-title">
            {job.title}
          </h1>
          <p className="site-hero-description">
            {job.location} · {isVi ? "Ngày hết hạn" : "Deadline"}: {job.deadline}
          </p>
        </div>
      </section>

      <JobDetailContent
        job={job}
        locale={locale}
        contactEmail={data.contactEmail}
        contactPhone={data.contactPhone}
      />
    </main>
  );
}
