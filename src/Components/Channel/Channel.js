import React, { useContext } from "react";
import { motion } from "framer-motion";

import Div from "./style";

import { HomeContext } from "../../Contexts/HomeContext";
import logo from "../../img/logo.png";
import location from "../../svg/location.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Channel({ afterLoad }) {
  const { channelData, numFormat } = useContext(HomeContext);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 200 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {channelData.map((e) => {
        const { snippet, statistics } = e;
        const { title } = snippet;
        const { subscriberCount, videoCount, viewCount } = statistics;

        return (
          <Div
            key={e.id + title}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            variants={container}
            initial="hidden"
            animate="show"
          >
            <div className="top">
              <motion.div variants={item} className="logo">
                <LazyLoadImage src={logo} alt="" />
              </motion.div>

              <div className="rigth">
                <motion.h2 variants={item}>{title}</motion.h2>
                <motion.div variants={item} className="location">
                  <LazyLoadImage src={location} alt="" />
                  <h3>Mongolia, Czech</h3>
                </motion.div>
              </div>
            </div>

            <div className="middle">
              <motion.div variants={item} variants={item} className="item">
                <h1>{numFormat(subscriberCount)}</h1>
                <h2>Захиалагчид</h2>
              </motion.div>
              <motion.div variants={item} className="item">
                <h1>{videoCount}</h1>
                <h2>Видео</h2>
              </motion.div>
              <motion.div variants={item} className="item">
                <h1> {numFormat(viewCount)}</h1>
                <h2>Нийт үзэлт</h2>
              </motion.div>
            </div>
          </Div>
        );
      })}
    </div>
  );
}

export default Channel;
