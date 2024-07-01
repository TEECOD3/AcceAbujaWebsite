import { groq } from "next-sanity";
import { client } from "../lib/client";

const gethero = groq`*[_type == "homepage"][0] {
  schoolname,
  Headertext,
  teamofexperts[] {
    title,
   position,
    Tabimage {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          },
          lqip
        }
      },
      alt
    }
  },
   affiliatecompany[] {
   companyname,
    companylogo {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          },
          lqip
        }
      },
      alt
    }
  },
  SchoolBrandcores []-> {
    title,
    Brandcorecontent,
  },
 whyjoinourschoolfields {
    title,
    summary,
    imagegrid[] {
      image {       
    "url": asset -> url,
    "blurdataUrl": asset->metadata.lqip,
      alt
      },
      shortimagetext
    }
  },
  herodescription,
  herosliders[]-> {
    title,
    sliderdescription,
    sliderimage {
    "url": asset -> url,
    "blurdataUrl": asset->metadata.lqip,
      alt
    }
  },
  founder {
    foundersectiontitle,
    subtitle,
    summarymessage,
    founderimage {
      "url": asset -> url,
      "blurdataUrl": asset-> metadata.lqip,
      alt
    }
  },
  letsgrowtogethersection {
    title,
    description
  },
  gradelevels[] {
    Tabtitle,
    TabSubtitle,
    Tabdescription,
    Tabimage {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          },
          lqip
        }
      },
      alt
    }
  }
}
`;

export async function getheros() {
  return await client.fetch(gethero, {});
}
