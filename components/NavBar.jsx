import React, { useState, useEffect } from "react";
import Image from "next/image";
import MenuIcon from "../assets/navmenu/menuicon.png";
import CloseIcon from "../assets/navmenu/x.png";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(typeof window !== "undefined");

  const navmenu = ["HOME", "POSTS", "STUFF", "ABOUT"];

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <header className="header">
      <span className="logo">Rashad Bayram</span>
      {(toggleMenu || screenWidth > 768) && (
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
