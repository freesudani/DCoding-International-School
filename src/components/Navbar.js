import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { SidebarData } from "../data/SidebarData";
import { IconContext } from "react-icons";
import LogoImage from "../assets/aba31ca67d7f4a5db569fc1de07280a2.png";
import LogoSmall from "../assets/aba31ca67d7f4a5db569fc1de07280a2.jpg";

const Navbar = ({ sidebar, showSidebar }) => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className={classes.navbar}>
          <Link to="#" className={classes.menubars}>
            <FaBars onClick={showSidebar} />
          </Link>
          <div className={classes.text}>
            <h3>Welcome to D-Coding International School.</h3>
          </div>
          <div className={classes.logosmall}>
            <img src={LogoSmall} alt="logo" />
          </div>
        </div>
        <nav
          className={
            sidebar ? `${classes.navmenuactive}` : `${classes.navmenu}`
          }
        >
          <ul className={classes.navitems} onClick={showSidebar}>
            <li className={classes.navtoggle}>
              <Link to="#" className={classes.menubars}>
                <FaTimes />
              </Link>
            </li>
            {SidebarData.map((data, index) => {
              return (
                <li key={index} className={classes.navtext}>
                  <Link to={data.path}>
                    {data.icon}
                    <span>{data.title}</span>
                  </Link>
                </li>
              );
            })}
            <div className={classes.logo}>
              <img src={LogoImage} alt="logo" />
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
