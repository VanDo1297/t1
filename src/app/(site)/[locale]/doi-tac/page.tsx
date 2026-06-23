import Image from "next/image";
import Link from "next/link";
import type { SanityImageSource } from "@sanity/image-url";
import { getPartnersPageData, urlFor } from "@/sanity/queries";

const BG_IMAGES = [
  "/assets/bg/1.jpg",
  "/assets/bg/2.jpg",
  "/assets/bg/3.jpg",
  "/assets/bg/4.jpg",
  "/assets/bg/5.jpg",
];
const HERO_FALLBACK_IMAGE = BG_IMAGES[0];
const LOGO_FALLBACK = "/assets/dtg-logo.png";

interface LogoGridItem {
  name: string;
  logo: SanityImageSource | null;
  url?: string;
}

function LogoGrid({ items, showName = false, bg = false }: { items: LogoGridItem[]; showName?: boolean, bg?:boolean }) {
  return (
    <div className="mx-auto mt-12 grid w-full grid-cols-1 justify-items-center gap-6 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {items.map((item, index) => {
        const logoUrl = item.logo ? urlFor(item.logo).url() : LOGO_FALLBACK;
        const card = (
          <div
            className={`group flex w-full items-center justify-center overflow-hidden rounded-xl border border-gray-100 p-5 shadow-sm transition-shadow hover:shadow-md ${
              showName ? "h-[260px] flex-col gap-4 sm:h-[280px]" : "h-[140px]"
            } ${bg ? "bg-[rgb(226,247,255)]" : "bg-white"}`}
          >
            <div className={`flex min-h-0 w-full items-center justify-center ${showName ? "h-[170px] sm:h-[190px]" : "h-full"}`}>
              <Image
                src={logoUrl}
                alt={item.name}
                width={180}
                height={100}
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            {showName && (
              <span className="flex min-h-[44px] items-start justify-center text-center text-sm font-medium leading-tight text-[#1a6b5a]">
                {item.name}
              </span>
            )}
          </div>
        );

        if (item.url) {
          return (
            <a key={`${item.name}-${index}`} href={item.url} target="_blank" rel="noopener noreferrer" className="w-full">
              {card}
            </a>
          );
        }

        return <div key={`${item.name}-${index}`} className="w-full">{card}</div>;
      })}
    </div>
  );
}

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await getPartnersPageData(locale);

  const heroBgUrl = data.heroBackgroundImage
    ? urlFor(data.heroBackgroundImage).width(1920).quality(80).url()
    : HERO_FALLBACK_IMAGE;

  return (
    <main className="pt-[80px]">
      {/* ── Hero Section ── */}
      <section className="relative flex min-h-[480px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroBgUrl}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
          <h1 className="font-heading text-3xl font-bold text-[#1a1a1a] sm:text-4xl md:text-5xl">
            {data.heroTitle}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#555] sm:text-lg">
            {data.heroDescription}
          </p>
          <Link
            href={data.ctaButtonHref}
            className="mt-8 inline-block rounded-xl px-10 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(to right, #2563eb, #7c3aed)" }}
          >
            {data.ctaButtonLabel}
          </Link>
        </div>
      </section>

      {/* ── Đối tác chiến lược ── */}
      <section id="doi-tac" className="relative overflow-hidden bg-white px-5 py-20 sm:px-8">
        <Image
          src={BG_IMAGES[1]}
          alt=""
          fill
          className="object-cover opacity-5"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1440px]">
          <h2 className="text-center font-heading text-2xl font-bold tracking-wide text-[#1a1a1a] sm:text-3xl">
            {data.strategicPartnersTitle}
          </h2>

          <LogoGrid items={data.strategicPartners} bg/>
        </div>
      </section>

      {/* ── Mạng lưới đối tác công nghệ ── */}
      <section className="relative overflow-hidden bg-white px-5 pb-20 sm:px-8">
        <Image
          src={BG_IMAGES[2]}
          alt=""
          fill
          className="object-cover opacity-5"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] border-t border-gray-100 pt-16">
          <h2 className="text-center font-heading text-2xl font-bold tracking-wide text-[#1a1a1a] sm:text-3xl">
            {data.networkPartnersTitle}
          </h2>

          <LogoGrid items={data.networkPartners} />
        </div>
      </section>

      {/* ── Khách hàng đa lĩnh vực ── */}
      <section id="khach-hang" className="relative overflow-hidden bg-[#f9f9f7] px-5 py-20 sm:px-8">
        <Image
          src={BG_IMAGES[3]}
          alt=""
          fill
          className="object-cover opacity-5"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1440px]">
          <h2 className="text-center font-heading text-2xl font-bold tracking-wide text-[#1a1a1a] sm:text-3xl">
            {data.clientsTitle}
          </h2>

          <LogoGrid items={data.clients} showName />
        </div>
      </section>
    </main>
  );
}
