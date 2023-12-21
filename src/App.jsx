// React Imports
import { useState } from "react";
// React Router Dom Imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Material UI Imports
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
// Component Imports
import Footer from "./components/global/Footer";
import FourZeroFour from "./pages/FourZeroFour";
import Home from "./pages/Home";
import Navbar from "./components/global/Navbar";
import Portfolio from "./pages/Portfolio";
// Theme Imports
import getTheme from "./theme";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Container>
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
    </Container>
  );
};

export default App;
