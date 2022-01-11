import React from "react";
import { ExtracurricularData } from "../data/ExtracurricularData";
import ExtracurricularCard from "../components/ExtracurricularCard";
import transitionMain from "../UI/Transitions";
import { motion } from "framer-motion";
import classes from "./Extracurricular.module.css";
import { useNavigate } from "react-router-dom";

const Extracurricular = () => {
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
        {ExtracurricularData.map((data, index) => {
          return <ExtracurricularCard {...data} key={index} />;
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

export default Extracurricular;
