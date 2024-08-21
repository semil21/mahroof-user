import React from "react";
import Styles from "./HomeVideo.module.scss";

const HomeVideo = () => {
  return (
    <>
      <div className={Styles.videoContainer}>
        <video loop autoPlay muted preload="auto" className={Styles.videoElement}>
          <source src="./homeBanner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className={Styles.para}>test</p>
    </>
  );
};

export default HomeVideo;
