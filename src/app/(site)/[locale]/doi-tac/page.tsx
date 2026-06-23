import Image from "next/image";
import Link from "next/link";
import { getPartnersPageData, urlFor } from "@/sanity/queries";
import { ClientsFilter } from "@/components/sections/ClientsFilter";
import { LogoCarousel, type CarouselItem } from "@/components/sections/DoiTacSection";

const BG_IMAGES = [
  "/assets/bg/1.jpg",
  "/assets/bg/2.jpg",
  "/assets/bg/3.jpg",
  "/assets/bg/4.jpg",
  "/assets/bg/5.jpg",
];
const HERO_FALLBACK_IMAGE = BG_IMAGES[0];
const LOGO_FALLBACK = "/assets/dtg-logo.png";

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
  const toCarousel = (items: typeof data.strategicPartners): CarouselItem[] =>
    items.map((partner) => ({
      name: partner.name,
      logoUrl: partner.logo
        ? urlFor(partner.logo).url()
        : LOGO_FALLBACK,
      url: partner.url,
    }));

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
        <div className="relative z-10 mx-auto max-w-6xl">
          {data.sectionTitle && (
            <p className="mb-4 text-center text-[16px] font-medium uppercase tracking-[0.15em] text-[#2563eb]">
              {data.sectionTitle}
            </p>
          )}
          <h2 className="text-center font-heading text-2xl font-bold tracking-wide text-[#1a1a1a] sm:text-3xl">
            {data.strategicPartnersTitle}
          </h2>

          <LogoCarousel items={toCarousel(data.strategicPartners)} />
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
        <div className="relative z-10 mx-auto max-w-6xl border-t border-gray-100 pt-16">
          <h2 className="text-center font-heading text-2xl font-bold tracking-wide text-[#1a1a1a] sm:text-3xl">
            {data.networkPartnersTitle}
          </h2>

          <LogoCarousel items={toCarousel(data.networkPartners)} />
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
        <div className="relative z-10 mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-2xl font-bold tracking-wide text-[#1a1a1a] sm:text-3xl">
            {data.clientsTitle}
          </h2>

          <ClientsFilter
            categories={data.clientCategories}
            clients={data.clients}
            allLabel={data.clientCategories[0] || ""}
          />
        </div>
      </section>
    </main>
  );
}
