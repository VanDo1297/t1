import Image from "next/image";
import Link from "next/link";
import type { HomeContent } from "@/lib/content";
import { CountUp } from "./count-up";
import { Icon } from "./icons";
import { Reveal } from "./reveal";

const partners = ["AI2-2.png", "AI3-3.png", "Global1-2.png", "Global2-2.png", "Net1-2.png", "Net2-2.png", "Security2-2.png", "Security3-2.png"];
const clients = ["Logo-Sacombank-new-1.png", "Logo-Home-Credit.png", "Coteccons-1.png", "Logo-Viettel-Vector-Moi-01-1-scaled.png", "VNG_Corp._logo.svg_-1.png", "Sun-group-logo-1.png", "Logo-Mega-Market-1.webp", "First-Solar-1.png"];
const serviceImages = [
  "/assets/svtech/services/service-1.jpg",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/vector-1738324830509-8ec5b04e7297?q=80&w=1324&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1688413399498-e35ed74b554f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const productImages = ["field-1.png", "field-2.png", "field-3.png"];

export function HomePage({ content }: { content: HomeContent }) {
  return <main className="dtg-home">
    <section className="hero dtg-video-hero">
      <video className="hero-video" src="https://homepage.dtgsoft.vn/api/v1/public/media/54cabb07-4d47-4c49-829f-1bd933ff5e29/file" autoPlay muted loop playsInline />
      <div className="hero-overlay"><Reveal className="hero-copy"><span className="dtg-hero-kicker">CÔNG TY CỔ PHẦN CÔNG NGHỆ DTG</span><h1>{content.heroTitle}</h1><p>{content.heroSubtitle}</p><Link className="primary-button" href="#about">Khám phá DTG <Icon name="arrow" /></Link></Reveal></div>
    </section>

    <section id="about" className="dtg-about section container">
      <Reveal><span className="outline-label">VỀ CHÚNG TÔI</span><h2>{content.aboutTitle}</h2><p>{content.aboutDescription}</p></Reveal>
      <div className="dtg-stat-grid">{content.stats.map((stat, index) => <Reveal className="dtg-stat-card" delay={index * 90} key={stat.label}><strong><AnimatedStat value={stat.value}/></strong><h3>{stat.label}</h3><p>{stat.description}</p></Reveal>)}</div>
    </section>

    <section className="dtg-solutions section">
      <div className="container dtg-heading light"><Reveal><span className="outline-label light">GIẢI PHÁP</span><h2>{content.solutionsTitle}</h2><p>{content.solutionsDescription}</p></Reveal></div>
      <div className="container dtg-sector-grid">{content.solutions.map((solution, index) => <Reveal className="dtg-sector-card" delay={index * 70} key={solution}><span>0{index + 1}</span><h3>{solution}</h3><Link href="/giai-phap">Khám phá <Icon name="arrow" /></Link></Reveal>)}</div>
    </section>

    <section className="dtg-services section container">
      <Reveal className="dtg-heading"><span className="outline-label">DỊCH VỤ</span><h2>{content.servicesTitle}</h2><p>{content.servicesDescription}</p></Reveal>
      <div className="dtg-service-grid">{content.services.map((service, index) => <Reveal delay={index * 80} key={service.title}><Link href="/dich-vu" className="dtg-service-card"><Image src={serviceImages[index]} alt="" width={600} height={450}/><div><h3>{service.title}</h3><p>{service.description}</p></div><span className="dtg-service-arrow-wrap"><span className="dtg-service-arrow"><Icon name="arrow"/></span></span></Link></Reveal>)}</div>
    </section>

    <section className="dtg-products section">
      <div className="container"><Reveal className="dtg-heading light"><span className="outline-label light">SẢN PHẨM</span><h2>{content.productsTitle}</h2><p>{content.productsDescription}</p></Reveal>
        <div className="dtg-product-grid">{content.products.map((product,index)=><Reveal delay={index*90} key={product.title}><Link href="/san-pham" className="dtg-product-card"><Image src={`/assets/svtech/${productImages[index]}`} alt="" width={700} height={520}/><div><h3>{product.title}</h3><p>{product.description}</p></div><span className="dtg-service-arrow-wrap"><span className="dtg-service-arrow"><Icon name="arrow"/></span></span></Link></Reveal>)}</div>
      </div>
    </section>

    <SectionLabel text={content.partnerTitle}/><HexMarquee images={partners} folder="partners"/>
    <SectionLabel text={content.customerTitle}/><HexMarquee images={clients} folder="clients" reverse/>

    <section id="contact" className="why-contact section container"><Reveal><span className="outline-label light">LIÊN HỆ</span><h2>{content.contactTitle}</h2><p>{content.contactDescription}</p></Reveal><Reveal delay={100}><form><input placeholder="Họ và tên"/><input placeholder="Email"/><input placeholder="Số điện thoại"/><input placeholder="Tên doanh nghiệp"/><textarea placeholder="Nội dung cần tư vấn"/><button type="button">GỬI YÊU CẦU TƯ VẤN <Icon name="arrow"/></button></form></Reveal></section>

    <section className="news section container"><Reveal className="dtg-heading"><span className="outline-label">TIN TỨC</span><h2>{content.newsTitle}</h2><p>{content.newsDescription}</p></Reveal><div className="news-grid">{content.news.map((item,index)=><Reveal className="news-card" delay={index*90} key={item.title}><div className="dtg-news-visual"><Image className="dtg-news-image" src={`/assets/svtech/news/news-${index+1}.jpg`} alt="" width={700} height={440}/></div><small>{item.category}</small><h3>{item.title}</h3><Link href="/tin-tuc-su-kien">Xem thêm <Icon name="arrow"/></Link></Reveal>)}</div></section>
  </main>;
}

function SectionLabel({text}:{text:string}) { return <div className="container why-section-label"><Reveal><span className="outline-label">{text}</span></Reveal></div>; }
function HexMarquee({images,folder,reverse=false}:{images:string[];folder:string;reverse?:boolean}) { return <Reveal><div className={`logo-marquee why-marquee ${reverse?"reverse":""}`}><div className="logo-marquee-track">{[...images,...images].map((image,i)=><div className="logo-marquee-item" key={`${image}-${i}`}><Image src={`/assets/svtech/${folder}/${image}`} alt="" width={210} height={140}/></div>)}</div></div></Reveal>; }
function AnimatedStat({value}:{value:string}) { const match=value.match(/^(\d+)(.*)$/); return match?<CountUp value={Number(match[1])} suffix={match[2]}/>:value; }
