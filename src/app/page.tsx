import Image from "next/image";

import HomeBanner from "./_components/homebanner/HomeBanner";
import InformationCards from "./_components/InformationCards";
import Scrollbar from "./_components/scrollbar/Scrollbar";


export default function Home() {
  return (
    <>
      <HomeBanner />
      <Scrollbar />
      {/* <HomeBanner /> */}
      {/* < InformationCards /> */}
      {/* <HomeVideo /> */}
    </>
  );
}
