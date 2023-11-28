// React Imports
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Material UI Imports
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// Custom Imports
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import FourZeroFour from "./pages/FourZeroFour";
import getTheme from "./theme";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={getTheme(darkMode ? "dark" : "light")}>
        <BrowserRouter darkMode={darkMode} setDarkMode={setDarkMode}>
          <Navbar />
          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="*" element={<FourZeroFour />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
