import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";

import banner from "../img/homeBanner.jpg";

const Div = styled.div`
  width: 100%;
  margin-top: 80px;

  img {
    width: 100%;
  }
`;

function Banner() {
  return (
    <Div>
      <LazyLoadImage src={banner} />
    </Div>
  );
}

export default Banner;
