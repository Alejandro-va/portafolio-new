import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Technologies from "./Technologies";

const Skills = ({ title, id, dark }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3">{title}</Typography>
        <Technologies />
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
  },
  sectionDark: {
    background: "#333",
    color: "#fff",
  },
}));

export default Skills;
