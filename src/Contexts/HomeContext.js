import React, { useState, createContext, useEffect } from "react";

export const HomeContext = createContext();

const YouTube_Url = "https://www.googleapis.com/youtube/v3/";
const Api_Key = "AIzaSyCYuSB-dF5wrv8Blp2w9xhPM0fp9mK_wtc";

const playListId = "UUDNCaXyaX_ylW4OkdL_vF-Q";
const channelId = "UCDNCaXyaX_ylW4OkdL_vF-Q";

const playList = `${YouTube_Url}playlistItems?part=snippet&playlistId=${playListId}&maxResults=50&key=${Api_Key}`;

const channelInfo = `${YouTube_Url}channels?part=snippet&part=statistics&id=${channelId}&key=${Api_Key}`;

function HomeProvider(props) {
  const [sideBar, setSideBar] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [listData, setListData] = useState([]);
  const [channelData, setChannelData] = useState([]);
  const [videoMainId, setVideoMainId] = useState("");
  const [comments, setComments] = useState([]);
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    getApi(playList, setListData);
    getApi(channelInfo, setChannelData);
  }, []);

  const getApi = (url, state) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => state(data?.items));
  };

  const openSideBar = () => {
    setSideBar(true);
  };

  const numFormat = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  return (
    <HomeContext.Provider
      value={{
        sideBar,
        setSideBar,
        openSideBar,
        listData,
        setListData,
        channelData,
        setChannelData,
        numFormat,
        videoMainId,
        setVideoMainId,
        Api_Key,
        YouTube_Url,
        getApi,
        comments,
        setComments,
        videoData,
        setVideoData,
        shadow,
        setShadow,
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
}

export default HomeProvider;
