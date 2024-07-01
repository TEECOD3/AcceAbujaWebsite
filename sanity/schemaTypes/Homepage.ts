import { defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons";

const homepage = defineType({
  type: "document",
  name: "homepage",
  title: "Homepage",
  icon: HomeIcon,
  fieldsets: [
    {
      title: "Hero Section",
      name: "hero",
      options: { collapsible: true, collapsed: false },
    },
    {
      title: "Founders Section",
      name: "Aboutfounder",
      options: { collapsible: true, collapsed: false },
    },
    {
      title: "why join our school",
      name: "whyjoinourschoolset",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: "schoolname",
      fieldset: "hero",
      title: "School name",
      type: "string",
      description: "The school name",
    }),
    defineField({
      name: "Headertext",
      fieldset: "hero",
      title: "Header - text",
      type: "string",
      description: "The large text description on the hero page ",
    }),
    defineField({
      name: "herodescription",
      fieldset: "hero",
      title: "Hero - Description",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.min(20).max(300),
      description: "welcome description on the hero page",
    }),
    defineField({
      name: "herosliders",
      fieldset: "hero",
      title: "Hero - sliders",
      type: "array",
      description: "Sliders on the hero section",
      of: [{ type: "reference", to: { type: "heroslider" } }],
    }),
    defineField({
      name: "SchoolBrandcores",
      title: "About the school values",
      type: "array",
      of: [{ type: "reference", to: { type: "schoolbrandcore" } }],
    }),
    defineField({
      name: "founder",
      fieldset: "Aboutfounder",
      type: "foundersection",
    }),
    defineField({
      name: "whyjoinourschoolfields",
      fieldset: "whyjoinourschoolset",
      type: "whyjoinourschool",
    }),
    defineField({
      name: "letsgrowtogethersection",
      title: "Let's grow together section",
      type: "letsgrowtogether",
    }),
    defineField({
      name: "gradelevels",
      title: "Grade levels section",
      type: "array",
      description: "four tabs for the grade level section",
      of: [{ type: "gradelevel" }],
      // validation: (Rule) =>
      //   Rule.required().length(4).error("You need to add exactly 4 tabs"),
    }),
    defineField({
      name: "teamofexperts",
      title: "Team  of Experts",
      type: "array",
      of: [{ type: "team" }],
    }),
    defineField({
      name: "affiliatecompany",
      title: "Affiliated companies",
      type: "array",
      of: [{ type: "company" }],
    }),
  ],
});

export default homepage;

//  whyjoinourschoolsection {
//     title,
//     summary,
//     imagegrid[] {
//       image {
//         asset->{
//           _id,
//           url,
//           metadata {
//             dimensions {
//               width,
//               height
//             },
//             lqip
//           }
//         },
//         alt
//       },
//       shortimagetext
//     }
//   },
