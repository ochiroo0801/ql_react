import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import css from "./style.module.scss";

import niitiin from "../../img/niitiin_banner.png";
import pop from "../../img/pop_banner.png";
import hiphop from "../../img/hiphop_banner.png";

function Slider() {
  return (
    <div className={css.slider}>
      <Swiper
        className={css.swiper}
        spaceBetween={50}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide className={css.slide}>
          <img src={niitiin} alt="" />
        </SwiperSlide>
        <SwiperSlide className={css.slide}>
          <img src={pop} alt="" />
        </SwiperSlide>
        <SwiperSlide className={css.slide}>
          <img src={hiphop} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
