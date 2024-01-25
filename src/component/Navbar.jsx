import React from "react";
import { Link } from "react-router-dom";
import CTA from "../component/CTA";
import { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import "../index.css";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    let handler = () => {
      setMenuOpened(false);
    };

    document.addEventListener('mousedown', handler)
  });

  const getMenuStyle = (menuOpened) => {
    if (document.documentElement.clientWidth <= 980) {
      return { right: !menuOpened && "+200%" };
    }
  };

  return (
    <div>
      <div className='nav'>
        <div className='logo'>
          <Link to={"/"}>s_SAM</Link>
        </div>

        <ul className='nav__items' style={getMenuStyle(menuOpened)}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/project"}>Projects</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>

        <div className='cta'>
          <CTA />
        </div>

        <div className='menu' onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
