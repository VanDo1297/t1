import { MapPin, Phone, Mail } from "lucide-react";
import { getLienHeData } from "@/sanity/queries";
import { ContactForm } from "@/components/sections/ContactForm";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await getLienHeData(locale);

  return (
    <main className="pt-[80px]">
      {/* Hero */}
      <section
        className="relative flex items-center justify-center px-5 py-24 sm:px-8"
        style={{
          minHeight: "320px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.3), transparent 50%), radial-gradient(circle at 80% 50%, rgba(139,92,246,0.3), transparent 50%)",
          }}
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">{data.title}</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/60">
            {locale === "vi"
              ? "Liên hệ với chúng tôi để được tư vấn giải pháp phù hợp nhất."
              : "Get in touch with us for the most suitable solution."}
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: "#0b0f1a" }} className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          {/* Left Column — Contact Info */}
          <div>
            <h2 className="mb-8 text-2xl font-bold text-white">{data.infoTitle}</h2>

            {/* Address */}
            <div className="mb-6 flex gap-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: "rgba(59,130,246,0.15)" }}
              >
                <MapPin size={20} style={{ color: "#3b82f6" }} />
              </div>
              <div>
                <p className="text-sm font-medium text-white/50">
                  {locale === "vi" ? "Địa chỉ" : "Address"}
                </p>
                <p className="mt-1 text-white/80">{data.address}</p>
              </div>
            </div>

            {/* Phones */}
            <div className="mb-6 flex gap-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: "rgba(59,130,246,0.15)" }}
              >
                <Phone size={20} style={{ color: "#3b82f6" }} />
              </div>
              <div>
                <p className="text-sm font-medium text-white/50">
                  {locale === "vi" ? "Điện thoại" : "Phone"}
                </p>
                <div className="mt-1 space-y-1">
                  {data.phones.map((p) => (
                    <p key={p.label} className="text-white/80">
                      <span className="font-medium text-white/60">{p.label}:</span>{" "}
                      <a href={`tel:${p.number.replace(/[^+\d]/g, "")}`} className="hover:text-white">
                        {p.number}
                      </a>
                    </p>
                  ))}
                  <p className="text-white/80">
                    <span className="font-medium text-white/60">Fax:</span> {data.fax}
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mb-10 flex gap-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: "rgba(59,130,246,0.15)" }}
              >
                <Mail size={20} style={{ color: "#3b82f6" }} />
              </div>
              <div>
                <p className="text-sm font-medium text-white/50">Email</p>
                <a href={`mailto:${data.email}`} className="mt-1 block text-white/80 hover:text-white">
                  {data.email}
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-xl">
              <iframe
                src={data.mapEmbedUrl}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              />
            </div>
          </div>

          {/* Right Column — Contact Form */}
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <ContactForm
              formTitle={data.formTitle}
              formNameLabel={data.formNameLabel}
              formCompanyLabel={data.formCompanyLabel}
              formPhoneEmailLabel={data.formPhoneEmailLabel}
              formSolutionLabel={data.formSolutionLabel}
              formMessageLabel={data.formMessageLabel}
              formSubmitLabel={data.formSubmitLabel}
              formSuccessMessage={data.formSuccessMessage}
              solutions={data.solutions}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
