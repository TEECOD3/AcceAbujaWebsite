import { defineField, defineType } from "sanity";

const schoolbrandcore = defineType({
  name: "schoolbrandcore",
  title: "For mission , vision , purpose , beliefs  core values and others..",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title of the brandcore",
    }),
    defineField({
      name: "Brandcorecontent",
      type: "blockContent",
      title: "content of the brancore",
    }),
  ],
});

export default schoolbrandcore;
