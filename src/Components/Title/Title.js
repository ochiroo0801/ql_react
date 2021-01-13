import React from "react";
import css from "./style.module.scss";

function Title({ text }) {
  return <div className={css.title}>{text}</div>;
}

export default Title;
