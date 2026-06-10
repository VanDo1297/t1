import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ServicesPage } from "@/components/services-page";
import { getServicesContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Dịch vụ công nghệ",
  description: "Dịch vụ công nghệ thông tin, tích hợp hệ thống, an ninh bảo mật và giám sát vận hành của DTG.",
};

export default function Page() {
  return <><Header/><ServicesPage content={getServicesContent()}/><Footer/></>;
}
