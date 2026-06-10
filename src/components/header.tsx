"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "./icons";

const nav = [
  { label: "GIỚI THIỆU", href: "/gioi-thieu/cau-chuyen-thuong-hieu#about-intro-brand", children: [["Câu chuyện thương hiệu", "/gioi-thieu/cau-chuyen-thuong-hieu#about-intro-brand"], ["Lịch sử hình thành và phát triển", "/gioi-thieu/cau-chuyen-thuong-hieu#about-intro-history"], ["Ban lãnh đạo", "/gioi-thieu/cau-chuyen-thuong-hieu#about-intro-leadership"], ["Năng lực nhân sự", "/gioi-thieu/cau-chuyen-thuong-hieu#about-intro-workforce"], ["Văn hóa DTG", "/gioi-thieu/cau-chuyen-thuong-hieu#about-intro-culture"], ["Chứng nhận nổi bật", "/gioi-thieu/cau-chuyen-thuong-hieu#about-intro-certs"]] },
  { label: "DỊCH VỤ", href: "/dich-vu", children: [["Dịch vụ CNTT", "/dich-vu/it"], ["Tích hợp hệ thống", "/dich-vu/tich-hop-he-thong"], ["Giám sát vận hành", "/dich-vu/giam-sat-van-hanh"], ["Dịch vụ bảo mật", "/dich-vu/bao-mat"]] },
  { label: "GIẢI PHÁP", href: "/giai-phap", children: [["Giải pháp cho màn hình ghép", "/giai-phap/giai-phap-cho-man-hinh-ghep"], ["Giải pháp chuyển đổi số", "/giai-phap/giai-phap-chuyen-doi-so"]] },
  { label: "SẢN PHẨM", href: "/san-pham" },
  { label: "TIN TỨC", href: "/tin-tuc", children: [["Tin dự án", "/tin-tuc/du-an"], ["Tin nội bộ", "/tin-tuc/noi-bo"], ["Tin công nghệ", "/tin-tuc/cong-nghe"]] },
  { label: "TUYỂN DỤNG", href: "/tuyen-dung" },
  { label: "LIÊN HỆ", href: "/lien-he" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return <>
    <header className="site-header"><div className="container header-inner">
      <button className="icon-button mobile-only" aria-label="Mở menu" onClick={() => setMenuOpen(true)}><Icon name="menu" /></button>
      <Link href="/" className="logo"><Image src="/assets/svtech/dtg-logo.png" alt="DTG" width={130} height={60} priority /></Link>
      <nav className="desktop-nav" aria-label="Điều hướng chính">{nav.map((item) => <div className="nav-item" key={item.href}>
        <Link href={item.href}>{item.label}{item.children && <span>⌄</span>}</Link>
        {item.children && <div className="dropdown">{item.children.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div>}
      </div>)}</nav>
      <div className="header-actions"><button className="icon-button" aria-label="Tìm kiếm" onClick={() => setSearchOpen(true)}><Icon name="search" /></button><button className="language-button"><Icon name="globe" />EN</button></div>
    </div></header>
    <div className={`overlay ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)} />
    <aside className={`mobile-menu ${menuOpen ? "open" : ""}`}><div className="mobile-menu-head"><Image src="/assets/svtech/dtg-logo.png" alt="DTG" width={130} height={60} /><button className="icon-button" onClick={() => setMenuOpen(false)}><Icon name="close" /></button></div><nav>{nav.map((item) => <Link href={item.href} onClick={() => setMenuOpen(false)} key={item.href}>{item.label}<Icon name="arrow" /></Link>)}</nav></aside>
    <div className={`search-modal ${searchOpen ? "open" : ""}`}><button className="icon-button search-close" onClick={() => setSearchOpen(false)}><Icon name="close" /></button><form onSubmit={(event) => event.preventDefault()}><label htmlFor="site-search">Bạn đang tìm kiếm điều gì?</label><div><input id="site-search" placeholder="Nhập từ khóa..." /><button aria-label="Tìm"><Icon name="search" /></button></div></form></div>
  </>;
}
