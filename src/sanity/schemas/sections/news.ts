import { defineType, defineField } from "sanity";

export const sectionNews = defineType({
  name: "sectionNews",
  title: "Phần Tin tức",
  type: "document",
  fields: [
    defineField({ name: "language", title: "Ngôn ngữ", type: "string", options: { list: [{ title: "Tiếng Việt", value: "vi" }, { title: "English", value: "en" }] }, validation: (r) => r.required() }),
    defineField({ name: "kicker", title: "Nhãn phía trên tiêu đề", type: "string" }),
    defineField({ name: "title", title: "Tiêu đề section", type: "string" }),
    defineField({ name: "viewAll", title: "Nút: Xem tất cả", type: "string" }),
    defineField({
      name: "danhSachTag",
      title: "Danh sách thẻ phân loại",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "key", title: "Mã tag (không đổi)", type: "string" }),
            defineField({ name: "nhan", title: "Tên hiển thị", type: "string" }),
          ],
          preview: { select: { title: "nhan", subtitle: "key" } },
        },
      ],
    }),
    defineField({
      name: "danhSachBaiViet",
      title: "Danh sách tiêu đề bài viết",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "slug", title: "Slug (đường dẫn)", type: "string" }),
            defineField({ name: "tieuDe", title: "Tiêu đề bài viết", type: "string" }),
            defineField({ name: "hinhAnh", title: "Hình ảnh", type: "image", options: { hotspot: true } }),
            defineField({ name: "tag", title: "Phân loại (event, technology, company, press)", type: "string" }),
            defineField({ name: "ngay", title: "Ngày đăng", type: "date" }),
          ],
          preview: { select: { title: "tieuDe", subtitle: "slug" } },
        },
      ],
    }),
  ],
  preview: {
    select: { language: "language" },
    prepare({ language }) {
      return { title: `Tin tức — ${language === "vi" ? "Tiếng Việt" : "English"}` };
    },
  },
});
