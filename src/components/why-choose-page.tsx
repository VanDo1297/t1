import Image from "next/image";
import Link from "next/link";
import type { WhyChooseContent } from "@/lib/content";
import { Icon } from "./icons";
import { Reveal } from "./reveal";

const clients = ["Logo-Sacombank-new-1.png", "Logo-Home-Credit.png", "Coteccons-1.png", "Logo-Viettel-Vector-Moi-01-1-scaled.png", "VNG_Corp._logo.svg_-1.png", "Sun-group-logo-1.png", "Logo-Mega-Market-1.webp", "First-Solar-1.png"];
const certificates = ["HPE-Accredited-Solutions-Expert.png", "IBM-Certified-Database-Administrator-DB2.png", "Juniper-Networks-Certified-Expert-Data-Center-JNCIE-DC.png", "Oracle-Database-Administration-Certified-Professional.png"];
const partners = ["Security24-2.png", "AI1-2.png", "AI2-2.png", "AI3-3.png", "Global1-2.png", "Global2-2.png", "Net1-2.png", "Net2-2.png"];
const stats = [["20+", "ĐỐI TÁC HÀNG ĐẦU THẾ GIỚI TRONG LĨNH VỰC CNTT"], ["300+", "KỸ SƯ CAO CẤP TRONG LĨNH VỰC CNTT"], ["1000+", "CHỨNG CHỈ CỦA CÁC HÃNG CNTT HÀNG ĐẦU THẾ GIỚI"], ["24+", "NĂM KINH NGHIỆM LĨNH VỰC CNTT & VIỄN THÔNG"]];

export function WhyChoosePage({ content }: { content: WhyChooseContent }) {
  return <main className="why-page">
    <section className="why-page-hero"><Image src="/assets/svtech/why/why-choose-us.png" alt="" width={1218} height={107}/><div className="container"><h1>{content.title}</h1></div></section>
    <div className="container breadcrumbs"><Link href="/">Trang chủ</Link><span>›</span><Link href="/gioi-thieu">Giới thiệu</Link><span>›</span><b>{content.title}</b></div>
    <section className="why-intro container"><Reveal><Image src="/assets/svtech/why/customer-understanding.jpg" alt="Đội ngũ DTG" width={1024} height={671}/></Reveal><Reveal className="why-intro-copy" delay={100}><h2>{content.introTitle}</h2>{content.introParagraphs.map(text=><p key={text}>{text}</p>)}</Reveal></section>
    <SectionLabel text="KHÁCH HÀNG CỦA CHÚNG TÔI"/><HexMarquee images={clients} folder="clients" reverse/>
    <section className="why-expertise section container"><Reveal><h2>Vững vàng chuyên môn</h2></Reveal><div className="why-stat-grid">{stats.map(([value,label],i)=><Reveal className="why-stat" delay={i*80} key={label}><span>⌁</span><strong>{value}</strong><div/><p>{label}</p></Reveal>)}</div></section>
    <SectionLabel text="CHỨNG CHỈ NĂNG LỰC"/><HexMarquee images={certificates} folder="why/certificates"/>
    <section className="why-workforce"><Reveal className="why-workforce-copy"><span className="outline-label light">NĂNG LỰC NHÂN SỰ</span><h2>{content.workforceTitle}</h2><p>{content.workforceDescription}</p><Link className="primary-button" href="/gioi-thieu">TÌM HIỂU THÊM VỀ DTG <Icon name="arrow"/></Link></Reveal><Image src="/assets/svtech/why/workforce.jpg" alt="Đội ngũ kỹ sư DTG" width={851} height={547}/></section>
    <SectionLabel text="ĐỐI TÁC CÔNG NGHỆ CHIẾN LƯỢC"/><HexMarquee images={partners} folder="why/partners" reverse/>
    <section className="why-contact section container"><Reveal><h2>{content.contactTitle}</h2><p>{content.contactDescription}</p></Reveal><Reveal delay={100}><form><input placeholder="Họ và tên"/><input placeholder="Email"/><input placeholder="Số điện thoại"/><textarea placeholder="Nội dung cần tư vấn"/><button type="button">GỬI LIÊN HỆ <Icon name="arrow"/></button></form></Reveal></section>
  </main>;
}

function SectionLabel({text}:{text:string}) { return <div className="container why-section-label"><Reveal><span className="outline-label">{text}</span></Reveal></div>; }
function HexMarquee({images,folder,reverse=false}:{images:string[];folder:string;reverse?:boolean}) { return <div className={`logo-marquee why-marquee ${reverse?"reverse":""}`}><div className="logo-marquee-track">{[...images,...images].map((image,i)=><div className="logo-marquee-item" key={`${image}-${i}`}><Image src={`/assets/svtech/${folder}/${image}`} alt="" width={210} height={140}/></div>)}</div></div>; }
