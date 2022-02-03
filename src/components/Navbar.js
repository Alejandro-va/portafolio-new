import React from "react";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  makeStyles,
  Toolbar,
  Divider,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../images/jahz.png";
import {
  BuildTwoTone,
  ContactMailTwoTone,
  EmojiObjectsTwoTone,
  InfoTwoTone,
  MenuBookSharp,
} from "@material-ui/icons";
import CancelIcon from "@material-ui/icons/Cancel";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const links = [
    {
      id: "about",
      text: "About me",
      icon: <InfoTwoTone fontSize="large" />,
    },
    {
      id: "skills",
      text: "Skills",
      icon: <EmojiObjectsTwoTone fontSize="large" className={classes.light} />,
    },
    {
      id: "work",
      text: "My Work",
      icon: <BuildTwoTone fontSize="large" />,
    },
    {
      id: "contact",
      text: "Get in touch",
      icon: <ContactMailTwoTone fontSize="large" />,
    },
  ];

  const scrollToTop = () => scroll.scrollToTop();
  return (
    <>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <img
            src={logo}
            className={classes.logo}
            alt="logo"
            onClick={scrollToTop}
          />
          <List className={classes.menu}>
            {links.map(({ id, text }, index) => (
              <Link
                key={index}
                to={id}
                spy={true}
                activeClass="active"
                smooth={true}
                offset={-70}
                duration={500}
              >
                {text}
              </Link>
            ))}
          </List>
          <IconButton
            edge="end"
            className={classes.menubutton}
            onClick={() => setOpen(!open)}
          >
            {/* <MenuBookSharp /> */}
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <IconButton
          /* className={classes.menubutton} */
          onClick={() => setOpen(false)}
          className={classes.cancelIcon}
        >
          <CancelIcon fontSize="large" />
        </IconButton>
        <Divider />
        {links.map(({ id, text, icon }, index) => (
          <Link
            key={index}
            className={classes.sidebar}
            to={id}
            spy={true}
            activeClass="active"
            smooth={true}
            offset={-70}
            duration={500}
          >
            <ListItem component="h5">
              <span>
                <ListItemIcon>{icon}</ListItemIcon>
              </span>
              {text}
            </ListItem>
          </Link>
        ))}
      </Drawer>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fafafa",
    top: 0,
    left: 0,
    zIndex: 999,
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    height: "2.4rem",
    objectFit: "contain",
    "&:hover": {
      cursor: "pointer",
    },
  },
  light: { color: "#ffcc00" },
  menu: {
    [theme.breakpoints.down("sm")]: { display: "none" },
    "& a": {
      color: "#333",
      fontSize: "1.4rem",
      fontWeight: "bold",
      marginLeft: theme.spacing(3),
    },
    "& a:hover": {
      cursor: "pointer",
      color: "tomato",
      borderBottom: "3px solid tomato",
    },
  },
  menubutton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      color: "tomato",
      position: "absolute",
      top: 0,
      right: 10,
    },
  },
  cancelIcon: {
    color: "tomato",
    position: "absolute",
    top: 0,
    right: 10,
  },
  sidebar: {
    width: "40vw",
    [theme.breakpoints.down("sm")]: { width: "60vw" },
    "& h5": {
      margin: theme.spacing(8, 0, 0, 4),
      fontSize: "1.4rem",
      color: "#333",
      fontWeight: "bold",
    },
    "& h5:hover": {
      color: "tomato",
      cursor: "pointer",
    },
  },
}));

export default Navbar;
//120
