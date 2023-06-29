import React from "react";

import "../../styles/main.sass";

import logo from "../../img/icons/logo.svg";
import menuBtn from "../../img/icons/menu-btn.svg";

import Menu from "../views/Menu";

const AppNavBar = ({ showMenu, setShowMenu, handleSurrender }) => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar__main">
        <div
          className="menu__btn"
          onClick={(e) => {
            setShowMenu(!showMenu);
          }}
        >
          <img src={menuBtn} alt="menu button" />
        </div>
        <div className="logo">
          <img src={logo} alt="chess logo" />
        </div>
      </div>

      <Menu showMenu={showMenu} handleSurrender={handleSurrender} />
    </nav>
  );
};

export default AppNavBar;
