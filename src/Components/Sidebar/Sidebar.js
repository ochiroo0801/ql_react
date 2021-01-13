import React, { useContext } from "react";
import { HomeContext } from "../../Contexts/HomeContext";

import css from "./style.module.scss";

function Sidebar() {
  const { sideBar, setSideBar } = useContext(HomeContext);

  return (
    <div>
      <div
        className={css.shadow}
        onClick={() => setSideBar(!sideBar)}
        style={sideBar ? { right: 0 } : { right: "-120%" }}
      ></div>
      <div
        className={css.sidebar}
        style={sideBar ? { right: 0 } : { right: "-100%" }}
      ></div>
    </div>
  );
}

export default Sidebar;
