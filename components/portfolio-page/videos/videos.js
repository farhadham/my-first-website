import React from "react";
import classes from "./videos.module.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Datas from "../datas";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function Videos() {
  return (
    <Swiper
      // className={classes["swiper-button-next"]}
      modules={[Navigation, A11y]}
      spaceBetween={50}
      navigation
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {Datas.map((el) => {
        return (
          <SwiperSlide key={el.id}>
            <div className={classes.videoContainer}>
              <iframe
                width="560"
                height="315"
                src={el.link}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>.</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Videos;
