import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Resume = () => {
  return (
    <>
      <br></br>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h2>Resume</h2>
            <a href="../Resume.pdf" download>
              Click to download
            </a>
          </Col>
        </Row>
        <br></br>
        <div class="row">
          <div class="col-lg-6">
            <h3 class="resume-title">Summary</h3>
            <div class="resume-item pb-0">
              <h4>Andy Williams</h4>
              <p>
                Front and back end developer utilizing my diverse background to
                expand accessibility and sustainability in tech. Earned a
                certificate in full-stack MERN development from the University
                of Oregon. My problem-solving, creativity, adaptability,
                efficiency help me keep up with the ever-changing tech
                landscape.
              </p>
              <p>
                <ul>
                  <li>Portland, OR</li>
                  <li>(971) 470-0584‬</li>
                  <li>awilliamscoding@gmail.com</li>
                </ul>
              </p>
            </div>

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>MERN Certification</h4>
              <h5>2021</h5>
              <p>
                <em>University of Oregon, Eugene, OR</em>
              </p>
              <p>
                Full-stack development at the University of Oregon's Coding Boot
                Camp.
              </p>
            </div>
            <div class="resume-item">
              <h4>Bachelor of Arts</h4>
              <h5>2012</h5>
              <p>
                <em>University of Oregon, Eugene, OR</em>
              </p>
              <p>
                English major, music minor. Studied at the University of
                Cambridge.
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>Supervisor</h4>
              <h5>7 months</h5>
              <p>
                <em>IFCO, Portland, OR </em>
              </p>
              <p>
                <ul>
                  <li>
                    Managed 30 employees of diverse backgrounds to meet daily
                    production goals.
                  </li>
                  <li>
                    Increased productivity by more than 80%, contributing to one
                    of the best years on record.
                  </li>
                  <li>
                    Bridged cultural and language barriers to ensure everyone is
                    safe, productive, and content.
                  </li>
                  <li>
                    Maintained morale, productivity, and continuously evolving
                    health standards during the COVID-19 outbreak.
                  </li>
                  <li>
                    Completed rigorous daily and weekly paperwork to meet SOP
                    standards with no room for error.
                  </li>
                  <li>
                    Contributed to streamlining efficiency while maintaining a
                    healthy and equitable workplace for all.
                  </li>
                </ul>
              </p>
            </div>
            <div class="resume-item">
              <h4>Outbound Routing Coordinator</h4>
              <h5>4 months</h5>
              <p>
                <em>Airport Drayage, Portland, OR</em>
              </p>
              <p>
                <ul>
                  <li>
                    Performed a range of office roles from processing paperwork
                    to data entry to assisting in the warehouse.
                  </li>
                  <li>
                    Built and maintained strong relationships with clients, many
                    high-value across the nation and globe.
                  </li>
                  <li>
                    Learned the complex set of regulations needed to navigate
                    the industry and each aspect of the position.
                  </li>
                  <li>
                    Balanced ledgers and transactions from clients in a
                    high-intensity environment left no room for errors.
                  </li>
                  <li>
                    Quickly entrusted to handle full responsibilities during
                    evening shift on my own.
                  </li>
                  <li>
                    Handled multiple crucial issues that often required
                    immediate solutions.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Resume;
