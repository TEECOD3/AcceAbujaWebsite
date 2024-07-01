import { defineField, defineType } from "sanity";

const team = defineType({
  name: "team",
  title: "Team of Experts",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "member name",
      description: "Title for the team of expert",
    }),
    defineField({
      name: "position",
      type: "string",
      title: "member position",
      description: "position of the team of expert",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "member image",
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

export default team;
