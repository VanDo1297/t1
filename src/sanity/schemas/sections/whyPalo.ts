import { defineType, defineField } from "sanity";

export const sectionWhyPalo = defineType({
  name: "sectionWhyPalo",
  title: "Phần Tại sao chọn Palo Alto",
  type: "document",
  fields: [
    defineField({ name: "language", title: "Ngôn ngữ", type: "string", options: { list: [{ title: "Tiếng Việt", value: "vi" }, { title: "English", value: "en" }] }, validation: (r) => r.required() }),
    defineField({ name: "kicker", title: "Nhãn phía trên tiêu đề", type: "string" }),
    defineField({ name: "heading", title: "Tiêu đề chính", type: "text", rows: 2 }),
    defineField({ name: "headingAccent", title: "Dòng nhấn mạnh", type: "text", rows: 2 }),
    defineField({ name: "cta", title: "Nút kêu gọi hành động", type: "string" }),
    defineField({
      name: "danhSachChiSo",
      title: "Danh sách chỉ số",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "key", title: "Mã (không đổi)", type: "string" }),
            defineField({ name: "prefix", title: "Tiền tố (vd: lên đến)", type: "string" }),
            defineField({ name: "giaTri", title: "Giá trị (vd: 90%, 30.9 B)", type: "string" }),
            defineField({ name: "nhan", title: "Nhãn", type: "string" }),
            defineField({ name: "moTa", title: "Mô tả chi tiết", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "nhan", subtitle: "giaTri" } },
        },
      ],
    }),
  ],
  preview: {
    select: { language: "language" },
    prepare({ language }) {
      return { title: `Tại sao chọn Palo Alto — ${language === "vi" ? "Tiếng Việt" : "English"}` };
    },
  },
});
