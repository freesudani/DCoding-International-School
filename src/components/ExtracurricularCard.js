import React from "react";
import classes from "./ExtracurricularCard.module.css";

const ExtracurricularCard = (props) => {
  return (
    <div className={classes.card}>
      <img src={props.image} alt={props.title} className={classes.image} />
      <h2 className={classes.title}>{props.title}</h2>
      <div className={classes.icon}>{props.icon}</div>
      <p className={classes.desc}>{props.description}</p>
    </div>
  );
};

export default ExtracurricularCard;
