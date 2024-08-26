import React from 'react';
import Styles from './InformationCards.module.scss';

import { LuRuler } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { GiFactory } from "react-icons/gi";


const InformationCards = () => {
  return (
    <div className={Styles.informationCardWrapper}>
      <div className={Styles.card}>
        <div className={Styles.icon}> <GiFactory /></div>
        <h3 className={Styles.heading}>Advance Manufacturing</h3>
        <p className={Styles.description}>Our state-of-the-art facilities and cutting-edge equipment ensure the highest quality and precision in every textile we produce.

</p>
      </div>
      <div className={Styles.card}>
        <div className={Styles.icon}><LuRuler /></div>
        <h3 className={Styles.heading}>Quality Control</h3>
        <p className={Styles.description}>Every step of our manufacturing process is meticulously monitored to guarantee the exceptional quality of our textiles.</p>
      </div>
      <div className={Styles.card}>
        <div className={Styles.icon}> <TbTruckDelivery/></div>
        <h3 className={Styles.heading}>Reliable Delivery</h3>
        <p className={Styles.description}>We take pride in our efficient logistics and timely delivery to ensure your textiles arrive when you need them.

</p>
      </div>
    </div>
  );
};

export default InformationCards;
