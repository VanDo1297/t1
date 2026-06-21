import { defineType, defineField } from "sanity";

export const baiVietGiaiPhap = defineType({
  name: "baiVietGiaiPhap",
  title: "Bài viết Giải pháp",
  type: "document",
  fields: [
    defineField({
      name: "language",
      title: "Ngôn ngữ",
      type: "string",
      options: { list: ["vi", "en"] },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "solutionCategory",
      title: "Nhóm giải pháp",
      type: "string",
      options: {
        list: [
          { title: "Cyber Security", value: "an-toan-thong-tin" },
          { title: "Data Center", value: "trung-tam-du-lieu" },
          { title: "Network", value: "he-thong-mang" },
          { title: "Data Protection", value: "bao-ve-du-lieu" },
          { title: "Kiểm thử xâm nhập", value: "kiem-thu-xam-nhap" },
          { title: "Đánh giá An toàn", value: "danh-gia-an-toan" },
          { title: "SOC", value: "soc" },
          { title: "Rà soát Lỗ hổng", value: "ra-soat-lo-hong" },
          { title: "Vận hành", value: "van-hanh" },
          { title: "Red Team", value: "red-team" },
          { title: "Ứng cứu Sự cố", value: "ung-cuu-su-co" },
          { title: "Dsoha AI", value: "dsoha" },
          { title: "AI Agent", value: "agent" },
          { title: "AI Kiosk", value: "kiosk" },
          { title: "Alogolf AI", value: "alogolf" },
          { title: "AI OCR", value: "ocr" },
          { title: "AI Smart Assistant", value: "smart-assistant" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "title",
      title: "Tiêu đề",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Mô tả ngắn",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "thumbnail",
      title: "Ảnh đại diện",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "publishedAt",
      title: "Ngày đăng",
      type: "datetime",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "body",
      title: "Nội dung",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
          ],
        },
      ],
    }),
  ],
  orderings: [
    {
      title: "Ngày đăng mới nhất",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "solutionCategory",
      media: "thumbnail",
    },
  },
});
