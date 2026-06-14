import { defineType, defineField } from "sanity";

export const sectionWhyChoose = defineType({
  name: "sectionWhyChoose",
  title: "Phần Tại sao chọn DTG",
  type: "document",
  fields: [
    defineField({ name: "language", title: "Ngôn ngữ", type: "string", options: { list: [{ title: "Tiếng Việt", value: "vi" }, { title: "English", value: "en" }] }, validation: (r) => r.required() }),
    defineField({ name: "title", title: "Tiêu đề section", type: "string" }),

    // Metrics labels
    defineField({
      name: "danhSachChiSo",
      title: "Nhãn các chỉ số",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "key", title: "Mã (không đổi)", type: "string" }),
            defineField({ name: "nhan", title: "Nhãn hiển thị", type: "string" }),
            defineField({ name: "giaTri", title: "Giá trị số (vd: 23)", type: "number" }),
            defineField({ name: "hauTo", title: "Hậu tố (vd: +)", type: "string" }),
          ],
          preview: { select: { title: "nhan", subtitle: "giaTri" } },
        },
      ],
    }),

    // Values
    defineField({
      name: "danhSachGiaTri",
      title: "Danh sách giá trị nổi bật",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "key", title: "Mã (không đổi)", type: "string" }),
            defineField({ name: "tieuDe", title: "Tiêu đề", type: "string" }),
            defineField({ name: "moTa", title: "Mô tả", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "tieuDe", subtitle: "moTa" } },
        },
      ],
    }),

    // Process
    defineField({ name: "kickerQuyTrinh", title: "Nhãn quy trình (vd: QUY TRÌNH TRIỂN KHAI)", type: "string" }),
    defineField({ name: "tieuDeQuyTrinh", title: "Tiêu đề quy trình", type: "string" }),
    defineField({
      name: "danhSachBuoc",
      title: "Các bước quy trình",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "tieuDe", title: "Tiêu đề bước", type: "string" }),
            defineField({ name: "moTa", title: "Mô tả bước", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "tieuDe", subtitle: "moTa" } },
        },
      ],
    }),

    // CTA
    defineField({ name: "ctaSubtitle", title: "CTA: Câu hỏi", type: "string" }),
    defineField({ name: "ctaMessage", title: "CTA: Thông điệp", type: "text", rows: 2 }),
    defineField({ name: "ctaButton", title: "CTA: Nút bấm", type: "string" }),
  ],
  preview: {
    select: { language: "language" },
    prepare({ language }) {
      return { title: `Tại sao chọn DTG — ${language === "vi" ? "Tiếng Việt" : "English"}` };
    },
  },
});
