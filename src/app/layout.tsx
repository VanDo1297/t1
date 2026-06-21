import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "DTG",
  description: "DTG - Digital Technology Group",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body >{children}</body>
    </html>
  );
}
