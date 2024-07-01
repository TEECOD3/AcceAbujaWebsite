import { defineField, defineType } from "sanity";

const heroslider = defineType({
  name: "heroslider",
  type: "document",
  title: "Hero - slider",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "slider Header title",
    }),
    defineField({
      name: "sliderdescription",
      type: "text",
      title: "Slider Description",
      description: "slider description",
      validation: (Rule) => Rule.min(20).max(300),
    }),
    defineField({
      name: "sliderimage",
      type: "image",
      title: "Slide - Image",
      description: "image for the slider",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility.",
        },
      ],
    }),
  ],
});

export default heroslider;
