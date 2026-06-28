export interface SubSolution {
  icon: string;
  title: { vi: string; en: string };
  description: { vi: string; en: string };
  href: string;
}

export interface SolutionGoal {
  image: string;
  title: { vi: string; en: string };
  description: { vi: string; en: string };
}

export interface SolutionCategory {
  slug: string;
  title: { vi: string; en: string };
  subtitle: { vi: string; en: string };
  heroDescription: { vi: string; en: string };
  heroImage: string;
  children: SubSolution[];
  goals: SolutionGoal[];
}

export const solutionCategories: SolutionCategory[] = [
  {
    slug: "cong-nghe",
    title: {
      vi: "Giải pháp Công nghệ",
      en: "Technology Solutions",
    },
    subtitle: {
      vi: "Hạ tầng công nghệ toàn diện cho doanh nghiệp hiện đại",
      en: "Comprehensive technology infrastructure for modern enterprises",
    },
    heroDescription: {
      vi: "Cung cấp các giải pháp hạ tầng CNTT tiên tiến, đảm bảo hệ thống vận hành ổn định, an toàn và hiệu quả.",
      en: "Providing advanced IT infrastructure solutions, ensuring stable, secure and efficient system operations.",
    },
    heroImage: "/assets/bg/1.jpg",
    children: [
      {
        icon: "Shield",
        title: { vi: "An toàn Thông tin", en: "Cyber Security" },
        description: {
          vi: "Tập trung vào bảo mật doanh nghiệp với các giải pháp như NGFW, WAF, Zero Trust, và quản lý định danh (IAM/PAM).",
          en: "Enterprise security with NGFW, WAF, Zero Trust, and identity management (IAM/PAM).",
        },
        href: "an-toan-thong-tin",
      },
      {
        icon: "Server",
        title: { vi: "Trung tâm Dữ liệu", en: "Data Center" },
        description: {
          vi: "Cung cấp hạ tầng ảo hóa, máy chủ, lưu trữ doanh nghiệp và các nền tảng Hybrid Cloud hiện đại.",
          en: "Virtualization infrastructure, enterprise servers, storage and modern Hybrid Cloud platforms.",
        },
        href: "trung-tam-du-lieu",
      },
      {
        icon: "Wifi",
        title: { vi: "Hệ thống Mạng & Kết nối", en: "Network" },
        description: {
          vi: "Giải pháp mạng doanh nghiệp toàn diện bao gồm Switching, Wireless, SB-WAN và các hệ thống hội họp trực tuyến.",
          en: "Comprehensive enterprise networking including Switching, Wireless, SD-WAN and video conferencing systems.",
        },
        href: "he-thong-mang",
      },
      {
        icon: "Database",
        title: { vi: "Bảo vệ Dữ liệu & Phục hồi", en: "Data Protection" },
        description: {
          vi: "Bảm bảo tính liên tục của kinh doanh thông qua Backup, Disaster Recovery (DR) và phòng chống Ransomware.",
          en: "Business continuity through Backup, Disaster Recovery (DR) and Ransomware protection.",
        },
        href: "bao-ve-du-lieu",
      },
      {
        icon: "Laptop",
        title: { vi: "Môi trường làm việc số", en: "Digital Workplace" },
        description: {
          vi: "Xây dựng môi trường làm việc số hiện đại với các giải pháp cộng tác, quản lý thiết bị đầu cuối và làm việc từ xa an toàn.",
          en: "Build a modern digital workplace with collaboration tools, endpoint management and secure remote work solutions.",
        },
        href: "moi-truong-lam-viec-so",
      },
      {
        icon: "Cpu",
        title: { vi: "Internet vạn vật (IoT)", en: "Internet of Things (IoT)" },
        description: {
          vi: "Giải pháp kết nối và quản lý thiết bị IoT, thu thập và phân tích dữ liệu từ cảm biến phục vụ chuyển đổi số.",
          en: "Solutions for connecting and managing IoT devices, collecting and analyzing sensor data for digital transformation.",
        },
        href: "iot",
      },
    ],
    goals: [
      {
        image: "/assets/bg/1.jpg",
        title: {
          vi: "Đơn giản hóa việc tích hợp và cung cấp",
          en: "Simplify integration and provisioning",
        },
        description: {
          vi: "Sử dụng quy trình làm việc tự động để nhanh chóng cấu hình và cung cấp các thiết bị mới trên mạng theo chính sách mạng của bạn.",
          en: "Use automated workflows to quickly configure and provision new devices on the network according to your network policies.",
        },
      },
      {
        image: "/assets/bg/2.jpg",
        title: {
          vi: "Kiểm soát truy cập dễ dàng",
          en: "Easy access control",
        },
        description: {
          vi: "Sử dụng trí tuệ nhân tạo và máy học (AI/ML) để xác định và phân loại điểm cuối, triển khai chính sách bảo mật và hiển thị các cảnh báo quan trọng nhất.",
          en: "Use AI/ML to identify and classify endpoints, deploy security policies and display the most critical alerts.",
        },
      },
      {
        image: "/assets/bg/3.jpg",
        title: {
          vi: "Duy trì sức khỏe mạng",
          en: "Maintain network health",
        },
        description: {
          vi: "Sử dụng dữ liệu từ xa và các công cụ quản lý đơn giản để xem thông tin chi tiết về tình trạng máy khách, mạng, dịch vụ và ứng dụng.",
          en: "Use telemetry data and simple management tools to view detailed client, network, service and application health information.",
        },
      },
      {
        image: "/assets/bg/4.jpg",
        title: {
          vi: "Mở rộng mạng lưới của bạn để đáp ứng nhu cầu",
          en: "Scale your network to meet demand",
        },
        description: {
          vi: "Đơn giản hóa khả năng mở rộng với cấu hình cổng định tuyến linh hoạt để đáp ứng nhu cầu một cách năng động.",
          en: "Simplify scalability with flexible routing port configuration to dynamically meet demand.",
        },
      },
    ],
  },
  {
    slug: "an-ninh-mang",
    title: {
      vi: "Dịch vụ An ninh mạng",
      en: "Cyber Security Services",
    },
    subtitle: {
      vi: "Bảo vệ toàn diện hệ thống thông tin doanh nghiệp",
      en: "Comprehensive enterprise information system protection",
    },
    heroDescription: {
      vi: "Đội ngũ chuyên gia an ninh mạng giàu kinh nghiệm, cung cấp các dịch vụ bảo mật từ đánh giá, giám sát đến ứng cứu sự cố.",
      en: "Experienced cybersecurity experts providing security services from assessment, monitoring to incident response.",
    },
    heroImage: "/assets/bg/2.jpg",
    children: [
      {
        icon: "Search",
        title: { vi: "Kiểm thử xâm nhập", en: "Penetration Testing" },
        description: {
          vi: "Đánh giá thực tế khả năng chống chịu của hệ thống trước các kịch bản tấn công giả lập.",
          en: "Real-world assessment of system resilience against simulated attack scenarios.",
        },
        href: "kiem-thu-xam-nhap",
      },
      {
        icon: "ShieldCheck",
        title: { vi: "Đánh giá An toàn Thông tin", en: "Security Assessment" },
        description: {
          vi: "Rà soát và đánh giá tổng thể hiện trạng bảo mật của tổ chức.",
          en: "Comprehensive review and assessment of the organization's security posture.",
        },
        href: "danh-gia-an-toan",
      },
      {
        icon: "Eye",
        title: { vi: "Giám sát An ninh mạng (SOC)", en: "SOC Services" },
        description: {
          vi: "Giám sát liên tục 24/7 để phát hiện và ngăn chặn các mối đe dọa kịp thời.",
          en: "24/7 continuous monitoring to detect and prevent threats in real-time.",
        },
        href: "soc",
      },
      {
        icon: "Bug",
        title: { vi: "Rà soát Lỗ hổng Bảo mật", en: "Vulnerability Assessment" },
        description: {
          vi: "Xác định các điểm yếu kỹ thuật trên hệ thống trước khi chúng bị khai thác.",
          en: "Identify technical weaknesses in systems before they are exploited.",
        },
        href: "ra-soat-lo-hong",
      },
      {
        icon: "Settings",
        title: { vi: "Vận hành An toàn Thông tin", en: "Managed Security" },
        description: {
          vi: "Quản lý và vận hành chuyên nghiệp các hệ thống bảo mật cho doanh nghiệp.",
          en: "Professional management and operation of enterprise security systems.",
        },
        href: "van-hanh",
      },
      {
        icon: "Swords",
        title: { vi: "Mô phỏng Tấn công (Red Team)", en: "Red Team" },
        description: {
          vi: "Diễn tập thực chiến để nâng cao khả năng phản ứng của đội ngũ bảo vệ.",
          en: "Real-world exercises to enhance the defensive team's response capabilities.",
        },
        href: "red-team",
      },
      {
        icon: "AlertTriangle",
        title: { vi: "Ứng cứu Sự cố", en: "Incident Response" },
        description: {
          vi: "Hỗ trợ xử lý nhanh chóng và triệt để khi có sự cố tấn công mạng xảy ra.",
          en: "Rapid and thorough response support when cyber attacks occur.",
        },
        href: "ung-cuu-su-co",
      },
    ],
    goals: [
      {
        image: "/assets/bg/2.jpg",
        title: {
          vi: "Phát hiện mối đe dọa sớm",
          en: "Early threat detection",
        },
        description: {
          vi: "Giám sát liên tục và phân tích hành vi bất thường để phát hiện các mối đe dọa trước khi chúng gây thiệt hại.",
          en: "Continuous monitoring and anomaly behavior analysis to detect threats before they cause damage.",
        },
      },
      {
        image: "/assets/bg/3.jpg",
        title: {
          vi: "Phản ứng nhanh chóng",
          en: "Rapid response",
        },
        description: {
          vi: "Quy trình ứng cứu sự cố chuyên nghiệp, đảm bảo xử lý kịp thời và giảm thiểu tối đa tác động.",
          en: "Professional incident response processes ensuring timely handling and minimizing impact.",
        },
      },
      {
        image: "/assets/bg/4.jpg",
        title: {
          vi: "Tuân thủ tiêu chuẩn",
          en: "Standards compliance",
        },
        description: {
          vi: "Hỗ trợ doanh nghiệp đáp ứng các tiêu chuẩn và quy định pháp luật về an toàn thông tin.",
          en: "Help enterprises meet information security standards and legal regulations.",
        },
      },
      {
        image: "/assets/bg/5.jpg",
        title: {
          vi: "Nâng cao nhận thức bảo mật",
          en: "Enhance security awareness",
        },
        description: {
          vi: "Đào tạo và nâng cao nhận thức bảo mật cho toàn bộ nhân viên trong tổ chức.",
          en: "Train and enhance security awareness for all employees in the organization.",
        },
      },
    ],
  },
  {
    slug: "ai",
    title: {
      vi: "Giải pháp AI",
      en: "AI Solutions",
    },
    subtitle: {
      vi: "Ứng dụng trí tuệ nhân tạo vào quy trình doanh nghiệp",
      en: "Applying artificial intelligence to business processes",
    },
    heroDescription: {
      vi: "Các sản phẩm AI tiên tiến giúp doanh nghiệp tối ưu hóa vận hành, nâng cao trải nghiệm khách hàng và tăng hiệu suất.",
      en: "Advanced AI products helping enterprises optimize operations, enhance customer experience and boost productivity.",
    },
    heroImage: "/assets/bg/3.jpg",
    children: [
      {
        icon: "Brain",
        title: { vi: "Dsoha AI", en: "Dsoha AI" },
        description: {
          vi: "Giải pháp số hóa tài liệu và xây dựng kho dữ liệu số thông minh.",
          en: "Document digitization and smart digital data warehouse solution.",
        },
        href: "dsoha",
      },
      {
        icon: "Bot",
        title: { vi: "AI Agent", en: "AI Agent" },
        description: {
          vi: "Trợ lý AI chuyên biệt được thiết kế cho các quy trình doanh nghiệp.",
          en: "Specialized AI assistant designed for business processes.",
        },
        href: "agent",
      },
      {
        icon: "Monitor",
        title: { vi: "AI Kiosk", en: "AI Kiosk" },
        description: {
          vi: "Trạm dịch vụ hành chính công thông minh ứng dụng trí tuệ nhân tạo.",
          en: "Smart public service kiosk powered by artificial intelligence.",
        },
        href: "kiosk",
      },
      {
        icon: "TreePalm",
        title: { vi: "Alogolf AI", en: "Alogolf AI" },
        description: {
          vi: "Nền tảng AI đột phá dành riêng cho quản lý và vận hành sân Golf.",
          en: "Breakthrough AI platform for golf course management and operations.",
        },
        href: "alogolf",
      },
      {
        icon: "ScanText",
        title: { vi: "AI OCR", en: "AI OCR" },
        description: {
          vi: "Công nghệ nhận dạng và trích xuất dữ liệu tự động từ tài liệu hình ảnh.",
          en: "Automatic recognition and data extraction technology from image documents.",
        },
        href: "ocr",
      },
      {
        icon: "Headphones",
        title: { vi: "AI Smart Assistant", en: "AI Smart Assistant" },
        description: {
          vi: "Giải pháp quản gia số thông minh hỗ trợ người dùng trong môi trường số.",
          en: "Smart digital assistant solution supporting users in digital environments.",
        },
        href: "smart-assistant",
      },
    ],
    goals: [
      {
        image: "/assets/bg/1.jpg",
        title: {
          vi: "Tự động hóa quy trình",
          en: "Process automation",
        },
        description: {
          vi: "Ứng dụng AI để tự động hóa các quy trình nghiệp vụ lặp lại, giảm chi phí vận hành và tăng năng suất.",
          en: "Apply AI to automate repetitive business processes, reduce operational costs and increase productivity.",
        },
      },
      {
        image: "/assets/bg/3.jpg",
        title: {
          vi: "Trích xuất dữ liệu thông minh",
          en: "Smart data extraction",
        },
        description: {
          vi: "Nhận dạng và trích xuất thông tin từ tài liệu, hình ảnh với độ chính xác cao nhờ công nghệ OCR và NLP.",
          en: "Recognize and extract information from documents and images with high accuracy using OCR and NLP technology.",
        },
      },
      {
        image: "/assets/bg/4.jpg",
        title: {
          vi: "Nâng cao trải nghiệm khách hàng",
          en: "Enhance customer experience",
        },
        description: {
          vi: "Trợ lý AI thông minh hỗ trợ khách hàng 24/7, cá nhân hóa tương tác và nâng cao sự hài lòng.",
          en: "Smart AI assistants supporting customers 24/7, personalizing interactions and enhancing satisfaction.",
        },
      },
      {
        image: "/assets/bg/5.jpg",
        title: {
          vi: "Ra quyết định dựa trên dữ liệu",
          en: "Data-driven decision making",
        },
        description: {
          vi: "Phân tích dữ liệu lớn và cung cấp insight giúp doanh nghiệp đưa ra quyết định chính xác và kịp thời.",
          en: "Analyze big data and provide insights to help enterprises make accurate and timely decisions.",
        },
      },
    ],
  },
  {
    slug: "dich-vu-khac",
    title: {
      vi: "Dịch vụ khác",
      en: "Other Services",
    },
    subtitle: {
      vi: "Các dịch vụ hỗ trợ doanh nghiệp toàn diện",
      en: "Comprehensive enterprise support services",
    },
    heroDescription: {
      vi: "DTG cung cấp đa dạng dịch vụ hỗ trợ doanh nghiệp từ tư vấn triển khai, bảo hành bảo trì đến ứng cứu sự cố và cho thuê thiết bị.",
      en: "DTG provides a wide range of enterprise support services from consulting & deployment, warranty & maintenance to incident response and equipment leasing.",
    },
    heroImage: "/assets/bg/4.jpg",
    children: [
      {
        icon: "Settings",
        title: { vi: "Tư vấn và triển khai giải pháp", en: "Consulting & Deployment" },
        description: {
          vi: "Tư vấn và triển khai các giải pháp công nghệ phù hợp với nhu cầu doanh nghiệp.",
          en: "Consulting and deploying technology solutions tailored to enterprise needs.",
        },
        href: "tu-van-trien-khai",
      },
      {
        icon: "Shield",
        title: { vi: "Bảo hành bảo trì", en: "Warranty & Maintenance" },
        description: {
          vi: "Dịch vụ bảo hành, bảo trì hệ thống CNTT đảm bảo vận hành liên tục.",
          en: "IT system warranty and maintenance services ensuring continuous operations.",
        },
        href: "bao-hanh-bao-tri",
      },
      {
        icon: "AlertTriangle",
        title: { vi: "Ứng cứu sự cố", en: "Incident Response" },
        description: {
          vi: "Đội ngũ chuyên gia sẵn sàng ứng cứu và khắc phục sự cố hệ thống nhanh chóng.",
          en: "Expert team ready to respond and resolve system incidents quickly.",
        },
        href: "ung-cuu-su-co",
      },
      {
        icon: "Monitor",
        title: { vi: "Cho thuê thiết bị", en: "Equipment Leasing" },
        description: {
          vi: "Dịch vụ cho thuê thiết bị CNTT linh hoạt, tối ưu chi phí đầu tư.",
          en: "Flexible IT equipment leasing services, optimizing investment costs.",
        },
        href: "cho-thue-thiet-bi",
      },
    ],
    goals: [],
  },
];
