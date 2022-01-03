import React from "react";
import classes from "./NewsCard.module.css";

const NewsCard = (props) => {
  return (
    <div className={classes.card}>
      <img src={props.image} alt={props.title} className={classes.image} />
      <h3 className={classes.header}>{props.title}</h3>
      <a href={props.link} className={classes.link}>
        More Details
      </a>
      <p className={classes.desc}>{props.description}</p>
      <p className={classes.date}>{props.date}</p>
    </div>
  );
};

export default NewsCard;
