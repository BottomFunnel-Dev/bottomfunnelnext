import About from "../components/AboutSection/About";
import Awards from "../components/AwardSection/Awards";
import CompanyLogo from "../components/CompanyLogos/CompanyLogo";
import { BannerFull } from "../components/mainSection/BannerFull";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <BannerFull />
      <CompanyLogo />

      <About />
      <Services />
      <Awards />
    
      {/* <StoriesSection />
      <Industries />
      <OndemandSection /> */}
    </>
  );
}
