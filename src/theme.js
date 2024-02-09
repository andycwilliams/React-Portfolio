import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = (mode) =>
  createTheme({
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      h2: { marginTop: "2.5rem", marginBottom: "2.5rem" },
    },
    palette: {
      mode,
      dark: {
        main: "#121212",
        contrastText: "#fff",
      },
      primary: {
        main: mode === "dark" ? "#121212" : "#be64f0",
        contrastText: mode === "dark" ? "#fff" : "#121212",
      },
      secondary: {
        main: "#7ae0d9",
        contrastText: "#121212",
      },
    },
  });

export default theme;
