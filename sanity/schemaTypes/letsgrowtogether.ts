import { defineField, defineType } from "sanity";

const letsgrowtogether = defineType({
  name: "letsgrowtogether",
  type: "object",
  title: "Let's grow together",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "Title for the let's grow together section",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      description: "Description for the let's grow together section",
    }),
  ],
});

export default letsgrowtogether;
