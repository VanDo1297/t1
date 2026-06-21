import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { solutionCategories } from "@/data/solutions";
import { getSolutionArticleDetail, urlFor } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";
import type { SanityImageSource } from "@sanity/image-url";

const portableTextComponents = {
  types: {
    image: ({
      value,
    }: {
      value: { asset: SanityImageSource; caption?: string };
    }) => {
      const url = urlFor(value.asset).width(900).url();
      return (
        <figure className="my-8">
          <div className="relative overflow-hidden rounded-xl">
            <img src={url} alt={value.caption || ""} className="w-full" />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center text-[13px] italic text-gray-400">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default async function SolutionArticleDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string; articleSlug: string }>;
}) {
  const { locale, slug, articleSlug } = await params;
  const article = await getSolutionArticleDetail(locale, articleSlug);

  if (!article) return notFound();

  const lang = locale as "vi" | "en";
  const category = solutionCategories.find((c) => c.slug === "cong-nghe")!;
  const solution = category.children.find((c) => c.href === slug);
  const solutionTitle = solution?.title[lang] || slug;

  const d = new Date(article.publishedAt);
  const day = d.getUTCDate().toString().padStart(2, "0");
  const monthsVi = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const publishedDate = locale === "vi"
    ? `${day}/${monthsVi[d.getUTCMonth()]}/${d.getUTCFullYear()}`
    : `${monthsEn[d.getUTCMonth()]} ${day}, ${d.getUTCFullYear()}`;

  const hasBody = article.body && article.body.length > 0;

  const categoryPath =
    locale === "vi"
      ? `/${locale}/giai-phap-dich-vu/cong-nghe`
      : `/${locale}/solutions/cong-nghe`;

  const solutionPath = `${categoryPath}/${slug}`;

  return (
    <main className="pt-[80px]">
      <section className="bg-white px-5 pb-16 pt-10 text-[#1a1a1a] sm:px-8">
        <article className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-[12px] font-medium tracking-wider text-gray-400">
            <Link href={`/${locale}`} className="transition-colors hover:text-gray-600">
              {locale === "vi" ? "TRANG CHỦ" : "HOME"}
            </Link>
            <span className="text-gray-300">&gt;</span>
            <Link href={categoryPath} className="transition-colors hover:text-gray-600">
              {locale === "vi" ? "GIẢI PHÁP CÔNG NGHỆ" : "TECHNOLOGY SOLUTIONS"}
            </Link>
            <span className="text-gray-300">&gt;</span>
            <Link href={solutionPath} className="transition-colors hover:text-gray-600">
              {solutionTitle.toUpperCase()}
            </Link>
            <span className="text-gray-300">&gt;</span>
            <span className="font-semibold text-primary">
              {locale === "vi" ? "CHI TIẾT" : "DETAIL"}
            </span>
          </div>

          <h1 className="mb-4 text-[26px] font-bold leading-[1.3] text-[#1a1a1a] sm:text-[32px] lg:text-[36px]">
            {article.title}
          </h1>

          <p className="mb-8 text-[14px] text-gray-400">{publishedDate}</p>

          {hasBody ? (
            <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#1a1a1a] prose-p:text-[15px] prose-p:leading-relaxed prose-p:text-gray-600 prose-a:text-primary prose-img:rounded-xl">
              <PortableText
                value={article.body as never}
                components={portableTextComponents}
              />
            </div>
          ) : (
            <div className="space-y-6">
              {article.excerpt && (
                <p className="text-[15px] leading-relaxed text-gray-600">
                  {article.excerpt}
                </p>
              )}
              {article.fallbackBody?.map((paragraph, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {/* Back link */}
          <div className="mt-12 border-t border-gray-100 pt-8">
            <Link
              href={solutionPath}
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-primary hover:underline"
            >
              ← {locale === "vi" ? "Quay lại danh sách bài viết" : "Back to articles"}
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
