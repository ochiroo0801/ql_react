import React, { useContext, useEffect } from "react";
import { HomeContext } from "../../Contexts/HomeContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import like from "../../svg/like.svg";
import Div from "./style";

function Comments({ id }) {
  const {
    YouTube_Url,
    Api_Key,
    getApi,
    comments,
    setComments,
    loading,
  } = useContext(HomeContext);

  const commentsApi = `${YouTube_Url}commentThreads?part=snippet&maxResults=100&videoId=${id}&key=${Api_Key}`;

  useEffect(() => {
    getApi(commentsApi, setComments);
  }, [id]);

  return (
    <div>
      {loading && <h1>Loading</h1>}
      {comments?.map((e) => {
        const data = e?.snippet;
        const { topLevelComment = {} } = data;
        const { snippet = {} } = topLevelComment;
        const {
          authorProfileImageUrl,
          authorDisplayName,
          likeCount,
          publishedAt,
          textDisplay,
          authorChannelId,
          updatedAt,
        } = snippet;

        return (
          <Div key={publishedAt}>
            <div className="author">
              <LazyLoadImage src={authorProfileImageUrl} alt="" />
            </div>
            <div className="commentContent">
              <div className="head">
                <h6>{authorDisplayName}</h6>
                <h5>{publishedAt.replace("T", " ").split("Z")}</h5>
              </div>
              {likeCount === 0 ? (
                ""
              ) : (
                <div className="likes">
                  <div className="like">
                    <img src={like} alt="" />
                  </div>
                  <h5>{likeCount}</h5>
                </div>
              )}

              {textDisplay?.split("<br />").map((e) => (
                <h5
                  className="comment"
                  key={updatedAt + likeCount * Math.random()}
                >
                  {e}
                </h5>
              ))}
            </div>
          </Div>
        );
      })}
    </div>
  );
}

export default Comments;
