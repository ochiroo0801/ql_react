import React from "react";

import { desktop, tablet } from "../../media_sizes";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";

import Div from "./style";
// Images
import slide1 from "../../img/slide1.jpg";
import slide1_mobile from "../../img/slide1_mobile.jpg";

SwiperCore.use([Autoplay, EffectFade]);

function HeroSlider() {
  return (
    <Div>
      <Swiper effect="fade">
        <SwiperSlide className="slide">
          {!tablet.matches && <img src={slide1_mobile} alt="" />}
          {tablet.matches && <img src={slide1} alt="" />}
        </SwiperSlide>
      </Swiper>
    </Div>
  );
}

export default HeroSlider;
