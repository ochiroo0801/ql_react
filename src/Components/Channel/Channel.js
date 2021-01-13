import React, { useContext } from "react";
import { HomeContext } from "../../Contexts/HomeContext";
import css from "./style.module.scss";
import logo from "../../img/logo.png";
import location from "../../svg/location.svg";

function Channel() {
  const { channelData, numFormat } = useContext(HomeContext);

  return (
    <div>
      {channelData.map((e) => {
        const { snippet, statistics } = e;
        const { title } = snippet;
        const { subscriberCount, videoCount, viewCount } = statistics;

        return (
          <div className={css.channel} key={e.id}>
            <div className={css.top}>
              <div className={css.logo}>
                <img src={logo} alt="" />
              </div>

              <div className={css.rigth}>
                <h2>{title}</h2>
                <div className={css.location}>
                  <img src={location} alt="" />
                  <h3>Mongolia, Czech</h3>
                </div>
              </div>
            </div>

            <div className={css.middle}>
              <div className={css.item}>
                <h1>{numFormat(subscriberCount)}</h1>
                <h2>Захиалагчид</h2>
              </div>
              <div className={css.item}>
                <h1>{videoCount}</h1>
                <h2>Видео</h2>
              </div>
              <div className={css.item}>
                <h1> {numFormat(viewCount)}</h1>
                <h2>Нийт үзэлт</h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Channel;
