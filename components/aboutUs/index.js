import React from "react";
import styles from "./AboutUS.module.css"



import { AboutusBanner } from "./AboutusBanner/AboutusBanner";
import { OurAchievements } from "./OurAchievements/OurAchievements";
import { OurBlogs } from "./OurBlogs/OurBlogs";
import { OurProcess } from "./OurProcess/OurProcess";
import { WorkLifeBalance } from "./WorkLifeBalance/WorkLifeBalance";

// ----- Other requried react components -----
{/*import StoriesSection from "../StoriesSection/StoriesSection";
import OndemandSection from "../OnDemandSection/OndemandSection";
import PortFolio from "../PortFolioSection/PortFolio";
import PlanProject from "../PlanProject/PlanProject";
import Revamping from "../revamping/Revamping";
import { SeoblogSection } from "../SeoBlogs/Seoblogs";
import { TextDropdown } from "../faqSection/Faqs";
import ContectForm from "../ContectForm/ContectForm";
import MainFooter from "../FooterSection/MainFooter";
import { Helmet } from "react-helmet";
*/}

export default function  AboutUS ()  {


  return (
    <div className={styles.AboutUSmain}>
    {/*  <Helmet>
        <title>About us | Bottom Funnel</title>
        <meta
          name="description"
          content="Welcome to Bottom Funnel, the world's leading app development company
          for fintech and startup companies. We pride ourselves on delivering
          unparalleled value to our partners, through our experience and
          expertise in the field."
        />
      </Helmet>
  */}
      <AboutusBanner />
     <OurProcess />
     <OurAchievements />
      <WorkLifeBalance />
        <OurBlogs /> 
      {/* Other react required components 
      <StoriesSection />
      <OndemandSection />
      <PortFolio />
      <PlanProject />
      <SeoblogSection />
      <Revamping />
      <TextDropdown />
      <ContectForm />
      <MainFooter />

      */}
    </div>
  );
};
