import React, { useState } from "react";
import css from "./style.module.scss";

import arrow from "../../svg/up-arrow.svg";

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
    <div
      className={css.scrollTop}
      onClick={scrollTop}
      style={{ display: showScroll ? "flex" : "none" }}
    >
      <img src={arrow} alt="" />
    </div>
  );
}

export default ToTop;
