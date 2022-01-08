import React from "react";
import { ProgramsData } from "../data/ProgramsData";
import ProgramCard from "../components/ProgramCard";
import classes from "./Programs.module.css";
import transitionMain from "../UI/Transitions";
import { motion, AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";

const Programs = () => {
  return (
    <AnimatePresence>
      <motion.div
        className={classes.programs}
        variants={transitionMain}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {ProgramsData.map((data, index) => {
          return <ProgramCard {...data} key={index} />;
        })}
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

export default Programs;
