import { defineType, defineField } from "sanity";

export const sectionServicesResponse = defineType({
  name: "sectionServicesResponse",
  title: "Phần Ứng phó sự cố",
  type: "document",
  fields: [
    defineField({ name: "language", title: "Ngôn ngữ", type: "string", options: { list: [{ title: "Tiếng Việt", value: "vi" }, { title: "English", value: "en" }] }, validation: (r) => r.required() }),
    defineField({ name: "heading", title: "Tiêu đề lớn", type: "text", rows: 2 }),
    defineField({ name: "kicker", title: "Nhãn phía trên", type: "string" }),
    defineField({ name: "title", title: "Tiêu đề section", type: "string" }),
    defineField({ name: "desc", title: "Mô tả chi tiết", type: "text", rows: 4 }),
    defineField({ name: "cta", title: "Nút kêu gọi", type: "string" }),
    defineField({
      name: "danhSachThongKe",
      title: "Danh sách thống kê",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "key", title: "Mã (không đổi)", type: "string" }),
            defineField({ name: "giaTri", title: "Giá trị", type: "string" }),
            defineField({ name: "nhan", title: "Nhãn", type: "string" }),
          ],
          preview: { select: { title: "nhan", subtitle: "giaTri" } },
        },
      ],
    }),
    defineField({ name: "mattersValue", title: "Vụ việc: Giá trị", type: "string" }),
    defineField({ name: "mattersLabel", title: "Vụ việc: Nhãn", type: "string" }),
    defineField({ name: "responseValue", title: "Ứng phó: Giá trị", type: "string" }),
    defineField({ name: "responseLabel", title: "Ứng phó: Nhãn", type: "string" }),
  ],
  preview: {
    select: { language: "language" },
    prepare({ language }) {
      return { title: `Ứng phó sự cố — ${language === "vi" ? "Tiếng Việt" : "English"}` };
    },
  },
});
