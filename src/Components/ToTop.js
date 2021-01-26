import React, { useState } from "react";
import styled from "styled-components";

import arrow from "../svg/up-arrow.svg";

const Div = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  right: 50px;
  bottom: 50px;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  background: #000106;
  animation: scroll 1s;
  z-index: 9999;

  img {
    width: 100%;
  }

  @keyframes scroll {
    0% {
      opacity: 0;
      bottom: 40px;
    }
    50% {
      opacity: 1;
      bottom: 60px;
    }
    60% {
      bottom: 50px;
    }
    70% {
      bottom: 60px;
    }
    100% {
      bottom: 50px;
    }
  }
`;

function ToTop() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <Div onClick={scrollTop} style={{ display: showScroll ? "flex" : "none" }}>
      <img src={arrow} alt="" />
    </Div>
  );
}

export default ToTop;
