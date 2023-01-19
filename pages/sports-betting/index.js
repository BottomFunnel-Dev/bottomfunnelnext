import React from 'react';

import { SportsBanner } from '../../components/Sportsbetting/SportsBanner';
import { sportsBettingLogo } from "../../components/Data/SeopartnerData";
import Trusted from '../../components/SEO/SeoTrustedCompanies/Seotrusted';
import { SportsPanels } from "../../components/Sportsbetting/SportsPanels";
import { BettingSpecial } from '../../components/Sportsbetting/BettingSpecial';
import { Bettingwhy } from '../../components/Sportsbetting/Bettingwhy';

import { TextDropdown } from "../../components/CommonComponents/faqSection/Faqs";
import OndemandSection from "../../components/CommonComponents/OnDemandSection/OndemandSection";
import PlanProject from "../../components/CommonComponents/PlanProject/PlanProject";
import { SeoblogSection } from "../../components/CommonComponents/SeoBlogs/Seoblogs";
import StoriesSection from "../../components/CommonComponents/StoriesSection/StoriesSection";
import Revamping from "../../components/revamping/Revamping";
import ContectForm from "../../components/CommonComponents/ContectForm/ContectForm";
import MainFooter from "../../components/CommonComponents/FooterSection/MainFooter";
import Navbar from "../../components/Navbar/Navbar";

export default function SportsBetting () {
  return (
    <div>
      <Navbar />
      <SportsBanner />
      <Trusted partnerLogo={sportsBettingLogo} />
      <SportsPanels />
      <BettingSpecial />
      <Bettingwhy />

      <StoriesSection />
      {/* <Industries /> */}
      <PlanProject />
      <OndemandSection />
      {/* <PortFolio /> */}
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />
    </div>
  );
};