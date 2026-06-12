"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

interface Props {
  serviceKey: string;
  slug: string;
}

export function SolutionDetailPage({ serviceKey, slug }: Props) {
  const t = useTranslations("services");

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/solutions"
          className="inline-flex items-center text-sm text-surface-lighter hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="mr-1" />
          {t("kicker")}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-surface mb-6">
            {t(`${serviceKey}.title`)}
          </h1>
          <p className="text-lg text-surface-lighter leading-relaxed mb-8">
            {t(`${serviceKey}.desc`)}
          </p>

          <div className="bg-surface rounded-2xl p-8 mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              Giải pháp DTG cung cấp
            </h2>
            <p className="text-slate-400 leading-relaxed">
              DTG cung cấp giải pháp toàn diện cho mảng {t(`${serviceKey}.title`).toLowerCase()},
              từ khảo sát, thiết kế kiến trúc, triển khai đến vận hành và tối ưu hóa.
              Đội ngũ chuyên gia của chúng tôi sở hữu các chứng chỉ quốc tế cao cấp nhất,
              đảm bảo chất lượng và hiệu suất tối đa cho hệ thống của doanh nghiệp.
            </p>
          </div>

          <Link href="/contact">
            <Button variant="outline" size="lg">
              Liên hệ tư vấn giải pháp
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
