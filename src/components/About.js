import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container fluid="md">
        <div>
          <h2>About</h2>
          <p>
            Classically-trained cellist. Wrote and produced music on the latest
            music-making programs (Cubase, Kontakt), experienced with
            digital-based creativity and commerce. Content creator for writing
            company for 5 years. Wide range of skills developed from a diverse
            career. Transitioning into tech.
          </p>
        </div>
        <div>
          <h3>Full-Stack Developer &amp; Artist</h3>
          <p>Certified MERN developer from the University of Oregon.</p>
          <Row>
            <Col>
              <ul>
                <li>
                  <strong>Location: </strong>Portland, OR
                </li>
                <li>
                  <strong>Phone: </strong>‪(971) 470-0584‬
                </li>
                <li>
                  <strong>Age: </strong>
                  <span id="ageGet">0</span>
                </li>
                <li>
                  <strong>Freelance: </strong>Available
                </li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>
                  <strong>Degree: </strong>B. A.
                </li>
                <li>
                  <strong>Certificates: </strong>MERN
                </li>
                <li>
                  <strong>GitHub: </strong>
                  <a href="https://github.com/andycwilliams">
                    https://github.com/andycwilliams
                  </a>
                </li>
                <li>
                  <strong>Email: </strong>
                  <a href="mailto: andywilliamscoding@gmail.com">
                    andywilliamscoding@gmail.com
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default About;
