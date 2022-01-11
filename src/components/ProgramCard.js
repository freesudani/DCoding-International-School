import React from "react";
import { Link } from "react-router-dom";

import classes from "./ProgramCard.module.css";

const ProgramCard = (props) => {
  return (
    <div className={classes.card}>
      <img src={props.image} alt={props.title} className={classes.image} />
      <h2 className={classes.title}>{props.title}</h2>
      <div className={classes.icon}>{props.icon}</div>
      <p className={classes.desc}>{props.description}</p>
      <Link to={props.path}>
        <button className={classes.btn}> Go to Details</button>
      </Link>
    </div>
  );
};

export default ProgramCard;
