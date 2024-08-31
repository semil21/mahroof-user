import React from "react";
import Styles from "./HomeBanner.module.scss";
import Image from "next/image";
import homeBanner from "@/app/_images/homeBanner.jpg";
import { FaWhatsapp } from "react-icons/fa";

const HomeBanner = () => {
  const whatsappNumber = "+919987009426";
  const message = encodeURIComponent(
    "Hello, I'm interested in your stylish apparel!"
  );
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className={Styles.homeBannerWrapper}>
      <div className={Styles.leftContent}>
        <Image
          src={homeBanner}
          alt="home banner"
          className={Styles.bannerImage}
        />
      </div>
      <div className={Styles.rightContent}>
        <h1 className={Styles.heading}>Stylish Apparels For Your Lifestyle</h1>
        <p className={Styles.description}>
          Discover the perfect fusion of style and function with our expertly
          crafted wallets, jackets, belts, and more. At MM, we combine timeless
          elegance with contemporary design, ensuring that each piece not only
          enhances your wardrobe but also stands the test of time. Experience
          unmatched quality and sophistication with every product we offer.
        </p>

        <a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className={Styles.buttonWrapper}
        >
          <button className={Styles.button}>
            Contact us <FaWhatsapp />
          </button>
        </a>
      </div>
    </div>
  );
};

export default HomeBanner;
