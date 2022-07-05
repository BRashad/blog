import React, { useState } from "react";
import MenuIcon from "../assets/navmenu/menuicon.png";
import CloseIcon from "../assets/navmenu/x.png";

import UseWindowDimensions from "../helpers/useWindowDimensions";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navmenu = ["HOME", "POSTS", "STUFF", "ABOUT"];
  const { height, width } = UseWindowDimensions();

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className="header">
      <span className="logo">Rashad Bayram</span>
      {(toggleMenu || height * width > 768) && (
        <nav className="menu">
          {navmenu.map((menuitem, key) => (
            <span key={key}>
              <a className="subitems" href="#">
                {menuitem}
              </a>
            </span>
          ))}
        </nav>
      )}
      <span onClick={toggleNav} className="btn menuicon">
        <a href="#">
          {!toggleMenu ? (
            <img src={MenuIcon} alt="menuicon" width={50} height={50} />
          ) : (
            <img src={CloseIcon} alt="menuicon" width={50} height={50} />
          )}
        </a>
      </span>
    </header>
  );
};

export default NavBar;
