import React, { useState, useEffect } from "react";
import Image from "next/image";
import MenuIcon from "../assets/navmenu/menuicon.png";
import CloseIcon from "../assets/navmenu/x.png";
import WindowDimensions from "../helpers/WindowsDimensions";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navmenu = ["HOME", "POSTS", "STUFF", "ABOUT"];

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className="header">
      <span className="logo">Rashad Bayram</span>
      {(toggleMenu || WindowDimensions > 768) && (
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
            <Image src={MenuIcon} alt="menuicon" width={50} height={50} />
          ) : (
            <Image src={CloseIcon} alt="menuicon" width={50} height={50} />
          )}
        </a>
      </span>
    </header>
  );
};

export default NavBar;
