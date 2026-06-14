import { news } from "./news";
import { caseStudy } from "./caseStudy";
import { service } from "./service";
import { partner } from "./partner";
import { translationGroup } from "./translationGroup";

// Section schemas
import { sectionNav, sectionSubNav } from "./sections/nav";
import { sectionHero } from "./sections/hero";
import { sectionAbout } from "./sections/about";
import { sectionWhyChoose } from "./sections/whyChoose";
import { sectionServices } from "./sections/services";
import { sectionCaseStudies } from "./sections/caseStudies";
import { sectionNews } from "./sections/news";
import { sectionContact } from "./sections/contact";
import { sectionFooter } from "./sections/footer";
import { sectionStats } from "./sections/stats";
import { sectionWhyPalo } from "./sections/whyPalo";
import { sectionPlatforms } from "./sections/platforms";
import { sectionServicesResponse } from "./sections/servicesResponse";
import { sectionSolutionsMatrix } from "./sections/solutionsMatrix";
import { sectionEngagement } from "./sections/engagement";
import { sectionInsights } from "./sections/insights";
import { sectionAboutDtg } from "./sections/aboutDtg";
import {
  sectionCtaBox,
  sectionPartnersSlider,
  sectionPartners,
  sectionSearch,
  sectionCommon,
} from "./sections/misc";

export const schemaTypes = [
  // Dynamic content
  news,
  caseStudy,
  service,
  partner,

  // Legacy translations (key-value)
  translationGroup,

  // Section schemas (structured)
  sectionNav,
  sectionSubNav,
  sectionHero,
  sectionAbout,
  sectionWhyChoose,
  sectionServices,
  sectionCaseStudies,
  sectionNews,
  sectionContact,
  sectionFooter,
  sectionStats,
  sectionWhyPalo,
  sectionPlatforms,
  sectionServicesResponse,
  sectionSolutionsMatrix,
  sectionEngagement,
  sectionInsights,
  sectionAboutDtg,
  sectionCtaBox,
  sectionPartnersSlider,
  sectionPartners,
  sectionSearch,
  sectionCommon,
];
