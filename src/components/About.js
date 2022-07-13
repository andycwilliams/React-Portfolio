import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <>
      <br></br>
      <Container fluid="md">
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h2>About</h2>
          </Col>
          <Col md="auto">
            <h2>Bio</h2>
            <p>
              Front and back end developer utilizing an extensive and diverse
              background in communication and technical knowledge. Experienced
              in both self-directed work and collaborating across departments,
              communicating technical issues to non-technical clients. Earned
              full-stack development certificate from the University of Oregon
              with a focus on JavaScript and keeping pace with newer
              technologies such as React and MongoDB. Additionally earned a
              certificate in Java from Southern Methodist University.
              Collaborated on key programming projects as well as pursuing
              independent endeavors, such as supervising a team of multilingual
              workers and coding apps individually. Leveraging problem-solving
              abilities and creativity to adapt and remain competitive in the
              ever-evolving tech landscape. Eager to continue promoting
              sustainability, universal education, and ethics in technology.
              <br></br>
              <br></br>
              When not in pursuing tech, I am a writer classically-trained
              cellist. Wrote and produced music on the latest music-making
              programs including Kontakt and Cubase. Experienced with
              digital-based creativity and commerce. Accomplished technical and
              businses writer.
            </p>
            <h3>TECHNICAL SKILLS</h3>
            <p>
              <strong>Front end:</strong> Javascript ES6+, HTML5, CSS3, React,
              Bootstrap, Materialize, AJAX, jQuery<br></br>
              <strong>Back end:</strong> Java, MongoDB, Express, Node.js, REST
              API, MySQL, NoSQL, Spring Framework<br></br>
              <strong>Applications:</strong> Heroku, Netlify, Apollo, GraphQL,
              Insomnia, Postman, Docker, RabbitMQ
            </p>
          </Col>
        </Row>
        <div>
          <h3>Full-Stack Developer &amp; Artist</h3>
          <p>Certificate for MERN development from the University of Oregon.</p>
          <p>Certificate for Java from Southern Methodist University.</p>
          <Row>
            <Col>
              <ul>
                <li>
                  <strong>Location: </strong>Portland, OR
                </li>
                <li>
                  <strong>Phone: </strong>‪(541) 729-3612‬
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
                  <strong>Degree: </strong>Bachelor of Arts
                </li>
                <li>
                  <strong>Certificates: </strong>MERN, Java
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
