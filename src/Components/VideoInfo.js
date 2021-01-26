import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { HomeContext } from "../Contexts/HomeContext";

function VideoInfo({ id }) {
  const {
    Api_Key,
    setVideoData,
    videoData,
    getApi,
    numFormat,
    setCommentLength,
  } = useContext(HomeContext);

  const videoInfo = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${Api_Key}&part=statistics`;

  useEffect(() => {
    getApi(videoInfo, setVideoData);
  }, [id]);

  const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    margin-top: 50px;
    padding-right: 50px;

    .infoItem {
      color: #fff;

      h5 {
        font-weight: 400;
      }
    }
  `;

  return (
    <div key={id}>
      {videoData?.map((e) => {
        const { statistics } = e;
        const { commentCount, likeCount, viewCount } = statistics;

        setCommentLength(commentCount);

        return (
          <Div key={e.id}>
            <div className="infoItem">
              <h2>{numFormat(viewCount)}</h2>
              <h5>Нийт үзэлт</h5>
            </div>
            <div className="infoItem">
              <h2>{numFormat(likeCount)}</h2>
              <h5>Лайк</h5>
            </div>
            <div className="infoItem">
              <h2>{commentCount}</h2>
              <h5>Коммэнт</h5>
            </div>
          </Div>
        );
      })}
    </div>
  );
}

export default VideoInfo;
