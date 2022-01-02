import React from "react";
import { ProgramsData } from "../data/ProgramsData";
import ProgramCard from "../components/ProgramCard";
import classes from "./Programs.module.css";

const Programs = () => {
  return (
    <div className={classes.programs}>
      {ProgramsData.map((data, index) => {
        return <ProgramCard {...data} key={index} />;
      })}
    </div>
  );
};

export default Programs;
