import { motion } from "framer-motion";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import styled from "styled-components";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

const Div = styled(motion.div)`
  width: 100%;
  margin: auto;

  .swiper {
    padding: 15px 10px;
    width: 100%;

    .slide {
      width: 100%;
      border-radius: 15px;
      overflow: hidden;
      cursor: pointer;

      img {
        width: 100%;
      }
    }
  }
`;

SwiperCore.use([Autoplay]);

function Slider({ slide }) {
  return (
    <Div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
    >
      <Swiper
        className="swiper"
        spaceBetween={30}
        autoplay={true}
        loop={true}
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
        {slide.map((e) => {
          if (e.snippet) {
            const { id, snippet } = e;
            const { thumbnails = {} } = snippet;
            const { maxres = {} } = thumbnails;

            return (
              <SwiperSlide key={id}>
                <Link to={`/details/${id}`}>
                  <motion.div
                    className="slide"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <LazyLoadImage src={maxres.url} />
                  </motion.div>
                </Link>
              </SwiperSlide>
            );
          }

          if (e.img)
            return (
              <SwiperSlide key={e.id}>
                <motion.div
                  className="slide"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <LazyLoadImage src={e.img} />
                </motion.div>
              </SwiperSlide>
            );
        })}
      </Swiper>
    </Div>
  );
}

export default Slider;
