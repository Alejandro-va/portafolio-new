import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";
import About from "./components/About";
import Contact from "./components/Contact";
import MyWork from "./components/MyWork";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

const theme = createMuiTheme({
  palette: { main: green[500] },
  secondary: { main: "#333" },
});

function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Navbar />
        <About title="About Me" id="about" dark={true} />
        <Skills title="My Coding Journey" id="skills" dark={false} />
        <MyWork title="My Work" id="work" dark={true} />
        <Contact title="Get in touch" id="contact" dark={false} />
      </div>
    </MuiThemeProvider>
  );
}

const useStyles = makeStyles((theme) => {
  root: {
  }
});
export default App;
