"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { HomeContent } from "@/lib/content";
import { CountUp } from "./count-up";
import { Icon } from "./icons";
import { Reveal } from "./reveal";

const serviceImages = [
  "/assets/svtech/services/service-1.jpg",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/vector-1738324830509-8ec5b04e7297?q=80&w=1324&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1688413399498-e35ed74b554f?q=80&w=687&auto=format&fit=crop",
];
const productImages = ["field-1.png", "field-2.png", "field-3.png"];

export function HomePage({ content }: { content: HomeContent }) {
  const [activeSolution, setActiveSolution] = useState<number | null>(null);
  const [newsIndex, setNewsIndex] = useState(0);
  const [assessmentStep, setAssessmentStep] = useState(0);
  const [assessmentAnswers, setAssessmentAnswers] = useState<string[]>([]);
  const [assessmentResult, setAssessmentResult] = useState(false);
  const visibleNews = [0, 1, 2].map(offset => content.news[(newsIndex + offset) % content.news.length]);

  const selectAssessment = (answer: string) => {
    setAssessmentAnswers(current => {
      const next = [...current];
      next[assessmentStep] = answer;
      return next;
    });
  };

  const nextAssessment = () => {
    if (!assessmentAnswers[assessmentStep]) return;
    if (assessmentStep === content.assessmentSteps.length - 1) setAssessmentResult(true);
    else setAssessmentStep(step => step + 1);
  };

  const resetAssessment = () => {
    setAssessmentStep(0);
    setAssessmentAnswers([]);
    setAssessmentResult(false);
  };

  return <main className="dtg-home">
    <section className="hero dtg-video-hero">
      <video className="hero-video" src="https://homepage.dtgsoft.vn/api/v1/public/media/54cabb07-4d47-4c49-829f-1bd933ff5e29/file" autoPlay muted loop playsInline />
      <div className="hero-overlay"><Reveal className="hero-copy"><span className="dtg-hero-kicker">CÔNG TY CỔ PHẦN CÔNG NGHỆ DTG</span><h1>{content.heroTitle}</h1><p>{content.heroSubtitle}</p><div className="dtg-hero-actions"><Link className="primary-button" href="#assessment">{content.heroPrimaryButton} <Icon name="arrow" /></Link><Link className="dtg-secondary-button" href="/gioi-thieu/cau-chuyen-thuong-hieu">{content.heroSecondaryButton}</Link></div></Reveal></div>
    </section>

    <section id="about" className="dtg-about-stats section container">
      <Reveal className="dtg-stat-heading"><span className="outline-label">22+ NĂM KINH NGHIỆM</span><h2>{content.aboutTitle}</h2></Reveal>
      <div className="dtg-stat-grid">{content.stats.map((stat, index) => <Reveal className="dtg-stat-card" delay={index * 70} key={stat.label}><strong><AnimatedStat value={stat.value}/></strong><h3>{stat.label}</h3><p>{stat.description}</p></Reveal>)}</div>
    </section>

    <section className="dtg-solutions section">
      <div className="container dtg-heading light"><Reveal><span className="outline-label light">GIẢI PHÁP CÔNG NGHỆ</span><h2>{content.solutionsTitle}</h2><p>{content.solutionsDescription}</p></Reveal></div>
      <div className="container dtg-tech-solution-grid">{content.solutions.map((solution, index) => <Reveal delay={index * 60} key={solution.title}><button type="button" className="dtg-tech-solution-card" onClick={() => setActiveSolution(index)}><span>0{index + 1}</span><div><h3>{solution.title}</h3><p>{solution.description}</p></div><b>Xem chi tiết <Icon name="arrow"/></b></button></Reveal>)}</div>
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

    <SectionLabel text={content.partnerTitle}/><TextMarquee items={content.partnerNames}/>
    <SectionLabel text={content.customerTitle}/><TextMarquee items={content.customerNames} reverse/>

    <section id="assessment" className="dtg-assessment section">
      <div className="container"><Reveal className="dtg-assessment-heading"><span className="outline-label light">CÔNG CỤ THÔNG MINH</span><h2>{content.assessmentTitle}</h2><p>{content.assessmentDescription}</p></Reveal>
        <Reveal className="dtg-assessment-card" delay={100}>
          {!assessmentResult ? <><div className="dtg-assessment-progress"><strong>{content.assessmentSteps[assessmentStep].label}</strong><div>{content.assessmentSteps.map((_,index)=><i className={index===assessmentStep?"active":""} key={index}/>)}</div></div>
          <h3>{content.assessmentSteps[assessmentStep].title}</h3><div className="dtg-assessment-options">{content.assessmentSteps[assessmentStep].options.map(option=><button className={assessmentAnswers[assessmentStep]===option.title?"active":""} type="button" onClick={()=>selectAssessment(option.title)} key={option.title}><span/><div><strong>{option.title}</strong><p>{option.description}</p></div></button>)}</div>
          <div className="dtg-assessment-actions"><button type="button" disabled={assessmentStep===0} onClick={()=>setAssessmentStep(step=>step-1)}>Quay lại</button><button type="button" disabled={!assessmentAnswers[assessmentStep]} onClick={nextAssessment}>{assessmentStep===content.assessmentSteps.length-1?"Nhận đề xuất ngay":"Tiếp tục"} <Icon name="arrow"/></button></div></>
          : <AssessmentResult answers={assessmentAnswers} onReset={resetAssessment}/>}
        </Reveal>
      </div>
    </section>

    <section className="news section container"><div className="dtg-news-heading"><Reveal className="dtg-heading"><span className="outline-label">TIN TỨC & SỰ KIỆN</span><h2>{content.newsTitle}</h2><p>{content.newsDescription}</p></Reveal><div className="dtg-carousel-controls"><button type="button" aria-label="Tin trước" onClick={()=>setNewsIndex(index=>(index-1+content.news.length)%content.news.length)}>←</button><button type="button" aria-label="Tin tiếp theo" onClick={()=>setNewsIndex(index=>(index+1)%content.news.length)}>→</button></div></div><div className="news-grid dtg-news-carousel">{visibleNews.map((item,index)=><Reveal className="news-card" delay={index*70} key={`${newsIndex}-${item.title}`}><div className="dtg-news-visual"><Image className="dtg-news-image" src={item.image} alt="" width={900} height={560}/><span>{item.date}</span></div><small>{item.category}</small><h3>{item.title}</h3><p>{item.description}</p><Link href="/tin-tuc-su-kien">Đọc bài viết <Icon name="arrow"/></Link></Reveal>)}</div></section>

    {activeSolution !== null && <SolutionDialog solution={content.solutions[activeSolution]} onClose={()=>setActiveSolution(null)}/>}
  </main>;
}

function SolutionDialog({solution,onClose}:{solution:HomeContent["solutions"][number];onClose:()=>void}) {
  return <div className="dtg-dialog-backdrop" onClick={onClose}><section role="dialog" aria-modal="true" aria-label={solution.title} className="dtg-solution-dialog" onClick={event=>event.stopPropagation()}><button type="button" className="dtg-dialog-close" aria-label="Đóng" onClick={onClose}><Icon name="close"/></button><span>{solution.tag}</span><h2>{solution.title}</h2><p>{solution.description}</p><h3>Mô-đun giải pháp thiết yếu</h3><div>{solution.modules.map(module=><article key={module.title}><strong>{module.title}</strong><p>{module.description}</p></article>)}</div><Link href="#assessment" onClick={onClose}>Tự đánh giá nhu cầu <Icon name="arrow"/></Link></section></div>;
}

function AssessmentResult({answers,onReset}:{answers:string[];onReset:()=>void}) {
  return <div className="dtg-assessment-result"><span>ĐỀ XUẤT KIẾN TRÚC GIẢI PHÁP TỪ DTG AI</span><h3>Lộ trình công nghệ được thiết kế riêng cho doanh nghiệp</h3><div className="dtg-assessment-summary">{answers.map(answer=><b key={answer}>{answer}</b>)}</div><p>Dựa trên nhu cầu đã chọn, DTG đề xuất bắt đầu bằng đánh giá hiện trạng và rủi ro, xây dựng kiến trúc tích hợp phù hợp, sau đó triển khai theo từng giai đoạn có đo lường. Đội ngũ chuyên gia sẽ đồng hành tối ưu hạ tầng, bảo mật và vận hành 24/7.</p><div className="dtg-assessment-actions"><button type="button" onClick={onReset}>Đánh giá lại</button><Link href="/lien-he">Đăng ký nhận tư vấn <Icon name="arrow"/></Link></div></div>;
}

function SectionLabel({text}:{text:string}) { return <div className="container why-section-label"><Reveal><span className="outline-label">{text}</span></Reveal></div>; }
function TextMarquee({items,reverse=false}:{items:string[];reverse?:boolean}) { return <Reveal><div className={`dtg-text-marquee ${reverse?"reverse":""}`}><div>{[...items,...items].map((item,index)=><span key={`${item}-${index}`}>{item}</span>)}</div></div></Reveal>; }
function AnimatedStat({value}:{value:string}) { const match=value.match(/^(\d+)(.*)$/); return match?<CountUp value={Number(match[1])} suffix={match[2]}/>:value; }
