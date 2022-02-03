import React, { useState } from "react";
import {
  Button,
  makeStyles,
  Paper,
  Radio,
  TextField,
  Typography,
} from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

const Contact = ({ title, id, dark }) => {
  const classes = useStyles();
  const [value, setValue] = useState("Say Hi");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3">{title}</Typography>

        <Paper className={classes.root}>
          <div className={classes.titleandchoices}>
            <Typography variant="h5">CONTACT ME</Typography>
            <div className={classes.choices}>
              <span>Say Hello</span>
              <Radio
                value="Say Hi"
                checked={value == "Say Hi"}
                color="primary"
                onChange={handleChange}
              />
              <span>Get a Quote</span>
              <Radio
                value="Get a Quote"
                checked={value == "Get a Quote"}
                color="primary"
                onChange={handleChange}
              />
            </div>
          </div>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField label="Your name" />
            <TextField label="Your e-mail" />
            {value == "Get a Quote" ? (
              <>
                <TextField label="Needed Services" />
                <TextField label="Estimated Budget" />
              </>
            ) : null}
            <TextField label="Write a message" />
          </form>
          <Button color="secondary" variant="contained">
            Submit
          </Button>
        </Paper>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  sectionDark: {
    background: "#333",
    color: "#fff",
  },
  root: {
    marginTop: theme.spacing(4),
    background: "tomato",
    color: "#fff",
    fontSize: "1.2rem",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: theme.spacing(4),
    "& button": {
      background: "#fff",
      color: "tomato",
      fontWeight: 900,
      fontSize: "1.2rem",
      marginTop: theme.spacing(4),
    },
    "& button:hover": {
      background: theme.palette.primary.main,
      color: "#fff",
    },
  },
  titleandchoices: {
    marginTop: theme.spacing(1),
  },
  sectioncontent: {
    maxWidth: "80vw",
    /* border: "1px solid red", */
    /*  margin: "0 auto", */
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
})); //436

export default Contact;
