import React from "react";
import { Nav } from "react-bootstrap";

const Navbar = () => {
  return (
    <>
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Resume</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
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
      </ul>
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
      </div> */}
    </>
  );
};

export default Navbar;
