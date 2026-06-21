import { defineType, defineField } from "sanity";

export const tinTuc = defineType({
  name: "tinTuc",
  title: "Tin tức",
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
      name: "category",
      title: "Danh mục",
      type: "string",
      options: {
        list: [
          { title: "Tin dự án", value: "tin-du-an" },
          { title: "Tin nội bộ", value: "tin-noi-bo" },
          { title: "Tin công nghệ", value: "tin-cong-nghe" },
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
      subtitle: "category",
      media: "thumbnail",
    },
  },
});
