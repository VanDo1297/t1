export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="pt-[80px]">
      <section className="min-h-screen bg-primary-dark px-5 py-20 sm:px-8">
        <h1 className="text-4xl font-bold text-white">
          {locale === "vi" ? "Giải pháp & Dịch vụ" : "Solutions & Services"}
        </h1>
        <p className="mt-4 text-lg text-white/60">
          {locale === "vi"
            ? "Các giải pháp và dịch vụ của DTG."
            : "DTG solutions and services."}
        </p>
      </section>
    </main>
  );
}
