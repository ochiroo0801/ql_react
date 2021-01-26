import React, { useContext, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { HomeContext } from "../../Contexts/HomeContext";

import Div from "./style";

import youtube from "../../svg/youtube.svg";
import Comments from "../../Components/Comments/Comments";
import bg from "../../img/comment_bg.jpg";
import header from "../../img/commentHeader.png";
import VideoInfo from "../../Components/VideoInfo";
import { LazyLoadComponent } from "react-lazy-load-image-component";

function Details({ match }) {
  const {
    shadow,
    setShadow,
    setVideoMainId,
    Api_Key,
    YouTube_Url,
    getApi,
    videoMainId,
    commentLength,
  } = useContext(HomeContext);

  let { id } = match?.params;

  const videoItem = `${YouTube_Url}playlistItems?part=snippet&id=${id}&key=${Api_Key}`;

  useEffect(() => {
    getApi(videoItem, setVideoMainId);
  }, []);

  const item = videoMainId[0]?.snippet;
  const shareId = item?.resourceId?.videoId;

  return (
    <LazyLoadComponent>
      <Div>
        {/* POP UP ***************************************/}
        <div className="detailsPopUp">
          <div className="header" style={{ backgroundImage: `url(${header})` }}>
            <div className="left">
              <div className="image" onClick={() => setShadow(!shadow)}>
                <img src={item?.thumbnails?.maxres?.url} alt="" />
                <div className="icon">
                  <img src={youtube} alt="" />
                </div>
              </div>
            </div>

            <div className="rigth">
              <h2>{item?.title.split("(")[0]}</h2>

              <VideoInfo id={shareId} />
            </div>
          </div>

          {/* Comments */}
          <div className="comments">
            <h4>
              {commentLength === "0"
                ? "Уучлаарай энэ хэсэг Коммэнт байхгүй байна..."
                : `${commentLength} коммэнт байна.`}
            </h4>

            <Comments id={shareId} />
          </div>
        </div>

        {/* PLAYER ***************************************/}
        <div
          className="player"
          style={shadow ? { display: "flex" } : { display: "none" }}
        >
          <div className="video">
            <ReactPlayer
              width="100%"
              height="100%"
              playing={shadow}
              url={`https://www.youtube.com/watch?v=${item?.resourceId?.videoId}`}
            />
          </div>

          <div
            onClick={() => {
              setShadow(!shadow);
            }}
            className="shadow"
          ></div>
        </div>

        {/* SHADOW ***************************************/}

        <div onClick={() => setVideoMainId([])}>
          <Link to="/">
            <div
              className="toHome"
              style={{ backgroundImage: `url(${bg})` }}
            ></div>
          </Link>
        </div>
      </Div>
    </LazyLoadComponent>
  );
}

export default Details;
