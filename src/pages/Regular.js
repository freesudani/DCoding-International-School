import React from "react";
import { RegularData } from "../data/RegularData";
import RegularCard from "../components/RegularCard";
import transitionMain from "../UI/Transitions";
import { motion } from "framer-motion";
import classes from "./Regular.module.css";
import { useNavigate } from "react-router-dom";

const Regular = () => {
  const navigate = useNavigate();

  const backButton = () => {
    navigate("/programs");
  };

  return (
    <div className={classes.center}>
      <motion.div
        className={classes.programs}
        variants={transitionMain}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {RegularData.map((data, index) => {
          return <RegularCard {...data} key={index} />;
        })}
      </motion.div>
      <motion.button
        onClick={backButton}
        className={classes.btn}
        variants={transitionMain}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        Back to Programs
      </motion.button>
    </div>
  );
};

export default Regular;
