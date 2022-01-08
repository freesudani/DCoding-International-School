import React from "react";
import { RegularData } from "../data/RegularData";
import RegularCard from "../components/RegularCard";
import transitionMain from "../UI/Transitions";
import { motion } from "framer-motion";
import classes from "./Regular.module.css";

const Regular = () => {
  return (
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
  );
};

export default Regular;
