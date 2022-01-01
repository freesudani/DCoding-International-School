import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import classes from "./SingleQuestion.module.css";

const SingleQuestion = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className={classes.question}>
      <header>
        <h4>{props.title}</h4>
        <button
          className={classes.fqbutton}
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{props.info}</p>}
    </article>
  );
};

export default SingleQuestion;
