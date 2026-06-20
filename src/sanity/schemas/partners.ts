import { defineField, defineType } from "sanity";

export const partnersPage = defineType({
  name: "trangDoiTac",
  title: "Trang Đối Tác",
  type: "document",
  fields: [
    defineField({
      name: "ngonNgu",
      title: "Ngôn ngữ",
      type: "string",
      options: {
        list: [
          { title: "Tiếng Việt", value: "vi" },
          { title: "English", value: "en" },
        ],
      },
      validation: (r) => r.required(),
    }),

    // Phần Hero
    defineField({
      name: "tieuDeHero",
      title: "Tiêu đề Hero",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "moTaHero",
      title: "Mô tả Hero",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "anhNenHero",
      title: "Ảnh nền Hero",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "nutLienHe",
      title: "Nút liên hệ (nhãn)",
      type: "string",
    }),
    defineField({
      name: "duongDanNut",
      title: "Đường dẫn nút",
      type: "string",
    }),

    // Phần Đối tác chiến lược
    defineField({
      name: "tieuDeDoiTac",
      title: "Tiêu đề mục Đối tác chiến lược",
      type: "string",
    }),
    defineField({
      name: "danhSachDoiTac",
      title: "Danh sách đối tác chiến lược",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "ten",
              title: "Tên đối tác",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "logo",
              title: "Logo",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "trangWeb",
              title: "Trang web",
              type: "url",
            }),
          ],
          preview: {
            select: { title: "ten", media: "logo" },
          },
        },
      ],
    }),

    // Phần Mạng lưới đối tác công nghệ
    defineField({
      name: "tieuDeMangLuoi",
      title: "Tiêu đề mục Mạng lưới đối tác",
      type: "string",
    }),
    defineField({
      name: "danhSachMangLuoi",
      title: "Danh sách mạng lưới đối tác",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "ten",
              title: "Tên đối tác",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "logo",
              title: "Logo",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "trangWeb",
              title: "Trang web",
              type: "url",
            }),
          ],
          preview: {
            select: { title: "ten", media: "logo" },
          },
        },
      ],
    }),
    // Phần Khách hàng đa lĩnh vực
    defineField({
      name: "tieuDeKhachHang",
      title: "Tiêu đề mục Khách hàng",
      type: "string",
    }),
    defineField({
      name: "danhMucKhachHang",
      title: "Danh mục lọc khách hàng",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "danhSachKhachHang",
      title: "Danh sách khách hàng",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "ten",
              title: "Tên khách hàng",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "logo",
              title: "Logo",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "danhMuc",
              title: "Danh mục",
              type: "string",
            }),
            defineField({
              name: "trangWeb",
              title: "Trang web",
              type: "url",
            }),
          ],
          preview: {
            select: { title: "ten", subtitle: "danhMuc", media: "logo" },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { lang: "ngonNgu" },
    prepare: ({ lang }) => ({
      title: `Trang Đối Tác — ${lang === "vi" ? "Tiếng Việt" : "English"}`,
    }),
  },
});
