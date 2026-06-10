"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { BrandStoryContent } from "@/lib/content";
import { Icon } from "./icons";
import { Reveal } from "./reveal";

const principleImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=900&auto=format&fit=crop",
];

export function BrandStoryPage({ content }: { content: BrandStoryContent }) {
  const [activePrinciple, setActivePrinciple] = useState(1);
  const changePrinciple = (direction: number) => {
    setActivePrinciple(current => (current + direction + content.principles.length) % content.principles.length);
  };
  const principleOrder = [-1, 0, 1].map(offset => (activePrinciple + offset + content.principles.length) % content.principles.length);

  return <main className="brand-page">
    <section className="brand-hero">
      <Image src="/assets/dtg-brand/banner.jpg" alt="" fill priority sizes="100vw"/>
      <div className="brand-hero-overlay"/>
      <Reveal className="container brand-hero-copy"><span>GIỚI THIỆU DTG</span><h1>{content.title}</h1><p>Công nghệ phục vụ con người, kiến tạo giá trị bền vững.</p></Reveal>
    </section>

    <div className="container breadcrumbs"><Link href="/">Trang chủ</Link><span>›</span><Link href="/gioi-thieu">Giới thiệu</Link><span>›</span><b>{content.title}</b></div>

    <section id="about-intro-brand" className="brand-intro section container">
      <Reveal className="brand-intro-copy"><span className="outline-label">CÂU CHUYỆN DTG</span><h2>Hành trình từ đam mê công nghệ đến những giá trị bền vững</h2>{content.introParagraphs.map(text=><p key={text}>{text}</p>)}<Link className="primary-button" href="/#contact">Liên hệ DTG <Icon name="arrow"/></Link></Reveal>
      <Reveal className="brand-intro-image" delay={120}><Image src="/assets/dtg-brand/banner.jpg" alt="Câu chuyện thương hiệu DTG" width={1330} height={884}/><span>2000<small>Năm khởi đầu hành trình DTG</small></span></Reveal>
    </section>

    <section className="brand-principles section">
      <div className="container">
        <div className="brand-principle-heading"><Reveal><span className="outline-label light">ĐỊNH HƯỚNG PHÁT TRIỂN</span><h2>Kiến tạo và phát triển</h2></Reveal><Reveal delay={100}><p>Ba định hướng cốt lõi dẫn lối DTG không ngừng đổi mới, nâng cao năng lực và tạo dựng những giá trị bền vững cho khách hàng, nhân viên và cộng đồng.</p></Reveal></div>
        <div className="brand-principle-stage">
          <div className="brand-principle-controls"><button type="button" aria-label="Định hướng trước" onClick={()=>changePrinciple(-1)}>←</button><button type="button" aria-label="Định hướng tiếp theo" onClick={()=>changePrinciple(1)}>→</button></div>
          <div className="brand-principle-grid">{principleOrder.map((itemIndex,position)=>{const item=content.principles[itemIndex];return <article className={`brand-principle-card ${position===1?"active":""}`} onClick={()=>setActivePrinciple(itemIndex)} key={`${activePrinciple}-${position}`}><div><Image src={principleImages[itemIndex]} alt="" width={900} height={900}/></div><span>0{itemIndex+1}</span><h3>{item.title}</h3><p>{item.description}</p></article>;})}</div>
        </div>
      </div>
    </section>

    <section id="about-intro-history" className="brand-history section container">
      <Reveal className="brand-heading"><span className="outline-label">LỊCH SỬ HÌNH THÀNH</span><h2>Những dấu mốc đáng nhớ</h2></Reveal>
      <div className="brand-timeline">{content.history.map((item,index)=><Reveal className="brand-history-item" delay={index*70} key={item.year}><strong>{item.year}</strong><div><h3>{item.title}</h3><p>{item.description}</p></div></Reveal>)}</div>
    </section>

    <section id="about-intro-leadership" className="brand-leadership section">
      <div className="container"><Reveal className="brand-heading light"><span className="outline-label light">BAN LÃNH ĐẠO</span><h2>Những người dẫn đường</h2></Reveal>
      <span id="about-intro-workforce" className="brand-anchor"/>
      <div className="brand-leader-grid">{content.leaders.map((leader,index)=><Reveal delay={index*80} key={leader.name}><article className="brand-leader-card">{index===0?<Image src="/assets/dtg-brand/leader.png" alt={leader.name} width={682} height={1024}/>:<div className="brand-leader-placeholder"><span>{leader.name.split(" ").at(-1)?.[0]}</span></div>}<h3>{leader.name}</h3><p>{leader.role}</p></article></Reveal>)}</div></div>
    </section>

    <section id="about-intro-culture" className="brand-culture section">
      <div className="container"><Reveal className="brand-heading light"><span className="outline-label light">VĂN HÓA DTG</span><h2>Gắn kết con người, nuôi dưỡng giá trị</h2></Reveal>
      <div className="brand-culture-orbit"><Reveal className="brand-culture-orbit-heading"><h3>Giá trị cốt lõi</h3><p>Những giá trị nền tảng luôn chuyển động và cùng nhau tạo nên sức mạnh DTG.</p></Reveal><div className="brand-orbit-layout">
        <div className="brand-orbit-copy left"><OrbitValue title="Tri thức & Sáng tạo" description="là nền tảng phát triển" symbol="✦"/><OrbitValue title="Đoàn kết" description="là sức mạnh" symbol="∞"/></div>
        <Reveal className="brand-orbit-system"><div className="brand-orbit-ring ring-one"><i/></div><div className="brand-orbit-ring ring-two"><i/></div><div className="brand-orbit-ring ring-three"><i/></div><strong>Giá trị cốt lõi</strong></Reveal>
        <div className="brand-orbit-copy right"><OrbitValue title="Sự tin cậy" description="là khởi đầu của tất cả" symbol="✓"/><OrbitValue title="Đồng hành" description="cùng khách hàng" symbol="◎"/></div>
      </div></div>
      <div className="brand-culture-row reverse"><Reveal><h3>Văn hóa công ty</h3><BulletList items={content.cultureActivities}/></Reveal><Reveal className="brand-culture-image" delay={100}><Image src="/assets/dtg-brand/culture.png" alt="Văn hóa công ty DTG" width={505} height={494}/></Reveal></div></div>
    </section>

    <section id="about-intro-certs" className="brand-certificates section container">
      <Reveal className="brand-heading"><span className="outline-label">CHỨNG NHẬN NỔI BẬT</span><h2>Năng lực được công nhận</h2></Reveal>
      <div className="brand-certificate-grid">{content.certificates.map((certificate,index)=><Reveal delay={index*80} key={certificate.title}><article><Image src={`/assets/dtg-brand/certificates/${certificate.image}`} alt={certificate.title} width={460} height={460}/><h3>{certificate.title}</h3></article></Reveal>)}</div>
    </section>
  </main>;
}

function BulletList({ items }: { items: string[] }) {
  return <ul>{items.map(item=><li key={item}>{item}</li>)}</ul>;
}

function OrbitValue({ title, description, symbol }: { title: string; description: string; symbol: string }) {
  return <Reveal className="brand-orbit-value"><span>{symbol}</span><div><h3>{title}</h3><p>{description}</p></div></Reveal>;
}
