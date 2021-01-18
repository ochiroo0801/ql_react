import React, { useContext, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { HomeContext } from "../../Contexts/HomeContext";
import css from "./style.module.scss";
import youtube from "../../svg/youtube.svg";
import Comments from "../../Components/Comments/Comments";
import VideoInfo from "../../Components/VideoInfo/VideoInfo";
import bg from "../../img/comment_bg.jpg";
import header from "../../img/commentHeader.png";

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
    <div className={css.details}>
      {/* POP UP ***************************************/}
      <div className={css.detailsPopUp}>
        <div
          className={css.header}
          style={{ backgroundImage: `url(${header})` }}
        >
          <div className={css.left}>
            <div className={css.image} onClick={() => setShadow(!shadow)}>
              <img src={item?.thumbnails?.maxres?.url} alt="" />
              <div className={css.icon}>
                <img src={youtube} alt="" />
              </div>
            </div>
          </div>

          <div className={css.rigth}>
            <h2>{item?.title.split("(")[0]}</h2>

            <VideoInfo id={shareId} />
          </div>
        </div>

        {/* Comments */}
        <div className={css.comments}>
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
        className={css.player}
        style={shadow ? { display: "flex" } : { display: "none" }}
      >
        <div className={css.video}>
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
          className={css.shadow}
        ></div>
      </div>

      {/* SHADOW ***************************************/}

      <div onClick={() => setVideoMainId([])}>
        <Link to="/">
          <div
            className={css.toHome}
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
        </Link>
      </div>
    </div>
  );
}

export default Details;
