import Image from "next/image";
import HomeBanner from "./_components/HomeBanner";
import HomeVideo from "./_components/HomeVideo";
import InformationCards from "./_components/InformationCards";


export default function Home() {
  return (
    <>
      <HomeBanner />
      < InformationCards />
      <HomeVideo />
    </>
  );
}
