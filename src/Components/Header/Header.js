import React, { useContext } from "react";
import css from "./style.module.scss";

import logo from "../../img/logo.png";
import { HomeContext } from "../../Contexts/HomeContext";

function Header() {
  const { sideBar, setSideBar } = useContext(HomeContext);

  return (
    <div className={css.header}>
      <div className={css.logo}>
        <img src={logo} alt="" />
      </div>

      <div className={css.menu} onClick={() => setSideBar(!sideBar)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Header;
