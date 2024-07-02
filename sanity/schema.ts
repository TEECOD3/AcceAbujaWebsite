import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemaTypes/blockContent";
import homepage from "./schemaTypes/pages/Homepage";
import heroslider from "./schemaTypes/heroslider";
import foundersection from "./schemaTypes/Foundersection";
import whyjoinourschool from "./schemaTypes/whyjoinus";
import letsgrowtogether from "./schemaTypes/letsgrowtogether";
import gradelevels from "./schemaTypes/GradeLevels";
import schoolbrandcore from "./schemaTypes/SchoolBrandCore";
import team from "./schemaTypes/TeamofExperts";
import company from "./schemaTypes/AffliateCompanies";
import Aboutpage from "./schemaTypes/pages/Aboutpage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContent,
    homepage,
    heroslider,
    foundersection,
    whyjoinourschool,
    letsgrowtogether,
    gradelevels,
    schoolbrandcore,
    team,
    company,
    Aboutpage,
  ],
};
