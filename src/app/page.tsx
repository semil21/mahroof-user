import Image from "next/image";

import HomeBanner from "./_components/homebanner/HomeBanner";
import OurExpertise from "./_components/ourExpertise/ourExpertise";
import Scrollbar from "./_components/scrollbar/Scrollbar";
import Category from "./_components/categories/Categories";
import AboutUs from "./_components/AboutUs/AboutUs";
import Footer from "./_components/footer/Footer";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <Scrollbar />
      <Category />
      <AboutUs />
      <OurExpertise />
      <Footer/>
  
    </>
  );
}
