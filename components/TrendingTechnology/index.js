import React from "react";

import StoriesSection from "../CommonComponents/StoriesSection/StoriesSection";
import { Industries } from "../CommonComponents/industries/Industries";
import PlanProject from "../CommonComponents/PlanProject/PlanProject";
import OndemandSection from "../CommonComponents/OnDemandSection/OndemandSection";
import PortFolio from "../CommonComponents/PortFolioSection/PortFolio";
import { SeoblogSection } from "../CommonComponents/SeoBlogs/Seoblogs";
import Revamping from "../CommonComponents/revamping/Revamping";
import { TextDropdown } from "../CommonComponents/faqSection/Faqs";
import ContectForm from "../CommonComponents/ContectForm/ContectForm";
import MainFooter from "../CommonComponents/FooterSection/MainFooter";

import { TrendingTechnologyBanner } from "./TrendingTechnologyBanner";
import { TrendingTechnologyService } from "./TrendingTechnologyService";
import { TrendingTechnologyLowerBanner } from "./TrendingTechnologyLowerBanner";
import { TrendingWhyChoose } from "./TrendingWhyChoose";

export default function TrendingTech () {
  return (
    <div>
      <TrendingTechnologyBanner />
      <TrendingTechnologyService />
      <TrendingTechnologyLowerBanner />
      <TrendingWhyChoose />

      <StoriesSection />
      <Industries />
      {/* <PlanProject /> */}
      <OndemandSection />
      {/* <PortFolio /> */}
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      {/* <MainFooter /> */}
    </div>
  );
};
