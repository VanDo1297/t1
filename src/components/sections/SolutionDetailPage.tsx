import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/queries";
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

interface Breadcrumb {
  label: string;
  href: string;
}

interface SolutionDetailPageProps {
  locale: string;
  title: string;
  description: string;
  thumbnailUrl?: string;
  fallbackBody: string[];
  body: unknown[];
  breadcrumbs: Breadcrumb[];
  backHref: string;
  backLabel: string;
}

export function SolutionDetailPage({
  locale,
  title,
  description,
  thumbnailUrl,
  fallbackBody,
  body,
  breadcrumbs,
  backHref,
  backLabel,
}: SolutionDetailPageProps) {
  const hasBody = body && body.length > 0;
  console.log(thumbnailUrl);
  return (
    <main className="solution-detail-mobile pt-[80px]">
      {/* Hero with bg image */}
      <section className="site-hero">
        <div className="absolute inset-0">
          <Image src="/assets/bg/1.jpg" alt="" fill className="object-cover" priority />
        </div>
        <div className="site-hero-content">
          <h1 className="site-hero-title">
            {title}
          </h1>
          <p className="site-hero-description">
            {description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white px-5 pb-16 pt-10 sm:px-8" style={{ color: "#1a1a1a" }}>
        <article className="w-full">
          {thumbnailUrl && (
            <div className="relative mb-10 w-full overflow-hidden rounded-xl" style={{ height: "clamp(200px, 30vw, 400px)" }}>
              <Image src={thumbnailUrl} alt={title} fill className="object-cover" />
            </div>
          )}
          {hasBody ? (
            <div className="article-rich-content">
              <PortableText
                value={body as never}
                components={portableTextComponents}
              />
            </div>
          ) : (
            <div className="space-y-6">
              <p className="text-[15px] leading-relaxed text-gray-600">
                {description}
              </p>
              {fallbackBody.map((paragraph, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {/* Back link */}
          <div className="mt-12 border-t border-gray-100 pt-8">
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-[14px] font-semibold hover:underline"
              style={{ color: "#2563eb" }}
            >
              ← {backLabel}
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
