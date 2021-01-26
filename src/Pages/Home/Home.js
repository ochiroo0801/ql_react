import React, { useContext, useEffect } from "react";
import {
  trackWindowScroll,
  LazyLoadComponent,
} from "react-lazy-load-image-component";

import Channel from "../../Components/Channel/Channel";

import Slider from "../../Components/Slider/Slider";
import Title from "../../Components/Title";

import { Wrapper } from "../../Utilities/Utilities";
import styled from "styled-components";

import HeroSlider from "../../Components/HeroSlider/HeroSlider";
import { homeSlide } from "../../Components/Slider/homeSlide";
import { HomeContext } from "../../Contexts/HomeContext";
import Banner from "../../Components/Banner";

function Home() {
  const {
    getApi,
    channelInfo,
    setChannelData,
    niitiinPlayList,
    niitiin,
    setNiitiin,
  } = useContext(HomeContext);

  useEffect(() => {
    getApi(channelInfo, setChannelData);
    getApi(niitiinPlayList, setNiitiin);
  }, []);

  const Div = styled.div`
    width: 100%;
    padding-top: 100px;
    margin: auto;
    height: 100vh;
    transition: width 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  `;

  return (
    <Div>
      <HeroSlider />

      <Wrapper>
        <LazyLoadComponent>
          <Channel />
        </LazyLoadComponent>

        <Title text={"Ангилал"} />

        <LazyLoadComponent>
          <Slider slide={homeSlide} />
        </LazyLoadComponent>

        <Banner />
        <Title text={"Нийтийн"} />
        <LazyLoadComponent>
          <Slider slide={niitiin} />
        </LazyLoadComponent>
        <Title text={"Бүх дуунууд"} />
        {/* <Videos /> */}
      </Wrapper>
    </Div>
  );
}

export default Home;
