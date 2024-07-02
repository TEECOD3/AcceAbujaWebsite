import { defineField, defineType } from "sanity";

const Founderpage = defineType({
  name: "founderpage",
  title: "Founder Page",
  type: "document",
  description: "Content for Founder page",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the page",
    }),

    defineField({
      name: "founderherosection",
      title: "About Hero",
      type: "object",
      fields: [
        defineField({
          name: "founderimage",
          type: "image",
          title: "founder Hero image",
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
          name: "titleorangebox",
          type: "string",
          title: "short tile",
          description:
            "Title in the About page which is seen in the orange box",
          validation: (Rule) => Rule.min(5).max(15),
        }),
        defineField({
          name: "subtitleorangebox",
          type: "string",
          title: "subtitle",
          description:
            "subtitle in the About page which is seen in the orange box",
          validation: (Rule) => Rule.min(5).max(20),
        }),
      ],
    }),
    defineField({
      name: "foundercontent",
      title: "Founder message",
      type: "blockContent",
    }),
  ],
});

export default Founderpage;
