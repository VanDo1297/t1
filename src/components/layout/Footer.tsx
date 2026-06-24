import Image from "next/image";
import type { FooterData } from "@/sanity/queries";

const socialIcons: Record<string, React.ReactNode> = {
  facebook: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  linkedin: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  youtube: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
};

interface FooterProps {
  data: FooterData;
}

export function Footer({ data }: FooterProps) {
  const copyrightYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a192f]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr]">
          {/* Left: Logo + Support */}
          <div>
            <Image
              src="/assets/dtg-logo.png"
              alt="DTS"
              width={160}
              height={60}
              className="mb-8"
            />
            <p className="text-[18px] font-bold  text-white">
              {data.companyName}
            </p>
            
            <a
              href={data.companyProfileUrl || "/assets/company-profile.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.1em] text-white/80 transition-all hover:bg-white/10 hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Company Profile
            </a>

            <div className="mt-5 flex items-center gap-3">
              {data.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 transition-colors hover:text-white"
                  aria-label={link.platform}
                >
                  {socialIcons[link.platform] ?? (
                    <span className="text-xs uppercase">{link.platform}</span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Offices */}
          <div>
            <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {data.offices.map((office) => (
                <OfficeBlock key={office.name} office={office} phoneLabel={data.phoneLabel} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <p className="py-4 text-center text-[12px] text-white/40">
          &copy; {copyrightYear} DTG. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function OfficeBlock({
  office,
  phoneLabel,
}: {
  office: FooterData["offices"][number];
  phoneLabel: string;
}) {
  return (
    <div className="text-[15px] leading-[1.8] text-white/60">
      <p className="font-bold text-white/90">{office.name}:</p>
      <p className="mt-2">{office.address}</p>
      {office.phone && (
        <p className="mt-2">
          {phoneLabel}: {office.phone}
        </p>
      )}
      {office.fax && (
        <p className="mt-2">Fax: {office.fax}</p>
      )}
    </div>
  );
}
