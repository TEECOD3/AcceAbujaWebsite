import { defineField, defineType } from "sanity";

const gradelevels = defineType({
  name: "gradelevel",
  type: "object",
  title: "Grade Level Tab",
  fields: [
    defineField({
      name: "Tabtitle",
      type: "string",
      title: "Tabtitle",
      description: "Grade Level Tab title",
    }),
    defineField({
      name: "TabSubtitle",
      type: "string",
      title: "TabSubtitle",
      description: "Grade Level subtitle",
    }),
    defineField({
      name: "Tabdescription",
      type: "text",
      title: "Tab Description",
      description: "Description for the Grade Level",
    }),
    defineField({
      name: "Tabimage",
      type: "image",
      title: "Tab - Image",
      description: "image for the Tab",
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

export default gradelevels;
