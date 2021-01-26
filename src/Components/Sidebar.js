import React, { useContext } from "react";

import styled from "styled-components";

import { HomeContext } from "../Contexts/HomeContext";

const Div = styled.div`
  .shadow {
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.521);
    top: 0;
    right: 0;
    position: fixed;
    z-index: 888;
    box-shadow: -20px 0 30px 50px rgba(0, 0, 0, 0.521);
    transition: right 0.5s ease;
  }

  .sidebar {
    width: 40%;
    height: 100vh;
    background-image: linear-gradient(#000105, #080321);
    position: fixed;
    top: 0;
    right: 0;
    transition: right 0.7s ease-in-out;
    border-radius: 20px 0 0 20px;
    z-index: 999;
    box-shadow: -20px 0 50px #fff;
  }
`;

function Sidebar() {
  const { sideBar, setSideBar } = useContext(HomeContext);

  return (
    <Div>
      <div
        className="shadow"
        onClick={() => setSideBar(!sideBar)}
        style={sideBar ? { right: 0 } : { right: "-120%" }}
      ></div>
      <div
        className="sidebar"
        style={sideBar ? { right: 0 } : { right: "-100%" }}
      ></div>
    </Div>
  );
}

export default Sidebar;
