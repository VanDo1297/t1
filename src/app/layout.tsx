import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-main",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: { default: "DTG — Công ty Cổ phần Công nghệ", template: "%s | DTG" },
  description: "Tiên phong giải pháp công nghệ tích hợp AI Agent và an ninh mạng, kiến tạo không gian số an toàn cho tương lai.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi" className={beVietnamPro.variable} data-scroll-behavior="smooth"><body>{children}</body></html>;
}
