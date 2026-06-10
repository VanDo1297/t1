import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return <footer className="footer"><div className="container footer-grid">
    <div className="footer-info">
      <Image src="/assets/svtech/dtg-logo.png" alt="DTG" width={130} height={60} />
      <p className="footer-company"><strong>CÔNG TY CỔ PHẦN CÔNG NGHỆ DTG</strong></p>
      <p>Doanh nghiệp tiên phong trong lĩnh vực hạ tầng số và trí tuệ nhân tạo thế hệ mới.</p>
      <p className="footer-contact-label"><strong>Liên hệ</strong></p>
      <p>41 Trần Khắc Chân, Phường Cầu Kiệu, Thành phố Hồ Chí Minh, Việt Nam</p>
      <p>DTG TP.HCM: (028) 3865 9999</p>
      <p>DTG Hà Nội: 0916 868 989</p>
      <p>DTG Hải Phòng: 0912 193 833</p>
      <p>(028) 3868 3639</p>
      <p>info@dtgcorp.com.vn</p>
    </div>
    <div><h3>Giới thiệu</h3><Link href="/gioi-thieu/cau-chuyen-thuong-hieu">Câu chuyện thương hiệu</Link><Link href="/gioi-thieu">Lịch sử hình thành và phát triển</Link><Link href="/gioi-thieu">Ban lãnh đạo</Link><Link href="/gioi-thieu">Năng lực nhân sự</Link><Link href="/dtg-life">Văn hóa DTG</Link><Link href="/gioi-thieu">Chứng nhận nổi bật</Link></div>
    <div><h3>Dịch vụ</h3><Link href="/dich-vu">Dịch vụ CNTT</Link><Link href="/dich-vu">Tích hợp hệ thống</Link><Link href="/dich-vu">Dịch vụ giám sát vận hành</Link><Link href="/dich-vu">Dịch vụ bảo mật</Link></div>
    <div><h3>Giải pháp</h3><Link href="/giai-phap">Giải pháp cho màn hình ghép</Link><Link href="/giai-phap">Giải pháp chuyển đổi số</Link></div>
    <div><h3>Liên kết</h3><Link href="/tin-tuc-su-kien">Tin dự án</Link><Link href="/tin-tuc-su-kien">Tin nội bộ</Link><Link href="/tin-tuc-su-kien">Tin công nghệ</Link><Link href="/tuyen-dung">Tuyển dụng</Link><Link href="/lien-he">Liên hệ</Link>
      <h3 className="footer-sub-heading">Pháp lý &amp; Hỗ trợ</h3><Link href="#">Chính sách bảo mật</Link><Link href="#">Điều khoản sử dụng</Link>
    </div>
  </div><div className="container footer-bottom"><span>© 2026 CÔNG TY CỔ PHẦN CÔNG NGHỆ DTG.</span><span>ISO 27001 &nbsp; ISO 9001</span></div></footer>;
}
