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
    <main className="pt-[80px]">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[300px] overflow-hidden">
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

        <div className="relative z-10 flex h-full flex-col justify-end pb-16 pl-8">
          <Link
            href={`/${locale}/tuyen-dung`}
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            ← {isVi ? "Tuyển dụng" : "Careers"}
          </Link>
          <h1 className="text-3xl font-bold italic text-white sm:text-4xl md:text-5xl">
            {isVi ? "Vị trí tuyển dụng" : "Job Opening"}
          </h1>
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
