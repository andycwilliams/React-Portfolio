import React from "react";
// import { Navbar, Nav } from "react-bootstrap";

const Nav = () => {
  return (
    <>
      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li>
            {/* <a class="active" href="index.html">
              Home
            </a> */}
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
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
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

export default Nav;
