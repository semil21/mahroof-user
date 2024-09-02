import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import Styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <div className={Styles.footerWrapper}>
      
      <FaWhatsapp />
      <FaFacebook />
      <FaInstagram />
      <CgMail />
    </div>
  );
};

export default Footer;
