import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { HomeContext } from "../../Contexts/HomeContext";
import css from "./style.module.scss";

function Videos() {
  const { listData, loading } = useContext(HomeContext);

  return (
    <div className={css.videos}>
      {loading && <h1>Loading</h1>}
      {listData?.map((e) => {
        const { id, snippet } = e;
        const { thumbnails = {} } = snippet;
        const { maxres = {} } = thumbnails;

        return (
          <div key={id}>
            <Link to={`/details/${id}`}>
              <div key={id} className={css.item}>
                <LazyLoadImage src={maxres?.url} />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Videos;
