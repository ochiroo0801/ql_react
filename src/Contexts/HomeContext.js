import React, { useState, createContext } from "react";

export const HomeContext = createContext();

const YouTube_Url = "https://www.googleapis.com/youtube/v3/";
const Api_Key = "AIzaSyCYuSB-dF5wrv8Blp2w9xhPM0fp9mK_wtc";

const playListId = "UUDNCaXyaX_ylW4OkdL_vF-Q";
const channelId = "UCDNCaXyaX_ylW4OkdL_vF-Q";
const niitiin = "PL5-3_TBMp5Xfyv30gHXmoUI6q1ZCpBw3B";

const playList = `${YouTube_Url}playlistItems?part=snippet&playlistId=${playListId}&maxResults=50&key=${Api_Key}`;

const niitiinPlayList = `${YouTube_Url}playlistItems?part=snippet&playlistId=${niitiin}&maxResults=50&key=${Api_Key}`;

const channelInfo = `${YouTube_Url}channels?part=snippet&part=statistics&id=${channelId}&key=${Api_Key}`;

function HomeProvider(props) {
  const [sideBar, setSideBar] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [listData, setListData] = useState([]);
  const [niitiin, setNiitiin] = useState([]);
  const [pop, setPop] = useState([]);
  const [channelData, setChannelData] = useState([]);
  const [videoMainId, setVideoMainId] = useState([]);
  const [comments, setComments] = useState([]);
  const [videoData, setVideoData] = useState([]);
  const [commentLength, setCommentLength] = useState("");

  const getApi = async (url, state) => {
    try {
      setLoading(true);
      const resp = await fetch(url);
      const data = await resp.json();
      state(data.items);
    } catch (err) {}
    setLoading(false);
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
        getApi,
        comments,
        setComments,
        videoData,
        setVideoData,
        shadow,
        setShadow,
        commentLength,
        setCommentLength,
        loading,
        YouTube_Url,
        niitiin,
        setNiitiin,
        pop,
        setPop,
        playList,
        channelInfo,
        niitiinPlayList,
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
}

export default HomeProvider;
