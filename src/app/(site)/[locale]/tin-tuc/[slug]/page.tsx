import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getTinTucDetail, getTinTucPageData, urlFor } from "@/sanity/queries";
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

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const article = await getTinTucDetail(locale, slug);

  if (!article) return notFound();

  const pageData = getTinTucPageData(locale);
  const categoryLabel =
    pageData.categories.find((c) => c.value === article.category)?.label || "";

  const publishedDate = new Date(article.publishedAt).toLocaleDateString(
    locale === "vi" ? "vi-VN" : "en-US",
    { day: "2-digit", month: "long", year: "numeric" },
  );

  const hasBody = article.body && article.body.length > 0;

  return (
    <main className="pt-[80px] [font-family:'TT_Hoves',Arial,'Helvetica_Neue',Helvetica,sans-serif]">
      {/* Article content */}
      <section className="bg-white px-5 pb-16 pt-10 sm:px-8">
        <article className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-[12px] font-medium tracking-wider text-gray-400">
            <Link
              href={`/${locale}`}
              className="transition-colors hover:text-gray-600"
            >
              {pageData.breadcrumbHome}
            </Link>
            <span className="text-gray-300">&gt;</span>
            <Link
              href={`/${locale}/tin-tuc?danh-muc=${article.category}`}
              className="transition-colors hover:text-gray-600"
            >
              {pageData.breadcrumbNews}
            </Link>
            <span className="text-gray-300">&gt;</span>
            <span className="font-semibold text-primary">
              {categoryLabel.toUpperCase()}
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-4 text-[26px] font-bold leading-[1.3] text-[#1a2b4a] sm:text-[32px] lg:text-[36px]">
            {article.title}
          </h1>

          {/* Date */}
          <p className="mb-8 text-[14px] text-gray-400">{publishedDate}</p>

          {/* Body from CMS */}
          {hasBody ? (
            <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#1a2b4a] prose-p:text-[15px] prose-p:leading-relaxed prose-p:text-gray-600 prose-a:text-primary prose-img:rounded-xl">
              <PortableText
                value={article.body as never}
                components={portableTextComponents}
              />
            </div>
          ) : (
            /* Fallback fixed layout */
            <div className="space-y-6">
              {/* Excerpt as first paragraph */}
              {article.excerpt && (
                <p className="text-[15px] leading-relaxed text-gray-600">
                  {article.excerpt}
                </p>
              )}

              {/* Fallback body paragraphs */}
              {article.fallbackBody?.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-relaxed text-gray-600"
                >
                  {paragraph}
                </p>
              ))}

              {/* Fallback images */}
              {article.fallbackImages?.map((img, i) => (
                <div
                  key={i}
                  className="relative my-8 overflow-hidden rounded-xl"
                >
                  <Image
                    src={img.src}
                    alt={img.alt || ""}
                    width={900}
                    height={500}
                    className="w-full object-cover"
                  />
                  {img.caption && (
                    <p className="mt-2 text-center text-[13px] italic text-gray-400">
                      {img.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Contact section */}
          <div className="mt-12 border-t border-gray-100 pt-8">
            <p className="mb-4 text-[15px] font-bold text-[#1a2b4a]">
              {locale === "vi"
                ? "Thông tin liên hệ: DTG CORP"
                : "Contact: DTG CORP"}
            </p>
            <div className="space-y-1.5 text-[14px] text-gray-500">
              <p>
                Youtube:{" "}
                <a
                  href="https://www.youtube.com/@dtgcorp2152/videos"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.youtube.com/@dtgcorp2152/videos
                </a>
              </p>
              <p>
                Tiktok:{" "}
                <a
                  href="https://www.tiktok.com/@dtgcorp"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.tiktok.com/@dtgcorp
                </a>
              </p>
              <p>
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/dtgcorp_1205/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.instagram.com/dtgcorp_1205/
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://www.dtgcorp.com.vn/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.dtgcorp.com.vn/
                </a>
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
