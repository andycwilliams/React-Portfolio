import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <div class="header-social-links">
          <a
            href="https://github.com/andycwilliams"
            class="github"
            style={{ color: "lightgrey", fontSize: "20px" }}
          >
            <i class="bi bi-github"></i>GitHub{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/andrewcharleswilliams/"
            class="linkedin"
            style={{ color: "lightgrey", fontSize: "20px" }}
          >
            <i class="bi bi-linkedin" width="1000" height="1000"></i>LinkedIn
          </a>
        </div>
      </Navbar>
    </>
  );
};

export default Navigation;
