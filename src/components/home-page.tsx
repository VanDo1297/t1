import Image from "next/image";
import Link from "next/link";
import type { HomeContent } from "@/lib/content";
import { Icon } from "./icons";
import { Reveal } from "./reveal";

const offerings = [["Dịch vụ quản trị", "/dich-vu", "✓"], ["Dịch vụ quản trị đám mây", "/dich-vu", "✓"], ["Giải pháp phần mềm", "/giai-phap", "▣"], ["Giải pháp tích hợp", "/giai-phap", "◎"], ["Dịch vụ chuyên nghiệp", "/dich-vu", "✓"]];
const partners = ["AI2-2.png", "AI3-3.png", "Global1-2.png", "Global2-2.png", "Net1-2.png", "Net2-2.png", "Security2-2.png", "Security3-2.png"];
const clients = ["Logo-Sacombank-new-1.png", "Logo-Home-Credit.png", "Coteccons-1.png", "Logo-Viettel-Vector-Moi-01-1-scaled.png", "VNG_Corp._logo.svg_-1.png", "Sun-group-logo-1.png", "Logo-Mega-Market-1.webp", "First-Solar-1.png"];
const certificates = ["HPE-Accredited-Solutions-Expert.png", "IBM-Certified-Database-Administrator-DB2.png", "Juniper-Networks-Certified-Expert-Data-Center-JNCIE-DC.png", "Oracle-Database-Administration-Certified-Professional.png"];
const fields = [["field-1.png", "Hạ tầng & Điện toán đám mây"], ["field-2.png", "Dữ liệu & Trí tuệ nhân tạo"], ["field-3.png", "An toàn thông tin"]];
const jobs = [["Business Consultant (Banking Solutions)", "30/6/2026"], ["Customer Support Trainee", "Mới cập nhật"], ["Data Engineer (Banking Project)", "30/06/2026"]];
const reasons = [["25+", "Năm kinh nghiệm", "Thành lập từ tháng 3/2001, SVTECH luôn nỗ lực để xứng đáng với sự tin tưởng của khách hàng và đối tác."], ["300+", "Chuyên gia công nghệ", "Đội ngũ kỹ sư cao cấp được công nhận bởi các đối tác công nghệ hàng đầu thế giới."], ["100+", "Chứng chỉ năng lực", "Năng lực chuyên sâu được công nhận bởi hệ sinh thái đối tác công nghệ hàng đầu thế giới."], ["24/7", "Đồng hành tận tâm", "Luôn sẵn sàng hỗ trợ, đặt thành công của khách hàng làm trọng tâm trong mọi hoạt động."]];
const news = [["Sự kiện", "SVTECH đồng hành cùng doanh nghiệp trên hành trình chuyển đổi số"], ["Công nghệ", "Hạ tầng dữ liệu hiện đại: nền móng cho tăng trưởng bền vững"], ["SVTECH Life", "Văn hóa học hỏi và tinh thần kiến tạo tại SVTECH"]];

export function HomePage({ content }: { content: HomeContent }) {
  return <main>
    <section className="hero container"><Reveal className="hero-copy"><h1>{content.heroTitle}</h1><p>{content.heroSubtitle}</p><Link className="primary-button" href="/gioi-thieu/tai-sao-chon-svtech">Vì sao chọn SVTECH <Icon name="arrow" /></Link></Reveal>
      <div className="hero-art"><Image src="/assets/svtech/hero.svg" alt="" width={914} height={718} priority /></div>
      <div className="social-proof" aria-hidden="true"><span>●</span><span>●</span><span>●</span><b>♥</b> 99K +</div>
      <div className="offering-row">{offerings.map(([label, href, icon], index) => <Reveal delay={index * 90} key={label}><Link href={href}><span>{icon}</span>{label}</Link></Reveal>)}</div>
    </section>
    <section className="partners section"><div className="container"><Reveal><Link href="/khach-hang-doi-tac" className="outline-label">{content.partnerTitle}</Link></Reveal></div><LogoMarquee images={partners} folder="partners" /></section>
    <section className="services section container"><Reveal className="section-copy"><span className="eyebrow">{content.serviceEyebrow}</span><h2>{content.serviceTitle}</h2><p>{content.serviceDescription}</p><Link className="text-link" href="/dich-vu">Tất cả dịch vụ <Icon name="arrow" /></Link></Reveal><Reveal className="service-image" delay={120}><Image src="/assets/svtech/services.png" alt="Dịch vụ công nghệ SVTECH" width={948} height={635} /></Reveal></section>
    <section className="why section"><div className="container"><Reveal><span className="eyebrow">{content.whyEyebrow}</span><h2>{content.whyTitle}</h2><p className="lead">{content.body}</p></Reveal><div className="reason-grid">{reasons.map(([stat, title, desc], index) => <Reveal className="reason-card" delay={index * 100} key={title}><strong>{stat}</strong><h3>{title}</h3><p>{desc}</p></Reveal>)}</div></div><Image className="team-image" src="/assets/svtech/team.webp" alt="Đội ngũ SVTECH" width={2560} height={755} /></section>
    <SectionLabel text={content.customerTitle}/><HexMarquee images={clients} folder="clients" reverse/>
    <section className="fields section container"><Reveal className="fields-heading"><div className="fields-top"><span className="outline-label">LĨNH VỰC HOẠT ĐỘNG</span><Link className="primary-button" href="/gioi-thieu/linh-vuc-hoat-dong">Tìm hiểu thêm <Icon name="arrow" /></Link></div><h2>Đáp ứng mọi nhu cầu<br />chuyển đổi số</h2></Reveal><div className="field-grid">{fields.map(([image,title], index)=><Reveal className="field-item" delay={index*100} key={title}><Image src={`/assets/svtech/${image}`} alt="" width={206} height={201}/><span>0{index+1}</span><h3>{title}</h3></Reveal>)}</div></section>
    <SectionLabel text="CHỨNG CHỈ NĂNG LỰC"/><HexMarquee images={certificates} folder="why/certificates"/>
    <section className="careers section container"><Reveal className="career-banner"><Image src="/assets/svtech/career.jpg" alt="Cơ hội việc làm tại SVTECH" fill sizes="100vw"/><div><span className="outline-label">CƠ HỘI VIỆC LÀM</span><h2>Đồng hành phát triển,<br/>vươn xa sự nghiệp</h2><Link className="primary-button" href="/tuyen-dung">Khám phá cơ hội <Icon name="arrow"/></Link></div></Reveal><div className="jobs"><Reveal><h2>Sẵn sàng thỏa chí cùng SVTECH!</h2><p>Mới cập nhật</p></Reveal><div>{jobs.map(([title,date])=><Link href="/tuyen-dung" className="job-row" key={title}><span>{title}<small>{date}</small></span><Icon name="arrow"/></Link>)}</div></div></section>
    <section className="news section container"><Reveal><span className="eyebrow">{content.newsEyebrow}</span><h2>{content.newsTitle}</h2></Reveal><div className="news-grid">{news.map(([tag, title], index) => <Reveal className="news-card" delay={index * 100} key={title}><div className={`news-visual news-${index + 1}`}><span>SVTECH</span></div><small>{tag}</small><h3>{title}</h3><Link href="/tin-tuc-su-kien">Xem chi tiết <Icon name="arrow" /></Link></Reveal>)}</div></section>
    <section className="contact section"><div className="container contact-inner"><Reveal><h2>{content.contactTitle}</h2><p>{content.contactDescription}</p></Reveal><Reveal delay={100}><form className="contact-form"><input placeholder="Họ và tên" /><input placeholder="Email doanh nghiệp" /><textarea placeholder="Nội dung cần tư vấn" /><button type="button">Gửi yêu cầu <Icon name="arrow" /></button></form></Reveal></div></section>
  </main>;
}

function LogoMarquee({ images, folder, reverse = false }: { images: string[]; folder: string; reverse?: boolean }) {
  return <div className={`logo-marquee ${reverse ? "reverse" : ""}`}><div className="logo-marquee-track">{[...images, ...images].map((image,index)=><div className="logo-marquee-item" key={`${image}-${index}`}><Image src={`/assets/svtech/${folder}/${image}`} alt="" width={210} height={140}/></div>)}</div></div>;
}
function SectionLabel({text}:{text:string}) { return <div className="container why-section-label"><Reveal><span className="outline-label">{text}</span></Reveal></div>; }
function HexMarquee({images,folder,reverse=false}:{images:string[];folder:string;reverse?:boolean}) { return <div className={`logo-marquee why-marquee ${reverse?"reverse":""}`}><div className="logo-marquee-track">{[...images,...images].map((image,i)=><div className="logo-marquee-item" key={`${image}-${i}`}><Image src={`/assets/svtech/${folder}/${image}`} alt="" width={210} height={140}/></div>)}</div></div>; }
