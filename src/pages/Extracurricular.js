import React from "react";
import { ExtracurricularData } from "../data/ExtracurricularData";
import ExtracurricularCard from "../components/ExtracurricularCard";
import transitionMain from "../UI/Transitions";
import { motion } from "framer-motion";
import classes from "./Extracurricular.module.css";

const Extracurricular = () => {
  return (
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
  );
};

export default Extracurricular;
