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

  const d = new Date(article.publishedAt);
  const day = d.getUTCDate().toString().padStart(2, "0");
  const monthsVi = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const publishedDate = locale === "vi"
    ? `${day}/${monthsVi[d.getUTCMonth()]}/${d.getUTCFullYear()}`
    : `${monthsEn[d.getUTCMonth()]} ${day}, ${d.getUTCFullYear()}`;

  const hasBody = article.body && article.body.length > 0;

  return (
    <main className="article-detail-mobile pt-[80px] [font-family:'TT_Hoves',Arial,'Helvetica_Neue',Helvetica,sans-serif]">
      {/* Hero */}
      <section className="site-hero">
        <div className="site-hero-content">
          <div className="site-breadcrumb">
            <Link
              href={`/${locale}`}
            >
              {pageData.breadcrumbHome}
            </Link>
            <span>&rarr;</span>
            <Link
              href={`/${locale}/tin-tuc?danh-muc=${article.category}`}
            >
              {pageData.breadcrumbNews}
            </Link>
            <span>&rarr;</span>
            <span>
              {categoryLabel.toUpperCase()}
            </span>
          </div>

          <h1 className="site-hero-title">
            {article.title}
          </h1>

          <p className="site-hero-description">{publishedDate}</p>
        </div>
      </section>

      {/* Article content */}
      <section className="bg-white px-5 pb-16 pt-10 text-[#1a1a1a] sm:px-8">
        <article className="w-full">
          {/* Body from CMS */}
          {hasBody ? (
            <div className="article-rich-content">
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
            <p className="mb-4 text-[15px] font-bold text-[#1a1a1a]">
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
