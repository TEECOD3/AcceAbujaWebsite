import { groq } from "next-sanity";
import { client } from "../lib/client";

const getFounderpagedata = groq`*[_type == "aboutpage"][0] {
  title,
 founderherosection{
    founderimage{
      "url": asset -> url,
      "blurdataUrl": asset-> metadata.lqip,
      alt
    },
    titleorangebox,
    subtitleorangebox
 },
    foundercontent 
}
`;

export async function getFounderpage() {
  return await client.fetch(getFounderpagedata, {});
}
