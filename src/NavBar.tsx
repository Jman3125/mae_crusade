import "./App.css";
import { useState } from "react";

const Layout = () => {
  const [showMenu, showingMenu] = useState(false);
  const toggleSideBar = () => {
    showingMenu(!showMenu);
    document.body.classList.add("dark-mode");
  };
  return (
    // Nav bar
    <nav>
      {showMenu && (
        <ul className="sidebar">
          <li onClick={toggleSideBar}>
            <a href="#">
              <img src="src/assets/close.svg" alt="close" />
            </a>
          </li>
          <hr />
          <li>
            <a href="/">Blog</a>
          </li>
          <hr />
          <li>
            <a href="/">Products</a>
          </li>
          <hr />
          <li>
            <a href="/">About</a>
          </li>
          <hr />
          <li>
            <a href="/">Forum</a>
          </li>
          <hr />
          <li>
            <a href="/">Policy</a>
          </li>
          <hr />
        </ul>
      )}

      <ul>
        <li>
          <a href="/">
            <img src="src/assets/logo.png" alt="logo" />
          </a>
        </li>
        <li className="hideOnMobile">
          <a href="/">Blog</a>
        </li>
        <li className="hideOnMobile">
          <a href="/">Products</a>
        </li>
        <li className="hideOnMobile">
          <a href="/">About</a>
        </li>
        <li className="hideOnMobile">
          <a href="/">Forum</a>
        </li>
        <li className="hideOnMobile">
          <a href="/">Policy</a>
        </li>
        <li className="hideOnComputer" onClick={toggleSideBar}>
          <a href="#">
            <img src="src/assets/menu.svg" alt="menu" className="menu_img" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Layout;
