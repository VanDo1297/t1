import type { ReactNode } from "react";

export const metadata = {
  title: "DTG Studio",
  description: "Content Management System",
};

export default function StudioLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
