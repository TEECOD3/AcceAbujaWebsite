"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { pageStructure, singletonPlugin } from "./sanity/Structure";
import homepage from "./sanity/schemaTypes/pages/Homepage";
import Aboutpage from "./sanity/schemaTypes/pages/Aboutpage";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './s  anity/schema' folder
  schema,
  plugins: [
    structureTool({
      structure: pageStructure([homepage, Aboutpage]),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    singletonPlugin([
      "homepage",
      "foundersection",
      "whyjoinourschool",
      "schoolbrandcore",
      "aboutpage",
    ]),
  ],
});
