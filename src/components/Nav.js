import React from "react";

const Navbar = () => {
  return (
    <>
      <ul>
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
      </div>
    </>
  );
};

export default Navbar;
