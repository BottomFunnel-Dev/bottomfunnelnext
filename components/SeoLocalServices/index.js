import React from 'react';
import Seostats from '../SEO/Seostats/Seostats';
import { SeoLocalSection } from "./SeoLocalSection";
import { dmpagesLogo } from "../Data/SeopartnerData";
import Reviews from '../SEO/SeoReviews/Reviews';
import Trusted from '../SEO/SeoTrustedCompanies/Seotrusted';
import SeoServices from '../SEO/SeoServices/SeoServices';

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

export default function LocalSEO () {
  return (
    <div>
        <SeoLocalSection />
        <Seostats />
        <Reviews />
        <Trusted partnerLogo= {dmpagesLogo} />
        <SeoServices />

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