import React from "react";

const About = () => {
  return (
    <>
      <div class="section-title">
        <h2>About</h2>
        <p>
          Classically-trained cellist. Wrote and produced music on the latest
          music-making programs (Cubase, Kontakt), experienced with
          digital-based creativity and commerce. Content creator for writing
          company for 5 years. Wide range of skills developed from a diverse
          career. Transitioning into tech.
        </p>
      </div>
      <div class="col-lg-8 pt-4 pt-lg-0 content">
        <h3>Full-Stack Developer &amp; Artist</h3>
        <p class="fst-italic">
          Certified MERN developer from the University of Oregon.
        </p>
        <div class="row">
          <div class="col-lg-6">
            <ul>
              <li>
                <i class="bi bi-rounded-right"></i>
                <strong>Location: </strong>Portland, OR
              </li>
              <li>
                <i class="bi bi-rounded-right"></i>
                <strong>Phone: </strong>‪(971) 470-0584‬
              </li>
              <li>
                <i class="bi bi-rounded-right"></i>
                <strong>Age: </strong>
                <a id="ageGet">0</a>
              </li>
              <li>
                <i class="bi bi-rounded-right"></i>
                <strong>Freelance: </strong>Available
              </li>
            </ul>
          </div>
          <div class="col-lg-6">
            <ul>
              <li>
                <i class="bi bi-rounded-right"></i>
                <strong>Degree: </strong>B. A.
              </li>
              <li>
                <i class="bi bi-rounded-right"></i>
                <strong>Certificates: </strong>MERN
              </li>
              <li>
                <i class="bi bi-rounded-right"></i>
                <strong>GitHub: </strong>
                <a href="https://github.com/andycwilliams">
                  https://github.com/andycwilliams
                </a>
              </li>
              <li>
                <i class="bi bi-rounded-right"></i>
                <strong>Email: </strong>
                <a href="mailto: andywilliamscoding@gmail.com">
                  andywilliamscoding@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
