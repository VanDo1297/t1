"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "./icons";

const nav = [
  { label: "GIỚI THIỆU", href: "/gioi-thieu", children: [["Tại sao chọn SVTECH", "/gioi-thieu/tai-sao-chon-svtech"], ["Lĩnh vực hoạt động", "/gioi-thieu/linh-vuc-hoat-dong"], ["Câu chuyện thương hiệu", "/gioi-thieu/cau-chuyen-thuong-hieu"], ["Khách hàng - Đối tác", "/khach-hang-doi-tac"]] },
  { label: "SVTECH LIFE", href: "/svtech-life" },
  { label: "DỊCH VỤ", href: "/dich-vu" },
  { label: "GIẢI PHÁP", href: "/giai-phap" },
  { label: "TIN TỨC", href: "/tin-tuc-su-kien" },
  { label: "LIÊN HỆ", href: "/lien-he" },
  { label: "TUYỂN DỤNG", href: "/co-hoi-viec-lam", children: [["Cùng thỏa chí", "/co-hoi-viec-lam"], ["Việc làm", "/tuyen-dung"], ["Thực tập", "/thuc-tap"], ["Blog nghề nghiệp", "/blog-nghe-nghiep"]] },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return <>
    <header className="site-header"><div className="container header-inner">
      <button className="icon-button mobile-only" aria-label="Mở menu" onClick={() => setMenuOpen(true)}><Icon name="menu" /></button>
      <Link href="/" className="logo"><Image src="/assets/svtech/logo.svg" alt="SVTECH" width={164} height={48} priority /></Link>
      <nav className="desktop-nav" aria-label="Điều hướng chính">{nav.map((item) => <div className="nav-item" key={item.href}>
        <Link href={item.href}>{item.label}{item.children && <span>⌄</span>}</Link>
        {item.children && <div className="dropdown">{item.children.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div>}
      </div>)}</nav>
      <div className="header-actions"><button className="icon-button" aria-label="Tìm kiếm" onClick={() => setSearchOpen(true)}><Icon name="search" /></button><button className="language-button"><Icon name="globe" />EN</button></div>
    </div></header>
    <div className={`overlay ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)} />
    <aside className={`mobile-menu ${menuOpen ? "open" : ""}`}><div className="mobile-menu-head"><Image src="/assets/svtech/logo.svg" alt="SVTECH" width={145} height={42} /><button className="icon-button" onClick={() => setMenuOpen(false)}><Icon name="close" /></button></div><nav>{nav.map((item) => <Link href={item.href} onClick={() => setMenuOpen(false)} key={item.href}>{item.label}<Icon name="arrow" /></Link>)}</nav></aside>
    <div className={`search-modal ${searchOpen ? "open" : ""}`}><button className="icon-button search-close" onClick={() => setSearchOpen(false)}><Icon name="close" /></button><form onSubmit={(event) => event.preventDefault()}><label htmlFor="site-search">Bạn đang tìm kiếm điều gì?</label><div><input id="site-search" placeholder="Nhập từ khóa..." /><button aria-label="Tìm"><Icon name="search" /></button></div></form></div>
  </>;
}
