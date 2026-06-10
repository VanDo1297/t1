import Image from "next/image";
import Link from "next/link";
import type { ServicesContent } from "@/lib/content";
import { Icon } from "./icons";
import { Reveal } from "./reveal";

export function ServicesPage({ content }: { content: ServicesContent }) {
  return <main className="services-page">
    <section className="services-hero">
      <Image src="/assets/svtech/services/service-4.jpg" alt="" fill priority sizes="100vw"/>
      <div className="services-hero-overlay"/>
      <Reveal className="container services-hero-copy">
        <span>DỊCH VỤ DTG</span>
        <h1>{content.title}</h1>
        <p>{content.subtitle}</p>
      </Reveal>
    </section>

    <div className="container breadcrumbs"><Link href="/">Trang chủ</Link><span>›</span><b>Dịch vụ</b></div>

    <section className="services-intro section container">
      <Reveal><span className="outline-label">GIỚI THIỆU</span><h2>{content.introTitle}</h2></Reveal>
      <Reveal delay={100}><p>{content.introDescription}</p></Reveal>
    </section>

    <nav className="services-anchor-nav" aria-label="Danh mục dịch vụ">
      <div className="container">{content.groups.map(group=><Link href={`#${group.id}`} key={group.id}><span>{group.number}</span>{group.title}</Link>)}</div>
    </nav>

    <div className="services-groups">{content.groups.map((group,index)=>
      <section id={group.id} className={`service-group section ${index%2 ? "reverse" : ""}`} key={group.id}>
        <div className="container service-group-layout">
          <Reveal className="service-group-visual">
            <Image src={group.image} alt={group.title} width={1100} height={850}/>
            <span>{group.number}</span>
          </Reveal>
          <div className="service-group-content">
            <Reveal><span className="outline-label">DỊCH VỤ {group.number}</span><h2>{group.title}</h2><p className="service-group-lead">{group.description}</p></Reveal>
            <div className="service-detail-grid">{group.items.map((item,itemIndex)=><Reveal delay={itemIndex*65} key={item.title}><article><span>0{itemIndex+1}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article></Reveal>)}</div>
          </div>
        </div>
      </section>
    )}</div>

    <section className="services-benefits section">
      <div className="container"><Reveal className="services-benefit-heading"><span className="outline-label light">CÁCH DTG ĐỒNG HÀNH</span><h2>Dịch vụ được thiết kế để tạo giá trị dài hạn</h2></Reveal>
      <div className="services-benefit-grid">{content.benefits.map((item,index)=><Reveal delay={index*80} key={item.number}><article><strong>{item.number}</strong><h3>{item.title}</h3><p>{item.description}</p></article></Reveal>)}</div></div>
    </section>

    <section className="services-contact section container">
      <Reveal className="services-contact-copy"><span className="outline-label light">LIÊN HỆ TƯ VẤN</span><h2>{content.contactTitle}</h2><p>{content.contactDescription}</p></Reveal>
      <Reveal delay={100}><form className="services-contact-form"><label>Họ tên *<input type="text" /></label><label>Email *<input type="email" /></label><label>Số điện thoại *<input type="tel" /></label><label>Nhu cầu tư vấn<textarea /></label><button type="button">Gửi thông tin <Icon name="arrow"/></button></form></Reveal>
    </section>
  </main>;
}
