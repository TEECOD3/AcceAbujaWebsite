import { defineField, defineType } from "sanity";

const foundersection = defineType({
  name: "foundersection",
  title: "Founder - section",
  type: "object",
  fields: [
    defineField({
      name: "foundersectiontitle",
      title: "founder section title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Section subtitle",
      type: "string",
    }),
    defineField({
      name: "summarymessage",
      title: "Summary Message from founder for the homepage",
      type: "blockContent",
    }),
    defineField({
      name: "founderimage",
      type: "image",
      title: "founder - Image",
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
  ],
});

export default foundersection;
