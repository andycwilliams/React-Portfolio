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
        main: mode === "dark" ? "#1D4373" : "#3A77AF",
        // contrastText: mode === "dark" ? "#fff" : "#fff",
        contrastText: "#fff",
      },
      secondary: {
        main: mode === "dark" ? "#666666" : "#D3D3D3",
        contrastText: mode === "dark" ? "#ecf0f1" : "#2d3436",
      },
      accent: {
        main: mode === "dark" ? "#2F7D7D" : "#388E8E",
        contrastText: mode === "dark" ? "#ecf0f1" : "#2d3436",
      },
      neutral: {
        default: mode === "dark" ? "#222222" : "#F5F5F5",
      },
      // text: {
      //   primary: mode === "dark" ? "#ecf0f1" : "#2d3436",
      // },
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
