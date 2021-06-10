import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme, darkTheme } from "../src/theme";
import { red } from "@material-ui/core/colors";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
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
        },
      }),
    [prefersDarkMode]
  );

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
