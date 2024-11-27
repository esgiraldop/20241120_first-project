import { createTheme, responsiveFontSizes } from "@material-ui/core";

export const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: ["Roboto", "Raleway", "Open Sans"].join(","),
      h1: {
        fontSize: "5rem",
        fontFamily: "Raleway",
      },
      h2: {
        fontSize: "3.5rem",
        fontFamily: "Open Sans",
        fontStyle: "bold",
      },
      h3: {
        fontSize: "2.5rem",
        fontFamily: "Roboto",
      },
    },
    palette: {
      background: {
        default: "#3E7CB1",
      },
      primary: {
        main: "#054A91",
      },
      secondary: {
        main: "#81A4CD",
      },
      error: {
        main: "#D72A2A",
      },
      warning: {
        main: "#F17300",
      },
      info: {
        main: "#6B7D6A",
      },
      success: {
        main: "#4BB543",
      },
      text: {
        primary: "#000000",
        secondary: "#FFFFFF",
      },
    },
  })
);
