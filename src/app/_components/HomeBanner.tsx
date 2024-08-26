import React from "react";
import Styles from "./HomeBanner.module.scss";
import Image from "next/image";
import homeBanner from "@/app/_images/homeBanner.jpg";
import { MdWhatsapp } from "react-icons/md";

const HomeBanner = () => {
  const whatsappNumber = "+919987009426";
  const message = encodeURIComponent(
    "Hello, I'm interested in your stylish apparel!"
  );
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
  return (
    <div className={Styles.homeBannerWrapper}>
      <div className={Styles.leftContent}>
        <h2 className={Styles.heading}> Stylish Apparel for Your Needs</h2>
        <h5 className={Styles.subHeading}>
          Discover the finest textile materials and fabrics crafted with
          precision and care by our experienced manufacturing team.
        </h5>
        <div className={Styles.buttonWrapper}>
          <a
            href={whatsappURL}
            className={Styles.whatsappButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdWhatsapp className={Styles.whatsappLogo} />
            CONTACT US
          </a>
        </div>
      </div>
      <div className={Styles.rightContent}>
        
        <Image src={homeBanner} alt="home image" className={Styles.homeImage} />
      </div>
    </div>
  );
};

export default HomeBanner;
