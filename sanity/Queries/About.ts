import { groq } from "next-sanity";
import { client } from "../lib/client";

const getAboutpagedata = groq`*[_type == "aboutpage"][0] {
  title,
  Aboutherosection{
    image {
      "url": asset -> url,
      "blurdataUrl": asset-> metadata.lqip,
      alt
    },
    shortimagetext
  },
    Aboutcontent, 
}
`;

export async function getAboutpage() {
  return await client.fetch(getAboutpagedata, {});
}
