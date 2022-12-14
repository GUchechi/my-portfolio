import React from "react";
import { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";
import "./styles.scss";

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

const NavBar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, index) => (
            <li key={index} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
                onClick={handleToggle}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggle}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
