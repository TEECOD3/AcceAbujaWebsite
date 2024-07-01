import { defineField, defineType } from "sanity";

const whyjoinourschool = defineType({
  name: "whyjoinourschool",
  title: "Why Join Our School section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "title for section",
      type: "string",
    }),
    defineField({
      name: "summary",
      title: "quick summary text for why join us section",
      type: "blockContent",
    }),
    defineField({
      name: "imagegrid",
      title: "image grid for why join us",
      type: "array",
      of: [
        {
          type: "object",
          title: "Grid images",
          fields: [
            defineField({
              name: "image",
              type: "image",
              title: "grid image",
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
              title: "short text on a single image grid",
              validation: (Rule) => Rule.min(20).max(35),
            }),
          ],
          preview: {
            select: {
              title: "imageText",
              media: "image",
            },
          },
        },
      ],
      validation: (Rule) =>
        Rule.required().length(4).error("You need to add exactly 4 images"),
    }),
  ],
});

export default whyjoinourschool;
