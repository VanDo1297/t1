import Image from "next/image";
import Link from "next/link";
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
    <main className="contact-page-mobile pt-[80px]">
      {/* Hero */}
      <section className="site-hero">
        <div className="absolute inset-0">
          <Image src="/assets/bg/2.jpg" alt="" fill className="object-cover" priority />
        </div>
        <div className="site-hero-content">
          <h1 className="site-hero-title">{data.title}</h1>
          <p className="site-hero-description">
            {locale === "vi"
              ? "Liên hệ với chúng tôi để được tư vấn giải pháp phù hợp nhất."
              : "Get in touch with us for the most suitable solution."}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-5 py-16 sm:px-8" style={{ backgroundColor: "#fff" }}>
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
          {/* Left — Contact Info */}
          <div>
            <h2 className="mb-8 text-2xl font-bold" style={{ color: "#1a1a1a" }}>{data.infoTitle}</h2>

            <div className="mb-6 flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(37,99,235,0.1)" }}>
                <MapPin size={20} style={{ color: "#2563eb" }} />
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: "#888" }}>
                  {locale === "vi" ? "Địa chỉ" : "Address"}
                </p>
                <p className="mt-1 text-[15px]" style={{ color: "#333" }}>{data.address}</p>
              </div>
            </div>

            <div className="mb-6 flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(37,99,235,0.1)" }}>
                <Phone size={20} style={{ color: "#2563eb" }} />
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: "#888" }}>
                  {locale === "vi" ? "Điện thoại" : "Phone"}
                </p>
                <div className="mt-1 space-y-1">
                  {data.phones.map((p) => (
                    <p key={p.label} className="text-[15px]" style={{ color: "#333" }}>
                      <span style={{ color: "#666" }}>{p.label}:</span>{" "}
                      <a href={`tel:${p.number.replace(/[^+\d]/g, "")}`} className="hover:underline">
                        {p.number}
                      </a>
                    </p>
                  ))}
                  <p className="text-[15px]" style={{ color: "#333" }}>
                    <span style={{ color: "#666" }}>Fax:</span> {data.fax}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-10 flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(37,99,235,0.1)" }}>
                <Mail size={20} style={{ color: "#2563eb" }} />
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: "#888" }}>Email</p>
                <a href={`mailto:${data.email}`} className="mt-1 block text-[15px] hover:underline" style={{ color: "#2563eb" }}>
                  {data.email}
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border" style={{ borderColor: "#eee" }}>
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

          {/* Right — Form */}
          <div className="rounded-2xl p-6 sm:p-8" style={{ backgroundColor: "#f9fafb", border: "1px solid #eee" }}>
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
