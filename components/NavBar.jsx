import React from "react";

const NavBar = () => {
  const navmenu = ["Home", "Posts", "Cool Stuff", "About Me"];
  const tools = ["mds", "rss"];

  return (
    <header className="header">
      <span className="logo">Rashad Bayram</span>

      <nav className="menu">
        {navmenu.map((menuitem, key) => (
          <span key={key}>
            <a className="subitems" href="#">
              {menuitem}
            </a>
          </span>
        ))}
      </nav>
      <span className="tools">
        {tools.map((tool, key) => (
          <span className="tool" key={key}>
            <a className="subitems" href="#">
              {tool}
            </a>
          </span>
        ))}
      </span>
    </header>
  );
};

export default NavBar;
