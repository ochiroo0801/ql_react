import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";

import css from "./style.module.scss";

// Images
import slide1 from "../../img/slide1.jpg";
import wrapper from "../../Utilities/_utilities.scss";

function HeroSlider() {
  return (
    <div>
      <Swiper className={css.slider} slidesPerView={1}>
        <SwiperSlide className={css.slide}>
          <img src={slide1} alt="" />
          <h3>Test</h3>
          <h1>Tester</h1>
        </SwiperSlide>
        <SwiperSlide className={css.slide}>
          <img src={slide1} alt="" />
          <h3>Test</h3>
          <h1>Tester</h1>
        </SwiperSlide>
        <SwiperSlide className={css.slide}>
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide className={css.slide}>
          <img src={slide1} alt="" />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}

export default HeroSlider;
