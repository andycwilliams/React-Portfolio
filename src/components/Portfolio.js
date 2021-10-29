import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Portfolio = () => {
  const imgStyle = { width: "200px", height: "200px" };
  return (
    <>
      <section>
        <Container fluid="md">
          <h2>Portfolio</h2>
          <p>Select projects.</p>
        </Container>

        <Container fluid="md">
          <Row>
            <Col>
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src="/img/Placeholder.png"
                  class="img-fluid"
                  alt="Productivity Tracker screenshot"
                  style={imgStyle}
                />
                <div class="card-body">
                  <h5 class="card-title">Productivity Tracker</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Solo Project</h6>
                  <p class="card-text">An app that.</p>
                  <a
                    href="https://github.com/andycwilliams/ProductivityTracker-PersonalProject2.5"
                    class="card-link"
                  >
                    GitHub
                  </a>
                  <a href="https://www.google.com" class="card-link">
                    Deployed Link
                  </a>
                </div>
              </div>
            </Col>

            <Col>
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src="/img/Klettersteig.png"
                  class="img-fluid"
                  alt="Klettersteig screenshot"
                  style={imgStyle}
                />
                <div class="card-body">
                  <h5 class="card-title">Klettersteig</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Group Project</h6>
                  <p class="card-text">An app that.</p>
                  <a
                    href="https://github.com/Windowmac/Klettersteig"
                    class="card-link"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://sheltered-badlands-95600.herokuapp.com/"
                    class="card-link"
                  >
                    Deployed Link
                  </a>
                </div>
              </div>
            </Col>

            <Col>
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src="/img/ProfileGenerator.png"
                  class="img-fluid"
                  alt="ProfileGenerator screenshot"
                  style={imgStyle}
                />
                <div class="card-body">
                  <h5 class="card-title">ProfileGenerator</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Solo Project</h6>
                  <p class="card-text">An app that.</p>
                  <a
                    href="https://github.com/andycwilliams/ProfileGen-Week10Homework"
                    class="card-link"
                  >
                    GitHub
                  </a>
                  <a href="" class="card-link">
                    Deployed Link
                  </a>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src="/img/EmployeeTracker.png"
                  class="img-fluid"
                  alt="EmployeeTracker screenshot"
                  style={imgStyle}
                />
                <div class="card-body">
                  <h5 class="card-title">EmployeeTracker</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Solo Project</h6>
                  <p class="card-text">An app that.</p>
                  <a
                    href="https://github.com/andycwilliams/EmployeeTracker-Week12Homework"
                    class="card-link"
                  >
                    GitHub
                  </a>
                  <a href="" class="card-link">
                    Deployed Link
                  </a>
                </div>
              </div>
            </Col>

            <Col>
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src="/img/PersonalLibrary.png"
                  class="img-fluid"
                  alt="PersonalLibrary screenshot"
                  style={imgStyle}
                />
                <div class="card-body">
                  <h5 class="card-title">PersonalLibrary</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Group Project</h6>
                  <p class="card-text">An app that.</p>
                  <a
                    href="https://github.com/bleufox/Personal-Library"
                    class="card-link"
                  >
                    GitHub
                  </a>
                  <a href="" class="card-link">
                    Deployed Link
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Portfolio;

// ----------------------------------------------------------------
