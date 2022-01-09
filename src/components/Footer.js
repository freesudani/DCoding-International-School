import React from "react";
import { SidebarData } from "../data/SidebarData";
import classes from "./Footer.module.css";
import LogoImage from "../assets/aba31ca67d7f4a5db569fc1de07280a2.png";
import { Link } from "react-router-dom";

const Footer = ({ sidebar, showSidebar }) => {
  return (
    <div className={sidebar ? `${classes.footeractive}` : `${classes.footer}`}>
      <ul className={classes.programs}>
        {SidebarData.map((data, index) => {
          return (
            <li key={index} className={classes.program}>
              <Link to={data.path}>{data.title}</Link>
            </li>
          );
        })}
      </ul>
      <div className={classes.address}>
        <img src={LogoImage} className={classes.footerlogo} alt="logo" />
        <p>D-Coding International School</p>
        <p>99628, Main, North Calorina</p>
        <p>via Mersin 10, USA</p>
        <p>Tel: +512 5487 45</p>
        <p>
          E-mail:<span>info@dc.edu</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
