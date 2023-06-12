import React from "react";

import "../../styles/main.sass";

import logo from "../../img/icons/logo.svg";
import menuBtn from "../../img/icons/menu-btn.svg";

import Menu from "../views/Menu";

const NavBar = ({ showMenu, setShowMenu }) => {
  return (
    <nav className="navbar">
      <div className="navbar__main">
        <div
          className="menu__btn"
          onClick={(e) => {
            setShowMenu(!showMenu);
            console.log("ok");
          }}
        >
          <img src={menuBtn} alt="menu button" />
        </div>
        <div className="logo">
          <img src={logo} alt="chess logo" />
        </div>
      </div>

      <Menu showMenu={showMenu} />
    </nav>
  );
};

export default NavBar;
