import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Tanjiro from "../images/fotoCarnet.jpg";
import pdf from "../images/MiJardin.pdf";
import TypeWriterEffect from "react-typewriter-effect";

const About = ({ title, id, dark }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3">{title}</Typography>
        <Card className={classes.card}>
          <CardMedia
            image={Tanjiro}
            className={classes.media}
            title="picture"
          />
          <CardContent className={classes.cardcontent}>
            <div className={classes.div}>
              <TypeWriterEffect
                text="Hi, I am Tanjiro"
                textStyle={{
                  fontSize: "2rem",
                  fontWeight: "700px",
                  color: "tomato",
                }}
                startDelay={200}
                cursorColor="tomato"
                typeSpeed={100}
              />
              <TypeWriterEffect
                text="I am a Damon Slayer"
                textStyle={{
                  fontSize: "1.2rem",
                  fontWeight: "500px",
                  color: "black",
                }}
                startDelay={2500}
                cursorColor="black"
                typeSpeed={100}
              />
              <Typography variant="h6" color="textSecondary">
                Texto que describe un poco quienes somos o que podems aportar
                ........
              </Typography>
            </div>
            <CardActions>
              <Button variant="contained" className={classes.pdfbutton}>
                <a href={pdf} download>
                  Download CV
                </a>
              </Button>
            </CardActions>
          </CardContent>
        </Card>
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
  sectioncontent: {
    maxWidth: "80vw",
    margin: "0 auto",
  },
  card: {
    height: "70vh",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "80vh",
    },
    marginTop: theme.spacing(6),
    position: "relative",
  },
  media: {
    maxWidth: "400px",
    minWidth: "250px",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
      minHeight: "auto",
      flexGrow: "1",
      margin: theme.spacing(2.5),
    },
    height: "auto",
    minHeight: "50vh",
    flexGrow: "1",
    objectFit: "contain",
    borderRadius: "6px",
    margin: theme.spacing(5),
    /*   border: "1px solid red", */
  },
  div: {
    /* border: "1px solid red", */
    minHeight: "30vh",
    [theme.breakpoints.down("sm")]: {
      minHeight: "auto",
    },
  },
  cardcontent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    maxHeight: "50vh",
    alignItems: "center",
    /* border: "1px solid red", */
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
    "& h6": {
      marginTop: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        /* marginTop: theme.spacing(1), */
        display: "none",
      },
    },
  },
  pdfbutton: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(0),
    },
    backgroundColor: "tomato",
    padding: theme.spacing(3),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "& a": {
      color: "#000",
      textDecoration: "none",
      fontWeight: 900,
    },
    "& a:hover": {
      color: "tomato",
    },
  },
}));
//259
export default About;
