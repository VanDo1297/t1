import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-main",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: { default: "SVTECH - The Foundation of Success", template: "%s | SVTECH" },
  description: "Nhà tích hợp giải pháp công nghệ hàng đầu Việt Nam",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi" className={beVietnamPro.variable} data-scroll-behavior="smooth"><body>{children}</body></html>;
}
