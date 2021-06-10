import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#b64fff",
      main: "#7e0fec",
      dark: "#4200b8",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#b5ff57",
      main: "#7eec0f",
      dark: "#43b900",
      contrastText: "#000000",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});
const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

export default theme;
