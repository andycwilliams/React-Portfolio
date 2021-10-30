import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand>&e</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/Home">Home</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/Resume">Resume</Nav.Link>
          <Nav.Link href="/Contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
      {/* <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="/resume">Resume</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="/portfolio">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="/contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav> */}
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch> */}
      {/* <ul>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="resume.html">Resume</a>
        </li>
        <li>
          <a href="portfolio.html">Portfolio</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
      </ul> */}
      <div class="header-social-links">
        <a href="https://github.com/andycwilliams" class="github">
          <i class="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/andrewcharleswilliams/"
          class="linkedin"
        >
          <i class="bi bi-linkedin"></i>
        </a>
      </div>
    </>
  );
};

export default Navigation;
