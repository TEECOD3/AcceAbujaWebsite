import { defineField, defineType } from "sanity";

const Aboutpage = defineType({
  name: "aboutpage",
  title: "About Page",
  type: "document",
  description: "Content for about page",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the page",
    }),
    defineField({
      name: "Aboutherosection",
      title: "About Hero",
      type: "object",
      fields: [
        defineField({
          name: "image",
          type: "image",
          title: "About Hero image",
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for SEO and accessibility.",
            }),
          ],
        }),
        defineField({
          name: "shortimagetext",
          type: "string",
          title: "short text on hero section",
          validation: (Rule) => Rule.min(5).max(15),
        }),
      ],
    }),
    defineField({
      name: "Aboutcontent",
      title: "About Content",
      type: "blockContent",
    }),
  ],
});

export default Aboutpage;
