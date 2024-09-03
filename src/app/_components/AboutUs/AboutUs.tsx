import React from "react";
import Image from "next/image";
import Styles from "./Aboutus.module.scss";
import homeBanner from "../../_images/homeBanner.jpg";

const AboutUs = () => {
  return (
    <div className={Styles.aboutUsWrapper}>
      <h1 className={Styles.heading}>About us</h1>

      <div className={Styles.topContent}>
        <div className={Styles.topLeftContent}>
          <Image src={homeBanner} alt="image" className={Styles.image} />
        </div>
        <div className={Styles.toprightContent}>
         
          <h6 className={Styles.subHeading}> Our Journey </h6>
          <p className={Styles.description}>
            Our journey began with a passion for creating accessories that
            combine traditional craftsmanship with contemporary aesthetics. What
            started as a small collection of wallets has grown into a full range
            of products, including jackets and belts, each designed with the
            same commitment to quality and attention to detail. Over the years,
            we have stayed true to our roots while continuously innovating to meet
            the evolving needs of our customers.
          </p>
          <p className={Styles.description}>
            Through dedication and hard work, MM has become a trusted name in
            the world of fashion accessories. We have expanded our reach,
            connecting with customers who share our love for timeless design and
            superior craftsmanship. Our journey is a testament to the power of
            vision and perseverance, and we look forward to what the future
            holds as we continue to create pieces that blend style with
            substance.
          </p>
        </div>
      </div>
      <div className={Styles.bottomContent}>
        <div className={Styles.bottomLeftContent}>
          <h1 className={Styles.subHeading}> Our Manufacturing </h1>
          <p className={Styles.description}>
            At MM, our manufacturing process is a blend of tradition and
            innovation. Each product is crafted with meticulous attention to
            detail by skilled artisans who bring years of experience to every
            piece. We carefully select the finest materials to ensure durability
            and quality, making sure that each item not only meets but exceeds
            our high standards. From the initial design to the final product,
            every step of the process is carried out with precision and care
          </p>
          <p className={Styles.description}>
            Our commitment to excellence extends to every aspect of our
            manufacturing. We continuously invest in the latest technologies to
            enhance our production capabilities while maintaining the
            handcrafted quality that defines our brand. This dedication to
            perfection ensures that every product we offer is a true reflection
            of our values: quality, durability, and timeless style.
          </p>
        </div>
        <div className={Styles.bottomrightContent}>
          <Image src={homeBanner} alt="image" className={Styles.image} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
