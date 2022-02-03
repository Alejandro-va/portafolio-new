import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import {
  Rating,
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import React from "react";
import css from "../images/css1.png";
import html from "../images/html1.png";
import node from "../images/node1.png";
import react from "../images/React1.png";
import javascript from "../images/js.png";

const Technologies = () => {
  const classes = useStyles();
  const skills = [
    {
      year: "2018",
      src: css,
      title: "CSS",
      stars: 4,
    },
    {
      year: "2018",
      src: html,
      title: "HTML 5",
      stars: 4,
    },
    {
      year: "2018",
      src: javascript,
      title: "JavaScript",
      stars: 4,
    },
    {
      year: "2018",
      src: node,
      title: "Node",
      stars: 4,
    },
    {
      year: "2018",
      src: react,
      title: "React js",
      stars: 4,
    },
  ];
  return (
    <Timeline align="left">
      {skills.map(({ year, src, title, stars }, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Typography variant="h6" color="textSecondary">
              {year}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            {/*  <TimelineDot> */}
            <img src={src} alt={title} className={classes.customlogo} />
            {/* </TimelineDot> */}
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={6} className={classes.paper}>
              <Typography variant="h6" component="h1">
                {title}
              </Typography>
              <Box component="fieldset" borderColor="transparent">
                <Rating value={stars} readOnly name="read-only" />
              </Box>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

const useStyles = makeStyles((theme) => ({
  customlogo: {
    width: "35px",
  },
  paper: {
    padding: theme.spacing(3),
    maxWidth: "250px",
  },
}));

export default Technologies;
