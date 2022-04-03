import React from "react";
import classes from "./videos.module.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Datas from "../datas";
import { useSelector, useDispatch } from "react-redux";

// import nhl from "../../../public/images/logos/nhl.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function Videos() {
  const dispatch = useDispatch();
  const state = useSelector((st) => st.state);

  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={50}
      navigation
      slidesPerView={1}
      onSlideNextTransitionStart={() => dispatch({ type: "next" })}
      onSlidePrevTransitionStart={() => dispatch({ type: "prev" })}
    >
      {Datas.map((el) => {
        return (
          <SwiperSlide key={el.id}>
            <a href={el.link} target="_blank" rel="noopener noreferrer">
              <div className={classes.imgContainer}>
                <img src={el.logo} />
              </div>
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Videos;
