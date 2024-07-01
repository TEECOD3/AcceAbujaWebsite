type HeaderText = string;
type schoolname = string;
type herodescription = string;
type TeamMember = {
  title: string;
  position: string;
  Tabimage: null; // This could be defined further based on the actual structure of Tabimage
};

type AffiliateCompany = {
  companyname: string;
  companylogo: any; // Define a type for companylogo based on its actual structure
};

type WhyChooseOurSchoolField = {
  title: string;
  summary: any[]; // Define a type for summary based on its actual structure
  imagegrid: any[][]; // Define a type for imagegrid based on its actual structure
};

type GradeLevel = {
  Tabtitle: string;
  TabSubtitle: string;
  Tabdescription: string;
  Tabimage: any; // Define a type for Tabimage based on its actual structure
};

type BrandCoreContent = any[]; // Define a type for BrandCoreContent based on its actual structure

type SchoolBrandCore = {
  title: string;
  Brandcorecontent: BrandCoreContent;
};

type HeroSlider = {
  title: string;
  sliderdescription: string;
  sliderimage: {
    url: string;
    alt: string;
    blurdataUrl: string;
  };
};

type FounderSection = {
  founderimage: {
    url: string;
    alt: string;
    blurdataUrl: string;
  };
  subtitle: string;
  foundersectiontitle: string;
  summarymessage: any;
};

type LetsGrowTogetherSection = {
  title: string;
  description: string;
};

type SchoolData = {
  Headertext: string;
  teamofexperts: TeamMember[];
  affiliatecompany: AffiliateCompany[];
  whyjoinourschoolfields: WhyChooseOurSchoolField;
  gradelevels: GradeLevel[];
  schoolname: string;
  SchoolBrandcores: SchoolBrandCore[];
  herodescription: string;
  herosliders: HeroSlider[];
  founder: FounderSection;
  letsgrowtogethersection: LetsGrowTogetherSection;
};
