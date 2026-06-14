import { defineType, defineField } from "sanity";

export const sectionInsights = defineType({
  name: "sectionInsights",
  title: "Phần Bài viết chuyên sâu (Insights)",
  type: "document",
  fields: [
    defineField({ name: "language", title: "Ngôn ngữ", type: "string", options: { list: [{ title: "Tiếng Việt", value: "vi" }, { title: "English", value: "en" }] }, validation: (r) => r.required() }),
    defineField({ name: "heading", title: "Tiêu đề chính", type: "text", rows: 2 }),
    defineField({ name: "viewAll", title: "Nút: Xem tất cả", type: "string" }),
    defineField({ name: "readMore", title: "Nút: Đọc thêm", type: "string" }),
    defineField({
      name: "danhSachBaiViet",
      title: "Danh sách bài viết",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "key", title: "Mã bài viết", type: "string" }),
            defineField({ name: "loai", title: "Loại (vd: Bài viết, Tạp chí)", type: "string" }),
            defineField({ name: "tieuDe", title: "Tiêu đề", type: "string" }),
            defineField({ name: "hinhAnh", title: "Hình ảnh", type: "image", options: { hotspot: true } }),
          ],
          preview: { select: { title: "tieuDe", subtitle: "loai" } },
        },
      ],
    }),
  ],
  preview: {
    select: { language: "language" },
    prepare({ language }) {
      return { title: `Bài viết chuyên sâu — ${language === "vi" ? "Tiếng Việt" : "English"}` };
    },
  },
});
