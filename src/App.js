import React from "react";
// import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={() => <Home />} />
        <Route path="/about" exact component={() => <About />} />
        <Route path="/portfolio" exact component={() => <Portfolio />} />
        <Route path="/resume" exact component={() => <Resume />} />
        <Route path="/contact" exact component={() => <Contact />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
