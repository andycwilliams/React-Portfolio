// React Imports
import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Material UI Imports
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
// Component Imports
// import Bio from "./pages/Bio";
import Footer from "./components/global/Footer";
import FourZeroFour from "./pages/FourZeroFour";
import Home from "./pages/Home";
import Navbar from "./components/global/Navbar";
// import Portfolio from "./pages/Portfolio";
// Theme Imports
import getTheme from "./theme";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={getTheme(darkMode ? "dark" : "light")}>
        <Router>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              {/* <Route exact path="/bio" element={<Bio />} /> */}
              {/* <Route path="/portfolio" element={<Portfolio />} /> */}
              <Route path="*" element={<FourZeroFour />} />
            </Routes>
          </main>
          <Footer />
        </Router>
        {/* <ToggleDarkMode darkMode={darkMode} setDarkMode={setDarkMode} /> */}
      </ThemeProvider>
    </>
  );
};

export default App;
