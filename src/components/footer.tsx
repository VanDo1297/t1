import Image from "next/image";
import Link from "next/link";
import { Icon } from "./icons";

export function Footer() {
  return <footer className="footer"><div className="container footer-grid">
    <div><Image src="/assets/svtech/logo-white.svg" alt="SVTECH" width={180} height={55} /><p>The Foundation of Success</p></div>
    <div><h3>Khám phá</h3><Link href="/gioi-thieu">Giới thiệu</Link><Link href="/dich-vu">Dịch vụ</Link><Link href="/giai-phap">Giải pháp</Link></div>
    <div><h3>Thông tin</h3><Link href="/tin-tuc-su-kien">Tin tức</Link><Link href="/co-hoi-viec-lam">Tuyển dụng</Link><Link href="/lien-he">Liên hệ</Link></div>
    <div><h3>Liên hệ</h3><p>028 7300 5544</p><p>info@svtech.com.vn</p><p>TP. Hồ Chí Minh, Việt Nam</p></div>
  </div><div className="container footer-bottom"><span>© SVTECH 2026. All rights reserved.</span><span>Chính sách bảo mật · Điều khoản sử dụng</span></div><Link href="/lien-he" className="floating-mail"><Icon name="mail" /></Link></footer>;
}
