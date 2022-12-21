import { useState, React } from "react";
import logo from "../images/logo.png";

function Navbar() {
  const [nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <a href="##" className="Logo">
        <img src={logo} alt="" />
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-btn" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="http" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="http">features</a>
        </li>
        <li>
          <a href="http">About</a>
        </li>
        <li>
          <a href="http">UI SS</a>
        </li>
        <li>
          <a href="http">Dawnload</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
