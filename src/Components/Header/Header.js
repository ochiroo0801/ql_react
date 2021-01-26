import React, { useContext } from "react";
import Div from "./style";

import logo from "../../img/logo.png";
import { HomeContext } from "../../Contexts/HomeContext";

function Header() {
  const { sideBar, setSideBar } = useContext(HomeContext);

  return (
    <Div>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="menu" onClick={() => setSideBar(!sideBar)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Div>
  );
}

export default Header;
