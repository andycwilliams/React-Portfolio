import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

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
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/img/Placeholder.png" />
              <Card.Body>
                <Card.Title>Productivity Tracker</Card.Title>
                <h6 class="card-subtitle mb-2 text-muted">Solo Project</h6>
                <Card.Text>App description.</Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/andycwilliams/ProductivityTracker-PersonalProject2.5"
                >
                  GitHub
                </Button>
                <Button
                  variant="secondary"
                  href="https://github.com/andycwilliams/ProductivityTracker-PersonalProject2.5"
                >
                  Deployed
                </Button>
              </Card.Body>
            </Card>
            {/* 
            <Col fluid>
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <img
                    src="/img/Placeholder.png"
                    class="img-fluid"
                    alt="Productivity Tracker screenshot"
                    style={imgStyle}
                  />
                  <h5 class="card-title">Productivity Tracker</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Solo Project</h6>
                  <p class="card-text">An app that.</p>
                  <a
                    href="https://github.com/andycwilliams/ProductivityTracker-PersonalProject2.5"
                    class="card-link"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://github.com/andycwilliams/ProductivityTracker-PersonalProject2.5"
                    class="card-link"
                  >
                    Deployed Link
                  </a>
                </div>
              </div>
            </Col> */}
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/img/Klettersteig.png" />
              <Card.Body>
                <Card.Title>Klettersteig</Card.Title>
                <h6 class="card-subtitle mb-2 text-muted">Group Project</h6>
                <Card.Text>App description.</Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/Windowmac/Klettersteig"
                >
                  GitHub
                </Button>
                <Button
                  variant="secondary"
                  href="https://sheltered-badlands-95600.herokuapp.com/"
                >
                  Deployed
                </Button>
              </Card.Body>
            </Card>

            {/* <Col fluid>
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <img
                    src="/img/Klettersteig.png"
                    class="img-fluid"
                    alt="Klettersteig screenshot"
                    style={imgStyle}
                  />

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
            </Col> */}

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/img/ProfileGenerator.png" />
              <Card.Body>
                <Card.Title>Profile Generator</Card.Title>
                <h6 class="card-subtitle mb-2 text-muted">Solo Project</h6>
                <Card.Text>App description.</Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/andycwilliams/ProfileGen-Week10Homework"
                >
                  GitHub
                </Button>
                <Button
                  variant="secondary"
                  href="https://github.com/andycwilliams/ProfileGen-Week10Homework"
                >
                  Deployed
                </Button>
              </Card.Body>
            </Card>
            {/* <Col fluid>
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <img
                    src="/img/ProfileGenerator.png"
                    class="img-fluid"
                    alt="ProfileGenerator screenshot"
                    style={imgStyle}
                  />

                  <h5 class="card-title">ProfileGenerator</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Solo Project</h6>
                  <p class="card-text">An app that.</p>
                  <a
                    href="https://github.com/andycwilliams/ProfileGen-Week10Homework"
                    class="card-link"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://github.com/andycwilliams/ProfileGen-Week10Homework"
                    class="card-link"
                  >
                    Deployed Link
                  </a>
                </div>
              </div>
            </Col> */}
          </Row>

          <Row>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/img/EmployeeTracker.png" />
              <Card.Body>
                <Card.Title>Employee Tracker</Card.Title>
                <h6 class="card-subtitle mb-2 text-muted">Solo Project</h6>
                <Card.Text>App description.</Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/andycwilliams/EmployeeTracker-Week12Homework"
                >
                  GitHub
                </Button>
                <Button
                  variant="secondary"
                  href="https://github.com/andycwilliams/EmployeeTracker-Week12Homework"
                >
                  Deployed
                </Button>
              </Card.Body>
            </Card>
            {/* <Col fluid>
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <img
                    src="/img/EmployeeTracker.png"
                    class="img-fluid"
                    alt="EmployeeTracker screenshot"
                    style={imgStyle}
                  />

                  <h5 class="card-title">EmployeeTracker</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Solo Project</h6>
                  <p class="card-text">An app that.</p>
                  <a
                    href="https://github.com/andycwilliams/EmployeeTracker-Week12Homework"
                    class="card-link"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://github.com/andycwilliams/EmployeeTracker-Week12Homework"
                    class="card-link"
                  >
                    Deployed Link
                  </a>
                </div>
              </div>
            </Col> */}

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/img/PersonalLibrary.png" />
              <Card.Body>
                <Card.Title>Personal Library</Card.Title>
                <h6 class="card-subtitle mb-2 text-muted">Group Project</h6>
                <Card.Text>App description.</Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/bleufox/Personal-Library"
                >
                  GitHub
                </Button>
                <Button
                  variant="secondary"
                  href="https://github.com/bleufox/Personal-Library"
                >
                  Deployed
                </Button>
              </Card.Body>
            </Card>
            {/* <Col fluid>
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <img
                    src="/img/PersonalLibrary.png"
                    class="img-fluid"
                    alt="PersonalLibrary screenshot"
                    style={imgStyle}
                  />

                  <h5 class="card-title">PersonalLibrary</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Group Project</h6>
                  <p class="card-text">An app that.</p>
                  <a
                    href="https://github.com/bleufox/Personal-Library"
                    class="card-link"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://github.com/bleufox/Personal-Library"
                    class="card-link"
                  >
                    Deployed Link
                  </a>
                </div>
              </div>
            </Col> */}

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/img/Placeholder.png" />
              <Card.Body>
                <Card.Title>Placeholder</Card.Title>
                <h6 class="card-subtitle mb-2 text-muted">Solo Project</h6>
                <Card.Text>App description.</Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/bleufox/Personal-Library"
                >
                  GitHub
                </Button>
                <Button
                  variant="secondary"
                  href="https://github.com/bleufox/Personal-Library"
                >
                  Deployed
                </Button>
              </Card.Body>
            </Card>
            {/* <Col fluid>
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <img
                    src="/img/Placeholder.png"
                    class="img-fluid"
                    alt="Placeholder"
                    style={imgStyle}
                  />

                  <h5 class="card-title">Placeholder</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Project</h6>
                  <p class="card-text">An app that.</p>
                  <a href="https://github.com/andycwilliams" class="card-link">
                    GitHub
                  </a>
                  <a href="https://github.com/andycwilliams" class="card-link">
                    Deployed Link
                  </a>
                </div>
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Portfolio;

// ----------------------------------------------------------------
