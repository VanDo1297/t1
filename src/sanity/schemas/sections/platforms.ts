import { defineType, defineField } from "sanity";

export const sectionPlatforms = defineType({
  name: "sectionPlatforms",
  title: "Phần Nền tảng (Platforms)",
  type: "document",
  fields: [
    defineField({ name: "language", title: "Ngôn ngữ", type: "string", options: { list: [{ title: "Tiếng Việt", value: "vi" }, { title: "English", value: "en" }] }, validation: (r) => r.required() }),
    defineField({ name: "heading", title: "Tiêu đề chính", type: "text", rows: 2 }),
    defineField({ name: "seeAll", title: "Nút: Xem tất cả", type: "string" }),
    defineField({
      name: "danhSachNenTang",
      title: "Danh sách nền tảng",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "key", title: "Mã (không đổi)", type: "string" }),
            defineField({ name: "tab", title: "Tên tab", type: "string" }),
            defineField({ name: "tieuDe", title: "Tiêu đề", type: "string" }),
            defineField({ name: "moTa", title: "Mô tả", type: "text", rows: 4 }),
            defineField({ name: "cta", title: "Nút kêu gọi", type: "string" }),
            defineField({
              name: "thongKe",
              title: "Thống kê",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "key", title: "Mã", type: "string" }),
                    defineField({ name: "giaTri", title: "Giá trị", type: "string" }),
                    defineField({ name: "nhan", title: "Nhãn", type: "string" }),
                  ],
                  preview: { select: { title: "nhan", subtitle: "giaTri" } },
                },
              ],
            }),
          ],
          preview: { select: { title: "tab" } },
        },
      ],
    }),
  ],
  preview: {
    select: { language: "language" },
    prepare({ language }) {
      return { title: `Nền tảng — ${language === "vi" ? "Tiếng Việt" : "English"}` };
    },
  },
});
