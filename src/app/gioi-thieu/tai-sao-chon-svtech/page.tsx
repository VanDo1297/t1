import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhyChoosePage } from "@/components/why-choose-page";
import { getWhyChooseContent } from "@/lib/content";

export default function Page() {
  return <><Header/><WhyChoosePage content={getWhyChooseContent()}/><Footer/></>;
}
