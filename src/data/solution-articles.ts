import type { SolutionArticleItem, SolutionArticleDetail } from "@/sanity/queries";

// ── Fallback articles for cong-nghe sub-solutions (listing) ──

export const solutionArticlesFallback: Record<string, SolutionArticleItem[]> = {
  "an-toan-thong-tin": [
    {
      slug: "zero-trust-network-access",
      title: "ZERO TRUST NETWORK ACCESS – BẢO MẬT KHÔNG BIÊN GIỚI CHO DOANH NGHIỆP",
      excerpt: "Mô hình Zero Trust đang thay đổi cách doanh nghiệp tiếp cận bảo mật mạng. Tìm hiểu cách triển khai ZTNA để bảo vệ hệ thống toàn diện.",
      solutionCategory: "an-toan-thong-tin",
      publishedAt: "2026-06-10T00:00:00Z",
      thumbnailUrl: null,
    },
    {
      slug: "ngfw-next-gen-firewall",
      title: "NEXT-GENERATION FIREWALL – TƯỜNG LỬA THẾ HỆ MỚI BẢO VỆ DOANH NGHIỆP",
      excerpt: "Tường lửa thế hệ mới (NGFW) tích hợp AI giúp phát hiện và ngăn chặn các mối đe dọa tinh vi trong thời gian thực.",
      solutionCategory: "an-toan-thong-tin",
      publishedAt: "2026-05-20T00:00:00Z",
      thumbnailUrl: null,
    },
    {
      slug: "iam-pam-quan-ly-danh-tinh",
      title: "IAM/PAM – QUẢN LÝ DANH TÍNH VÀ QUYỀN TRUY CẬP ĐẶC QUYỀN",
      excerpt: "Giải pháp quản lý danh tính (IAM) và quản lý quyền truy cập đặc quyền (PAM) là nền tảng của bảo mật doanh nghiệp hiện đại.",
      solutionCategory: "an-toan-thong-tin",
      publishedAt: "2026-04-15T00:00:00Z",
      thumbnailUrl: null,
    },
  ],
  "trung-tam-du-lieu": [
    {
      slug: "hybrid-cloud-doanh-nghiep",
      title: "HYBRID CLOUD – GIẢI PHÁP ĐÁM MÂY LAI TỐI ƯU CHO DOANH NGHIỆP",
      excerpt: "Hybrid Cloud kết hợp ưu điểm của đám mây công cộng và riêng, giúp doanh nghiệp tối ưu chi phí và hiệu suất.",
      solutionCategory: "trung-tam-du-lieu",
      publishedAt: "2026-06-05T00:00:00Z",
      thumbnailUrl: null,
    },
    {
      slug: "ao-hoa-ha-tang-vmware",
      title: "ẢO HÓA HẠ TẦNG VỚI VMWARE – TỐI ƯU TÀI NGUYÊN DATA CENTER",
      excerpt: "Ảo hóa hạ tầng giúp doanh nghiệp giảm chi phí phần cứng, tăng tính linh hoạt và đơn giản hóa quản trị Data Center.",
      solutionCategory: "trung-tam-du-lieu",
      publishedAt: "2026-05-10T00:00:00Z",
      thumbnailUrl: null,
    },
    {
      slug: "luu-tru-doanh-nghiep-san-nas",
      title: "GIẢI PHÁP LƯU TRỮ DOANH NGHIỆP – SAN, NAS VÀ OBJECT STORAGE",
      excerpt: "Lựa chọn giải pháp lưu trữ phù hợp giữa SAN, NAS và Object Storage cho nhu cầu dữ liệu ngày càng tăng.",
      solutionCategory: "trung-tam-du-lieu",
      publishedAt: "2026-04-01T00:00:00Z",
      thumbnailUrl: null,
    },
  ],
  "he-thong-mang": [
    {
      slug: "sd-wan-ket-noi-chi-nhanh",
      title: "SD-WAN – KẾT NỐI CHI NHÁNH THÔNG MINH VÀ TIẾT KIỆM",
      excerpt: "SD-WAN giúp doanh nghiệp kết nối các chi nhánh với hiệu suất cao, chi phí thấp và quản lý tập trung.",
      solutionCategory: "he-thong-mang",
      publishedAt: "2026-06-08T00:00:00Z",
      thumbnailUrl: null,
    },
    {
      slug: "wifi-6e-doanh-nghiep",
      title: "WIFI 6E – NÂNG CẤP MẠNG KHÔNG DÂY DOANH NGHIỆP",
      excerpt: "WiFi 6E mang đến băng thông rộng hơn, độ trễ thấp hơn và khả năng phục vụ nhiều thiết bị đồng thời.",
      solutionCategory: "he-thong-mang",
      publishedAt: "2026-05-15T00:00:00Z",
      thumbnailUrl: null,
    },
    {
      slug: "he-thong-hoi-nghi-truyen-hinh",
      title: "HỆ THỐNG HỘI NGHỊ TRUYỀN HÌNH – KẾT NỐI KHÔNG GIỚI HẠN",
      excerpt: "Giải pháp hội nghị truyền hình chất lượng cao cho doanh nghiệp, hỗ trợ làm việc từ xa hiệu quả.",
      solutionCategory: "he-thong-mang",
      publishedAt: "2026-04-20T00:00:00Z",
      thumbnailUrl: null,
    },
  ],
  "bao-ve-du-lieu": [
    {
      slug: "backup-disaster-recovery",
      title: "BACKUP & DISASTER RECOVERY – BẢO VỆ DỮ LIỆU TOÀN DIỆN",
      excerpt: "Giải pháp sao lưu và phục hồi sau thảm họa đảm bảo tính liên tục của kinh doanh trước mọi rủi ro.",
      solutionCategory: "bao-ve-du-lieu",
      publishedAt: "2026-06-12T00:00:00Z",
      thumbnailUrl: null,
    },
    {
      slug: "phong-chong-ransomware",
      title: "PHÒNG CHỐNG RANSOMWARE – BẢO VỆ DOANH NGHIỆP TRƯỚC MÃ ĐỘC TỐNG TIỀN",
      excerpt: "Ransomware là mối đe dọa hàng đầu. Tìm hiểu chiến lược phòng chống và phục hồi khi bị tấn công.",
      solutionCategory: "bao-ve-du-lieu",
      publishedAt: "2026-05-25T00:00:00Z",
      thumbnailUrl: null,
    },
    {
      slug: "immutable-backup-bao-ve-du-lieu",
      title: "IMMUTABLE BACKUP – SAO LƯU KHÔNG THỂ THAY ĐỔI CHO AN TOÀN TUYỆT ĐỐI",
      excerpt: "Immutable Backup đảm bảo dữ liệu sao lưu không thể bị xóa hoặc mã hóa bởi ransomware hay lỗi con người.",
      solutionCategory: "bao-ve-du-lieu",
      publishedAt: "2026-04-10T00:00:00Z",
      thumbnailUrl: null,
    },
  ],
};

// ── Fallback article details (body paragraphs) ──

export const solutionArticleDetailsFallback: Record<string, { fallbackBody: string[] }> = {
  // cong-nghe articles
  "zero-trust-network-access": {
    fallbackBody: [
      "Mô hình Zero Trust Network Access (ZTNA) đang trở thành tiêu chuẩn mới trong bảo mật doanh nghiệp, thay thế VPN truyền thống với nguyên tắc \"không bao giờ tin tưởng, luôn xác minh\".",
      "ZTNA hoạt động dựa trên nguyên tắc quyền truy cập tối thiểu (Least Privilege), chỉ cấp quyền truy cập vào các tài nguyên cụ thể mà người dùng cần, thay vì cho phép truy cập toàn bộ mạng như VPN.",
      "DTG cung cấp giải pháp ZTNA toàn diện bao gồm: Xác thực đa yếu tố (MFA), Micro-segmentation, Giám sát liên tục và phân tích hành vi, Tích hợp với hệ thống IAM/PAM hiện có.",
    ],
  },
  "ngfw-next-gen-firewall": {
    fallbackBody: [
      "Tường lửa thế hệ mới (NGFW) không chỉ lọc gói tin mà còn tích hợp nhiều tính năng bảo mật tiên tiến như IPS, Application Control, SSL Inspection và Threat Intelligence.",
      "Với sự hỗ trợ của AI và Machine Learning, NGFW có thể phát hiện và ngăn chặn các mối đe dọa zero-day, malware chưa biết và các kỹ thuật tấn công tinh vi nhất.",
      "DTG là đối tác của các hãng NGFW hàng đầu như Palo Alto Networks, Fortinet và Check Point, cung cấp giải pháp phù hợp với mọi quy mô doanh nghiệp.",
    ],
  },
  "iam-pam-quan-ly-danh-tinh": {
    fallbackBody: [
      "Identity & Access Management (IAM) và Privileged Access Management (PAM) là hai trụ cột quan trọng trong chiến lược bảo mật Zero Trust.",
      "IAM quản lý danh tính và quyền truy cập cho tất cả người dùng, trong khi PAM tập trung vào bảo vệ các tài khoản đặc quyền — mục tiêu hàng đầu của tin tặc.",
      "DTG triển khai giải pháp IAM/PAM giúp doanh nghiệp: Quản lý tập trung danh tính, Thực thi chính sách MFA, Ghi lại phiên làm việc đặc quyền, Tự động hóa quy trình cấp/thu hồi quyền.",
    ],
  },
  "hybrid-cloud-doanh-nghiep": {
    fallbackBody: [
      "Hybrid Cloud cho phép doanh nghiệp kết hợp linh hoạt giữa hạ tầng on-premise, private cloud và public cloud để tối ưu chi phí và hiệu suất.",
      "Với Hybrid Cloud, doanh nghiệp có thể giữ dữ liệu nhạy cảm tại chỗ trong khi tận dụng khả năng mở rộng của đám mây công cộng cho các workload biến động.",
      "DTG tư vấn và triển khai giải pháp Hybrid Cloud với các nền tảng hàng đầu như VMware, Microsoft Azure Stack và AWS Outposts.",
    ],
  },
  "ao-hoa-ha-tang-vmware": {
    fallbackBody: [
      "Ảo hóa hạ tầng cho phép chạy nhiều máy ảo trên cùng một máy chủ vật lý, giúp tối ưu tài nguyên phần cứng lên đến 80%.",
      "VMware vSphere là nền tảng ảo hóa hàng đầu thế giới, cung cấp tính năng High Availability, vMotion và Distributed Resource Scheduler.",
      "DTG đã triển khai hàng trăm dự án ảo hóa cho doanh nghiệp Việt Nam, từ quy mô nhỏ đến các Data Center lớn.",
    ],
  },
  "luu-tru-doanh-nghiep-san-nas": {
    fallbackBody: [
      "Dữ liệu doanh nghiệp tăng trưởng theo cấp số nhân, đòi hỏi giải pháp lưu trữ phù hợp: SAN cho hiệu suất cao, NAS cho chia sẻ file, Object Storage cho dữ liệu phi cấu trúc.",
      "Việc lựa chọn giải pháp lưu trữ phụ thuộc vào loại workload, yêu cầu IOPS, dung lượng và ngân sách của doanh nghiệp.",
      "DTG tư vấn và triển khai giải pháp lưu trữ từ các hãng hàng đầu như Dell EMC, NetApp, HPE và Pure Storage.",
    ],
  },
  "sd-wan-ket-noi-chi-nhanh": {
    fallbackBody: [
      "SD-WAN (Software-Defined WAN) giúp doanh nghiệp kết nối các chi nhánh với hiệu suất cao, chi phí thấp hơn so với MPLS truyền thống.",
      "Với SD-WAN, doanh nghiệp có thể sử dụng nhiều loại kết nối (MPLS, Internet, 4G/5G) và tự động chọn đường đi tối ưu cho từng ứng dụng.",
      "DTG triển khai giải pháp SD-WAN từ các hãng Fortinet, Palo Alto Networks và Cisco, tích hợp bảo mật SASE cho bảo vệ toàn diện.",
    ],
  },
  "wifi-6e-doanh-nghiep": {
    fallbackBody: [
      "WiFi 6E mở rộng phổ tần sang băng tần 6GHz, mang đến băng thông rộng hơn gấp 3 lần so với WiFi 6.",
      "Với WiFi 6E, doanh nghiệp có thể phục vụ nhiều thiết bị IoT, hội nghị video chất lượng cao và ứng dụng thời gian thực mà không bị nghẽn.",
      "DTG tư vấn thiết kế và triển khai hệ thống WiFi doanh nghiệp từ khảo sát site survey đến tối ưu hiệu suất.",
    ],
  },
  "he-thong-hoi-nghi-truyen-hinh": {
    fallbackBody: [
      "Hệ thống hội nghị truyền hình hiện đại cho phép kết nối đa điểm với chất lượng hình ảnh 4K và âm thanh Hi-Fi.",
      "Từ phòng họp nhỏ đến hội trường lớn, DTG cung cấp giải pháp phù hợp với mọi không gian và nhu cầu sử dụng.",
      "Tích hợp với các nền tảng Microsoft Teams, Zoom và Google Meet, đảm bảo tương thích và dễ sử dụng.",
    ],
  },
  "backup-disaster-recovery": {
    fallbackBody: [
      "Backup & Disaster Recovery (DR) là giải pháp thiết yếu để đảm bảo tính liên tục của kinh doanh. Theo thống kê, 60% doanh nghiệp mất dữ liệu sẽ đóng cửa trong vòng 6 tháng.",
      "Giải pháp DR hiện đại bao gồm: Backup tự động theo lịch, Replication real-time đến DR site, RTO/RPO linh hoạt theo nhu cầu, Kiểm thử DR định kỳ.",
      "DTG triển khai giải pháp Backup & DR với Veeam, Zerto và Dell EMC, đã bảo vệ dữ liệu cho hàng trăm doanh nghiệp.",
    ],
  },
  "phong-chong-ransomware": {
    fallbackBody: [
      "Ransomware đã trở thành mối đe dọa số 1 cho doanh nghiệp, với thiệt hại trung bình lên đến hàng triệu USD mỗi vụ tấn công.",
      "Chiến lược phòng chống ransomware toàn diện bao gồm: Phòng ngừa (endpoint protection, email security), Phát hiện (EDR, SIEM), Phản hồi (incident response), Phục hồi (immutable backup).",
      "DTG cung cấp giải pháp phòng chống ransomware đa lớp, kết hợp công nghệ và dịch vụ chuyên gia 24/7.",
    ],
  },
  "immutable-backup-bao-ve-du-lieu": {
    fallbackBody: [
      "Immutable Backup tạo ra các bản sao lưu không thể bị sửa đổi hoặc xóa trong khoảng thời gian được quy định, kể cả bởi quản trị viên hệ thống.",
      "Đây là tuyến phòng thủ cuối cùng khi ransomware đã xâm nhập và mã hóa toàn bộ hệ thống, đảm bảo doanh nghiệp luôn có bản sao lưu sạch để phục hồi.",
      "DTG triển khai Immutable Backup với các giải pháp Veeam Hardened Repository, Dell PowerProtect Cyber Recovery và AWS S3 Object Lock.",
    ],
  },

  // an-ninh-mang detail articles
  "kiem-thu-xam-nhap": {
    fallbackBody: [
      "Kiểm thử xâm nhập (Penetration Testing) là phương pháp đánh giá bảo mật bằng cách mô phỏng các cuộc tấn công thực tế vào hệ thống CNTT của doanh nghiệp.",
      "Đội ngũ chuyên gia DTG thực hiện kiểm thử theo các tiêu chuẩn quốc tế OWASP, PTES và OSSTMM, bao gồm: Kiểm thử ứng dụng web/mobile, Kiểm thử hạ tầng mạng, Kiểm thử mạng không dây, Social Engineering.",
      "Sau mỗi đợt kiểm thử, DTG cung cấp báo cáo chi tiết với đánh giá mức độ rủi ro, bằng chứng khai thác và khuyến nghị khắc phục cụ thể. Đội ngũ cũng hỗ trợ kiểm tra lại sau khi khắc phục để đảm bảo lỗ hổng đã được xử lý triệt để.",
    ],
  },
  "danh-gia-an-toan": {
    fallbackBody: [
      "Security Assessment là quy trình đánh giá toàn diện hiện trạng an toàn thông tin của tổ chức, từ chính sách, quy trình đến hạ tầng kỹ thuật.",
      "DTG thực hiện đánh giá theo các tiêu chuẩn ISO 27001, NIST CSF và CIS Controls, bao gồm: Đánh giá chính sách và quy trình, Kiểm tra cấu hình hệ thống, Phân tích kiến trúc bảo mật, Đánh giá nhận thức nhân viên.",
      "Kết quả đánh giá giúp doanh nghiệp hiểu rõ điểm mạnh, điểm yếu trong hệ thống bảo mật và có lộ trình cải thiện phù hợp với ngân sách và ưu tiên kinh doanh.",
    ],
  },
  "soc": {
    fallbackBody: [
      "Security Operations Center (SOC) là trung tâm giám sát và ứng phó an ninh mạng 24/7, sử dụng SIEM, SOAR và EDR để phát hiện và xử lý mối đe dọa.",
      "Dịch vụ SOC của DTG bao gồm: Giám sát liên tục 24/7/365, Phân tích và điều tra sự cố, Threat Hunting chủ động, Báo cáo định kỳ và real-time dashboard.",
      "Với đội ngũ chuyên gia SOC giàu kinh nghiệm và nền tảng công nghệ tiên tiến, DTG giúp doanh nghiệp phát hiện mối đe dọa nhanh hơn 8 lần so với phương pháp truyền thống.",
    ],
  },
  "ra-soat-lo-hong": {
    fallbackBody: [
      "Vulnerability Assessment (VA) là quy trình rà soát có hệ thống để phát hiện các lỗ hổng bảo mật trên hệ thống CNTT trước khi bị kẻ xấu khai thác.",
      "DTG sử dụng các công cụ quét lỗ hổng hàng đầu kết hợp với kiểm tra thủ công của chuyên gia, đảm bảo phát hiện cả lỗ hổng kỹ thuật và logic nghiệp vụ.",
      "Dịch vụ VA của DTG bao gồm: Quét lỗ hổng hạ tầng và ứng dụng, Phân loại và đánh giá mức độ rủi ro (CVSS), Khuyến nghị khắc phục ưu tiên, Hỗ trợ kiểm tra lại sau khắc phục.",
    ],
  },
  "van-hanh": {
    fallbackBody: [
      "Managed Security Services (MSS) giúp doanh nghiệp vận hành các hệ thống bảo mật một cách chuyên nghiệp mà không cần xây dựng đội ngũ nội bộ tốn kém.",
      "DTG đảm nhận quản lý và vận hành: Firewall/NGFW, IDS/IPS, WAF, Endpoint Protection, Email Security, và các giải pháp bảo mật khác.",
      "Dịch vụ MSS bao gồm: Giám sát và quản trị thiết bị, Cập nhật firmware và signature, Tối ưu chính sách bảo mật, Xử lý sự cố và escalation, Báo cáo tháng và khuyến nghị cải tiến.",
    ],
  },
  "red-team": {
    fallbackBody: [
      "Red Team là phương pháp kiểm thử bảo mật nâng cao, mô phỏng các cuộc tấn công thực tế với mục tiêu cụ thể như chiếm quyền Domain Admin hoặc truy cập dữ liệu nhạy cảm.",
      "Khác với Penetration Testing thông thường, Red Team tấn công toàn diện trên mọi vector: kỹ thuật, con người (social engineering) và vật lý, không giới hạn phạm vi như pentest.",
      "Đội Red Team của DTG gồm các chuyên gia có chứng chỉ OSCP, OSCE, CRTO với kinh nghiệm thực chiến, đã thực hiện nhiều chiến dịch Red Team cho các tổ chức tài chính, viễn thông và chính phủ.",
    ],
  },
  "ung-cuu-su-co": {
    fallbackBody: [
      "Khi xảy ra sự cố bảo mật, thời gian phản hồi là yếu tố quyết định mức độ thiệt hại. DTG cam kết thời gian phản hồi trong vòng 2 giờ và có mặt tại hiện trường trong 24 giờ.",
      "Quy trình ứng cứu sự cố của DTG tuân theo NIST SP 800-61: Chuẩn bị → Phát hiện & Phân tích → Ngăn chặn & Cô lập → Khắc phục & Phục hồi → Bài học kinh nghiệm.",
      "Đội ngũ Incident Response của DTG được đào tạo liên tục về các kỹ thuật tấn công mới nhất, sẵn sàng xử lý mọi loại sự cố: ransomware, APT, data breach, DDoS và nhiều loại khác.",
    ],
  },

  // ai detail articles
  "dsoha": {
    fallbackBody: [
      "Dsoha AI là giải pháp số hóa tài liệu và xây dựng kho dữ liệu số thông minh, giúp doanh nghiệp chuyển đổi từ kho lưu trữ giấy sang hệ thống quản lý số hiện đại.",
      "Với công nghệ OCR tiên tiến và AI phân loại tự động, Dsoha AI có thể số hóa hàng triệu trang tài liệu với độ chính xác trên 99%, hỗ trợ tiếng Việt và nhiều ngôn ngữ khác.",
      "Hệ thống cung cấp tính năng tìm kiếm thông minh full-text search, phân loại tự động theo nội dung, và tích hợp API với các hệ thống ERP/CRM hiện có của doanh nghiệp.",
    ],
  },
  "agent": {
    fallbackBody: [
      "AI Agent là trợ lý AI chuyên biệt được thiết kế riêng cho quy trình nghiệp vụ của doanh nghiệp, có thể tự động thực hiện các tác vụ phức tạp.",
      "Khác với chatbot thông thường, AI Agent có khả năng: Hiểu ngữ cảnh kinh doanh, Truy cập và xử lý dữ liệu nội bộ, Thực hiện workflow đa bước, Học hỏi và cải thiện theo thời gian.",
      "DTG xây dựng AI Agent tùy chỉnh cho các lĩnh vực: Hỗ trợ khách hàng, Quản lý nhân sự, Phân tích tài chính, Quản lý dự án và nhiều lĩnh vực khác.",
    ],
  },
  "kiosk": {
    fallbackBody: [
      "AI Kiosk là trạm dịch vụ hành chính công thông minh, ứng dụng trí tuệ nhân tạo để tự động hóa các thủ tục hành chính và dịch vụ công.",
      "Kiosk tích hợp nhận diện khuôn mặt, quét CCCD/CMND, thanh toán điện tử và AI chatbot hỗ trợ người dân thực hiện các thủ tục nhanh chóng, chính xác.",
      "Giải pháp đã được triển khai tại nhiều cơ quan nhà nước và trung tâm dịch vụ công, giúp giảm thời gian chờ đợi lên đến 70% và nâng cao sự hài lòng của người dân.",
    ],
  },
  "alogolf": {
    fallbackBody: [
      "Alogolf AI là nền tảng AI đột phá dành riêng cho quản lý và vận hành sân Golf, tối ưu hóa mọi khía cạnh từ đặt sân đến chăm sóc cỏ.",
      "Hệ thống cung cấp: AI đặt lịch tự động tối ưu slot, Phân tích dữ liệu người chơi, Quản lý bảo dưỡng sân thông minh, Dự báo thời tiết và tưới tiêu tự động.",
      "Alogolf AI đã được triển khai tại nhiều sân Golf lớn, giúp tăng công suất sử dụng sân lên 25% và giảm chi phí vận hành 30%.",
    ],
  },
  "ocr": {
    fallbackBody: [
      "AI OCR của DTG là công nghệ nhận dạng và trích xuất dữ liệu tự động từ tài liệu hình ảnh với độ chính xác vượt trội, đặc biệt với tiếng Việt.",
      "Hệ thống có thể xử lý: Hóa đơn, chứng từ, Hợp đồng, văn bản pháp lý, CCCD/CMND/Hộ chiếu, Biểu mẫu viết tay, và nhiều loại tài liệu khác.",
      "Với tốc độ xử lý hàng nghìn trang mỗi phút và API tích hợp dễ dàng, AI OCR giúp doanh nghiệp tự động hóa quy trình nhập liệu, giảm 90% thời gian và sai sót.",
    ],
  },
  "smart-assistant": {
    fallbackBody: [
      "AI Smart Assistant là giải pháp quản gia số thông minh, hỗ trợ người dùng trong môi trường số với khả năng hiểu ngôn ngữ tự nhiên tiếng Việt.",
      "Smart Assistant có thể: Trả lời câu hỏi về sản phẩm/dịch vụ, Hướng dẫn sử dụng hệ thống, Hỗ trợ đặt lịch và quản lý công việc, Phân tích và tóm tắt tài liệu.",
      "Được xây dựng trên nền tảng Large Language Model tiên tiến nhất, Smart Assistant liên tục học hỏi và cải thiện, mang đến trải nghiệm tương tác tự nhiên như con người.",
    ],
  },
};
