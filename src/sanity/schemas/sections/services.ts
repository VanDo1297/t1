import { defineType, defineField } from "sanity";

export const sectionServices = defineType({
  name: "sectionServices",
  title: "Phần Dịch vụ cốt lõi",
  type: "document",
  fields: [
    defineField({ name: "language", title: "Ngôn ngữ", type: "string", options: { list: [{ title: "Tiếng Việt", value: "vi" }, { title: "English", value: "en" }] }, validation: (r) => r.required() }),
    defineField({ name: "kicker", title: "Nhãn phía trên tiêu đề", type: "string" }),
    defineField({ name: "title", title: "Tiêu đề section", type: "string" }),
    defineField({ name: "viewDetail", title: "Nút: Xem chi tiết", type: "string" }),
    defineField({
      name: "danhSachDichVu",
      title: "Danh sách dịch vụ",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "key", title: "Mã (không đổi)", type: "string" }),
            defineField({ name: "tieuDe", title: "Tên dịch vụ", type: "string" }),
            defineField({ name: "moTa", title: "Mô tả ngắn", type: "text", rows: 2 }),
            defineField({ name: "icon", title: "Tên icon (Network, Server, Shield, Cloud, Video, Brain)", type: "string" }),
            defineField({ name: "slug", title: "Đường dẫn (vd: network-telecom)", type: "string" }),
          ],
          preview: { select: { title: "tieuDe", subtitle: "moTa" } },
        },
      ],
    }),
  ],
  preview: {
    select: { language: "language" },
    prepare({ language }) {
      return { title: `Dịch vụ cốt lõi — ${language === "vi" ? "Tiếng Việt" : "English"}` };
    },
  },
});
