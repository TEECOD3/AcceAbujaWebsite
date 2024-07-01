import { defineField, defineType } from "sanity";

const company = defineType({
  name: "company",
  title: "Affliate Companies",
  type: "object",
  fields: [
    defineField({
      name: "companyname",
      type: "string",
      title: "Company Name",
      description: "Name of the company",
    }),
    defineField({
      name: "companylogo",
      type: "image",
      title: "Company Logo",
      description: "Logo of the company",
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

export default company;
