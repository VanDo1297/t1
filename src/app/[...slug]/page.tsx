import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Icon } from "@/components/icons";

export default async function PlaceholderPage({ params }: PageProps<"/[...slug]">) {
  const { slug } = await params;
  const titles: Record<string, string> = {
    "gioi-thieu": "Giới thiệu",
    "tai-sao-chon-svtech": "Tại sao chọn DTG",
    "linh-vuc-hoat-dong": "Lĩnh vực hoạt động",
    "cau-chuyen-thuong-hieu": "Câu chuyện thương hiệu",
    "khach-hang-doi-tac": "Khách hàng - Đối tác",
    "svtech-life": "DTG Life",
    "dich-vu": "Dịch vụ",
    "giai-phap": "Giải pháp",
    "tin-tuc-su-kien": "Tin tức & Sự kiện",
    "lien-he": "Liên hệ",
    "co-hoi-viec-lam": "Cơ hội việc làm",
    "tuyen-dung": "Tuyển dụng",
    "thuc-tap": "Thực tập",
    "blog-nghe-nghiep": "Blog nghề nghiệp",
  };
  const lastSlug = slug.at(-1) ?? "";
  const title = titles[lastSlug] ?? lastSlug.replaceAll("-", " ");
  return <><Header /><main className="placeholder-page"><div className="placeholder-orb" /><span>DTG</span><h1>{title}</h1><p>Nội dung trang đang được hoàn thiện. Điều hướng và trải nghiệm giao diện đã sẵn sàng để phát triển ở giai đoạn tiếp theo.</p><Link className="primary-button" href="/">Về trang chủ <Icon name="arrow" /></Link></main><Footer /></>;
}
