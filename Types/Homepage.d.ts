type HeaderText = string;
type schoolname = string;
type herodescription = string;

type TeamMember = {
  title: string;
  position: string;
  image: {
    url: string;
    alt: string;
    blurdataUrl: string;
  };
};

type AffiliateCompany = {
  companyname: string;
  companylogo: {
    url: string;
    alt: string;
    blurdataUrl: string;
  };
};

type WhyChooseOurSchoolField = {
  title: string;
  summary: any[];
  imagegrid: {
    image: {
      url: string;
      alt: string;
      blurdataUrl: string;
    };
    shortimagetext: string;
  }[];
};

type GradeLevel = {
  Tabtitle: string;
  TabSubtitle: string;
  Tabdescription: string;
  Tabimage: {
    url: string;
    alt: string;
    blurdataUrl: string;
  };
};

type BrandCoreContent = any;

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
