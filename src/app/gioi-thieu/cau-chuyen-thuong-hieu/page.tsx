import type { Metadata } from "next";
import { BrandStoryPage } from "@/components/brand-story-page";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getBrandStoryContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Câu chuyện thương hiệu",
  description: "Hành trình hình thành, phát triển và những giá trị làm nên thương hiệu DTG.",
};

export default function Page() {
  return <><Header/><BrandStoryPage content={getBrandStoryContent()}/><Footer/></>;
}
