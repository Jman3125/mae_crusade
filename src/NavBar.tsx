import { useState } from "react";
import logo from "./assets/logo.png";
import closeX from "./assets/close.svg";
import menuIcon from "./assets/menu.svg";

const NavBar = () => {
  // State to manage the sidebar visibility
  const [showMenu, showingMenu] = useState(false);
  // Function to toggle the sidebar
  const toggleSideBar = () => {
    showingMenu(!showMenu);
    // Add dark mode class to body when sidebar is open
    document.body.classList.add("dark-mode");
  };
  return (
    // Nav bar
    <nav>
      {showMenu && (
        <ul className="sidebar">
          <li onClick={toggleSideBar}>
            <a href="#">
              <img src={closeX} alt="close" />
            </a>
          </li>
          <hr />
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <hr />
          <li>
            <a href="/privacy">Policy</a>
          </li>
          <hr />
        </ul>
      )}

      <ul>
        <li>
          <a href="/">
            <img
              rel="preload"
              src={logo}
              alt="logo"
              className="logo-nav"
              fetchPriority="high"
            />
          </a>
        </li>
        <li className="hideOnMobile">
          <a href="/faq">FAQ</a>
        </li>
        <li className="hideOnMobile">
          <a href="/privacy">Policy</a>
        </li>

        <li className="hideOnComputer" onClick={toggleSideBar}>
          <a href="#">
            <img src={menuIcon} alt="menu" className="menu_img" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
