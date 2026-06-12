"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";

interface Props {
  slug: string;
  tag: string;
  date: string;
  image: string;
}

export function NewsDetailPage({ slug, tag, date, image }: Props) {
  const t = useTranslations("news");

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/news"
          className="inline-flex items-center text-sm text-surface-lighter hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="mr-1" />
          {t("title")}
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
            <Image
              src={image}
              alt={t(`items.${slug}`)}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/20 text-primary">
              {t(`tags.${tag}`)}
            </span>
            <span className="text-sm text-surface-lighter">{date}</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-surface mb-6">
            {t(`items.${slug}`)}
          </h1>

          <div className="prose max-w-none">
            <p className="text-surface-lighter leading-relaxed">
              Nội dung chi tiết bài viết sẽ được cập nhật từ file MDX tương ứng.
              Đây là trang placeholder cho bài viết &ldquo;{t(`items.${slug}`)}&rdquo;.
            </p>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
