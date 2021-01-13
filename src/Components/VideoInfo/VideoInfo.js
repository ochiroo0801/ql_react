import React, { useContext, useEffect } from "react";
import { HomeContext } from "../../Contexts/HomeContext";
import css from "./style.module.scss";

function VideoInfo() {
  const {
    videoMainId,
    Api_Key,
    setVideoData,
    videoData,
    getApi,
    numFormat,
  } = useContext(HomeContext);

  const videoInfo = `https://www.googleapis.com/youtube/v3/videos?id=${videoMainId}&key=${Api_Key}&part=statistics`;

  useEffect(() => {
    getApi(videoInfo, setVideoData);
  }, [videoMainId]);

  return (
    <div>
      {videoData.map((e) => {
        const { statistics } = e;
        const { commentCount, likeCount, viewCount } = statistics;

        return (
          <div key={e.id} className={css.videoInfo}>
            <div className={css.infoItem}>
              <h2>{numFormat(viewCount)}</h2>
              <h5>Нийт үзэлт</h5>
            </div>
            <div className={css.infoItem}>
              <h2>{numFormat(likeCount)}</h2>
              <h5>Лайк</h5>
            </div>
            <div className={css.infoItem}>
              <h2>{commentCount}</h2>
              <h5>Коммэнт</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VideoInfo;
