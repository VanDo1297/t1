import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HomePage } from "@/components/home-page";
import { getHomeContent } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage content={getHomeContent()} />
      <Footer />
    </>
  );
}
