import React from 'react';

import "../../styles/main.sass"

import logo from "../../img/icons/logo.svg"
import menuBtn from "../../img/icons/menu-btn.svg"

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className="menu__btn">
        <img src={menuBtn} alt="menu button" />
      </div>
      <div className="logo">
        <img src={logo} alt="chess logo"/>
      </div>
    </nav>
  )
}

export default NavBar;
