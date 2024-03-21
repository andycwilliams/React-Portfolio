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
      // h2: { margin: "2.5rem 0 2.5rem 0" },
    },
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#6c5ce7" : "#8e44ad",
        // contrastText: mode === "dark" ? "#fff" : "#fff",
        contrastText: "#fff",
      },
      secondary: {
        main: mode === "dark" ? "#27ae60" : "#2ecc71",
        contrastText: mode === "dark" ? "#ecf0f1" : "#2d3436",
      },
      tertiary: {
        main: mode === "dark" ? "#c0392b" : "#e74c3c",
        contrastText: mode === "dark" ? "#ecf0f1" : "#2d3436",
      },
      background: {
        default: mode === "dark" ? "#2c3e50" : "#ecf0f1",
      },
      text: {
        primary: mode === "dark" ? "#ecf0f1" : "#2d3436",
      },
    },
    components: {
      MuiLink: {
        styleOverrides: {
          root: {
            "&:hover": {
              transform: "scale(1.2)",
              transition: "transform 0.3s, textDecoration 0.3s",
            },
          },
        },
      },
    },
  });

export default theme;
