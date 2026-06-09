import Image from "next/image";
import Link from "next/link";
import type { HomeContent } from "@/lib/content";
import { Icon } from "./icons";
import { Reveal } from "./reveal";


const partners = ["AI2-2.png", "AI3-3.png", "Global1-2.png", "Global2-2.png", "Net1-2.png", "Net2-2.png", "Security2-2.png", "Security3-2.png"];
const clients = ["Logo-Sacombank-new-1.png", "Logo-Home-Credit.png", "Coteccons-1.png", "Logo-Viettel-Vector-Moi-01-1-scaled.png", "VNG_Corp._logo.svg_-1.png", "Sun-group-logo-1.png", "Logo-Mega-Market-1.webp", "First-Solar-1.png"];
const certificates = ["HPE-Accredited-Solutions-Expert.png", "IBM-Certified-Database-Administrator-DB2.png", "Juniper-Networks-Certified-Expert-Data-Center-JNCIE-DC.png", "Oracle-Database-Administration-Certified-Professional.png"];
const fields = [["field-1.png", "Hạ tầng & Điện toán đám mây"], ["field-2.png", "Dữ liệu & Trí tuệ nhân tạo"], ["field-3.png", "An toàn thông tin"]];
const services = [["Công nghệ thông tin", "/assets/svtech/services/service-1.jpg"], ["Tích hợp hệ thống", "/assets/svtech/services/service-2.jpg"], ["An ninh bảo mật", "/assets/svtech/services/service-3.jpg"], ["Giám sát vận hành", "/assets/svtech/services/service-4.jpg"]];
const reasons = [["23+", "Năm kinh nghiệm", "Đồng hành chuyển đổi số và hạ tầng CNTT"], ["170+", "Kỹ sư & Chuyên gia", "Đội ngũ chứng chỉ quốc tế"], ["500+", "Chứng chỉ & Chứng nhận", "Tuân thủ tiêu chuẩn ngành và bảo mật"]];
const news = [
  ["Sự kiện", "Công Ty Cổ Phần Công Nghệ DTG đồng hành cùng Công ty CP Chăn nuôi C.P. Việt Nam", "/assets/svtech/news/news-1.jpg"],
  ["Hợp tác", "DTG và CYFIRMA: Dấu ấn hợp tác chiến lược với danh hiệu MSSP xuất sắc", "/assets/svtech/news/news-2.jpg"],
  ["Sự kiện", "DTG CORP - HÀNH TRÌNH KẾT NỐI TRÍ TUỆ, CẢM XÚC & CÔNG NGHỆ", "/assets/svtech/news/news-3.jpg"],
];

export function HomePage({ content }: { content: HomeContent }) {
  return <main>
    <section className="hero container">
      <Reveal className="hero-copy"><h1>{content.heroTitle}</h1></Reveal>
      <div className="hero-banner">
        <video className="hero-video" src="https://homepage.dtgsoft.vn/api/v1/public/media/54cabb07-4d47-4c49-829f-1bd933ff5e29/file" autoPlay muted loop playsInline />
        <p className="hero-banner-label">DTG - Nhà tích hợp giải pháp hàng đầu Việt Nam</p>
      </div>
    </section>
    <section className="partners section"><div className="container"><Reveal><Link href="/khach-hang-doi-tac" className="outline-label">{content.partnerTitle}</Link></Reveal></div><LogoMarquee images={partners} folder="partners" /></section>
    <section className="services section container"><Reveal className="section-copy"><span className="eyebrow">{content.serviceEyebrow}</span><h2>{content.serviceTitle}</h2><p>{content.serviceDescription}</p><Link className="text-link" href="/dich-vu">Tất cả dịch vụ <Icon name="arrow" /></Link></Reveal><Reveal className="service-image" delay={120}><Image src="/assets/svtech/services.png" alt="Dịch vụ công nghệ DTG" width={948} height={635} /></Reveal></section>
    <section className="why section"><div className="container"><Reveal><span className="eyebrow">{content.whyEyebrow}</span><h2>{content.whyTitle}</h2><p className="lead">{content.body}</p></Reveal><div className="reason-grid">{reasons.map(([stat, title, desc], index) => <Reveal className="reason-card" delay={index * 100} key={title}><strong>{stat}</strong><h3>{title}</h3><p>{desc}</p></Reveal>)}</div></div><Image className="team-image" src="/assets/svtech/team.webp" alt="Đội ngũ DTG" width={2560} height={755} /></section>
    <SectionLabel text={content.customerTitle}/><HexMarquee images={clients} folder="clients" reverse/>
    <section className="fields section container"><Reveal className="fields-heading"><div className="fields-top"><span className="outline-label">LĨNH VỰC HOẠT ĐỘNG</span><Link className="primary-button" href="/gioi-thieu/linh-vuc-hoat-dong">Tìm hiểu thêm <Icon name="arrow" /></Link></div><h2>Đáp ứng mọi nhu cầu<br />chuyển đổi số</h2></Reveal><div className="field-grid">{fields.map(([image,title], index)=><Reveal className="field-item" delay={index*100} key={title}><Image src={`/assets/svtech/${image}`} alt="" width={206} height={201}/><span>0{index+1}</span><h3>{title}</h3></Reveal>)}</div></section>
    <SectionLabel text="CHỨNG CHỈ NĂNG LỰC"/><HexMarquee images={certificates} folder="why/certificates"/>
    <section className="home-services section container"><Reveal><h2 className="home-services-title">DỊCH VỤ</h2><p className="home-services-desc">Cung cấp đa dạng dịch vụ giúp doanh nghiệp tối ưu hạ tầng, nâng cao hiệu quả vận hành và đảm bảo an toàn trong hành trình chuyển đổi số.</p></Reveal><div className="home-services-grid">{services.map(([title, image], index) => <Reveal className="home-service-card" delay={index * 100} key={title}><Image src={image} alt={title} width={300} height={300} /><h3>{title}</h3></Reveal>)}</div></section>
    <section className="news section container"><Reveal><span className="eyebrow">{content.newsEyebrow}</span><h2>{content.newsTitle}</h2></Reveal><div className="news-grid">{news.map(([tag, title, image], index) => <Reveal className="news-card" delay={index * 100} key={title}><div className="news-visual"><Image src={image} alt={title} width={400} height={250} /></div><small>{tag}</small><h3>{title}</h3><Link href="/tin-tuc-su-kien">Xem chi tiết <Icon name="arrow" /></Link></Reveal>)}</div></section>
    <section className="contact section"><div className="container contact-inner"><Reveal><h2>{content.contactTitle}</h2><p>{content.contactDescription}</p></Reveal><Reveal delay={100}><form className="contact-form"><input placeholder="Họ và tên" /><input placeholder="Email doanh nghiệp" /><textarea placeholder="Nội dung cần tư vấn" /><button type="button">Gửi yêu cầu <Icon name="arrow" /></button></form></Reveal></div></section>
  </main>;
}

function LogoMarquee({ images, folder, reverse = false }: { images: string[]; folder: string; reverse?: boolean }) {
  return <div className={`logo-marquee ${reverse ? "reverse" : ""}`}><div className="logo-marquee-track">{[...images, ...images].map((image,index)=><div className="logo-marquee-item" key={`${image}-${index}`}><Image src={`/assets/svtech/${folder}/${image}`} alt="" width={210} height={140}/></div>)}</div></div>;
}
function SectionLabel({text}:{text:string}) { return <div className="container why-section-label"><Reveal><span className="outline-label">{text}</span></Reveal></div>; }
function HexMarquee({images,folder,reverse=false}:{images:string[];folder:string;reverse?:boolean}) { return <div className={`logo-marquee why-marquee ${reverse?"reverse":""}`}><div className="logo-marquee-track">{[...images,...images].map((image,i)=><div className="logo-marquee-item" key={`${image}-${i}`}><Image src={`/assets/svtech/${folder}/${image}`} alt="" width={210} height={140}/></div>)}</div></div>; }
