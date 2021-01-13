import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import css from "./style.module.scss";

function Comments({ profile, name, text }) {
  return (
    <div className={css.item}>
      <div className={css.author}>
        <LazyLoadImage src={profile} alt="" />
      </div>
      <div className={css.commentContent}>
        <h6>{name}</h6>
        <h5>{text}</h5>
      </div>
    </div>
  );
}

export default Comments;
