"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";

const stepDetails: Record<
  number,
  { icon: string; details: string[] }
> = {
  1: {
    icon: "01",
    details: [
      "Tiếp nhận yêu cầu chiến lược từ doanh nghiệp",
      "Khảo sát chi tiết hiện trạng hạ tầng kỹ thuật",
      "Ghi nhận yêu cầu nghiệp vụ chuyên sâu bằng biểu mẫu tiêu chuẩn",
    ],
  },
  2: {
    icon: "02",
    details: [
      "Xây dựng giải pháp công nghệ tổng thể",
      "Lên bảng cấu hình thiết bị chính xác (BOM)",
      "Tối ưu chi phí đầu tư và hiệu năng sử dụng",
    ],
  },
  3: {
    icon: "03",
    details: [
      "Làm việc với hãng công nghệ để xác nhận giá ưu đãi",
      "Đăng ký bảo vệ dự án (Deal Registration)",
      "Cam kết hỗ trợ kỹ thuật chuyên sâu",
    ],
  },
  4: {
    icon: "04",
    details: [
      "Thi công lắp đặt bởi kỹ sư đạt chứng chỉ quốc tế",
      "Cấu hình tối ưu chi tiết toàn bộ hệ thống",
      "Tích hợp với hạ tầng hiện có của doanh nghiệp",
    ],
  },
  5: {
    icon: "05",
    details: [
      "Kiểm tra tải chuyên sâu và nghiệm thu kỹ thuật",
      "Bàn giao toàn bộ tài liệu vận hành",
      "Đào tạo nhân sự nội bộ",
    ],
  },
  6: {
    icon: "06",
    details: [
      "Hỗ trợ kỹ thuật 24/7/365",
      "Bảo trì định kỳ và xử lý sự cố",
      "Tư vấn nâng cấp và tối ưu hóa",
    ],
  },
};

export default function ProcessPage() {
  const t = useTranslations("whyChoose.process");

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="QUY TRÌNH TRIỂN KHAI"
          title="Quy Trình Triển Khai Chuẩn 6 Bước"
          className="!text-left"
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-surface -translate-x-1/2" />

          <div className="space-y-12">
            {PROCESS_STEPS.map((step, i) => {
              const details = stepDetails[step.step];
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-start gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-2 border-surface flex items-center justify-center z-10">
                    <span className="text-lg font-bold text-surface">
                      {details.icon}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-24 md:ml-0 md:w-5/12 ${
                      isEven ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <div className="rounded-xl border border-[#141414]/10 bg-white p-6">
                      <h3 className="text-lg font-semibold text-[#141414] mb-3">
                        Bước {step.step}: {t(`steps.${step.step}.title`)}
                      </h3>
                      <ul className="space-y-2">
                        {details.details.map((d, j) => (
                          <li
                            key={j}
                            className="text-sm text-[#141414]/60 flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">•</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
