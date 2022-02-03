import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import mockData from "../mockData";

const MyWork = ({ title, id, dark }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3">{title}</Typography>
        <Grid container className={classes.grid}>
          {mockData.map(({ title, image, link }, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  image={image}
                  titulo="caratula"
                  className={classes.caratula}
                />
                <CardContent>
                  <Link
                    href={link}
                    color="primary"
                    target="_blank"
                    rel="noopener norefer"
                  >
                    {title}
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
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
    maxWidth: "90vw",
    margin: "0 auto",
    padding: theme.spacing(3),
  },
  grid: {
    marginTop: theme.spacing(10),
  },
  card: {
    maxWidth: 345,
    minHeight: 275,
    margin: theme.spacing(3),
  },
  caratula: {
    height: 0,
    paddingTop: "56.25%", //16:9
  },
}));

export default MyWork;
