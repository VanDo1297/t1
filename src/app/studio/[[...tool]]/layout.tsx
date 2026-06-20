import type { ReactNode } from "react";

export const metadata = {
  title: "DTG Studio",
  description: "Content Management System",
};

export default function StudioLayout({ children }: { children: ReactNode }) {
  return <div style={{ margin: 0, height: "100vh" }}>{children}</div>;
}
