import React from "react";

import Channel from "../../Components/Channel/Channel";

import Slider from "../../Components/Slider/Slider";
import Title from "../../Components/Title/Title";
import Videos from "../../Components/Videos/Videos";
import css from "./style.module.scss";

function Home() {
  return (
    <div className={css.home}>
      <Channel />
      <Title text={"Ангилал"} />
      <Slider />
      <Title text={"Бүх дуунууд"} />
      <Videos />
    </div>
  );
}

export default Home;
