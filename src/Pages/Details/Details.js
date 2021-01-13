import React, { useContext, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { HomeContext } from "../../Contexts/HomeContext";
import css from "./style.module.scss";
import youtube from "../../svg/youtube.svg";
import Comments from "../../Components/Comments/Comments";
import VideoInfo from "../../Components/VideoInfo/VideoInfo";

function Details({ match }) {
  const {
    listData,
    shadow,
    setShadow,
    setVideoMainId,
    Api_Key,
    YouTube_Url,
    getApi,
    comments,
    setComments,
    videoMainId,
  } = useContext(HomeContext);

  const commentsApi = `${YouTube_Url}commentThreads?part=snippet&maxResults=100&videoId=${videoMainId}&key=${Api_Key}`;

  useEffect(() => {
    getApi(commentsApi, setComments);
  }, [videoMainId]);

  let { id } = match?.params;

  return (
    <div>
      {listData.map((e) => {
        const { snippet } = e;
        const { thumbnails, title, resourceId } = snippet;
        const { maxres } = thumbnails;

        if (e.id === id)
          return (
            <div className={css.details} key={e.id}>
              {setVideoMainId(resourceId?.videoId)}
              {/* POP UP ***************************************/}
              <div className={css.detailsPopUp}>
                <div className={css.header}>
                  <div className={css.left}>
                    <div
                      className={css.image}
                      onClick={() => setShadow(!shadow)}
                    >
                      <img src={maxres.url} alt="" />
                      <div className={css.icon}>
                        <img src={youtube} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className={css.rigth}>
                    <h2>{title.split("(")[0]}</h2>

                    <VideoInfo />
                  </div>
                </div>

                {/* Comments */}
                <div className={css.comments}>
                  <h4>
                    {comments?.length === 0
                      ? "Коммэнт байхгүй"
                      : `${comments?.length} коммэнт байна.`}
                  </h4>
                  {comments?.map((e) => {
                    const { snippet } = e.snippet.topLevelComment;
                    const {
                      authorDisplayName,
                      authorProfileImageUrl,
                      publishedAt,
                      textDisplay,
                      textOriginal,
                      videoId,
                    } = snippet;

                    return (
                      <Comments
                        profile={authorProfileImageUrl}
                        name={authorDisplayName}
                        text={textOriginal}
                      />
                    );
                  })}
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
                    url={`https://www.youtube.com/watch?v=${resourceId?.videoId}`}
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
              <Link to="/">
                <div className={css.toHome}></div>
              </Link>
            </div>
          );
      })}
    </div>
  );
}

export default Details;
