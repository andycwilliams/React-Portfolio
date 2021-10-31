import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";

const Portfolio = () => {
  // const imgStyle = { width: "200px", height: "200px" };
  return (
    <>
      <br></br>
      <Container fluid="md">
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h2>Portfolio</h2>
            <p>Select projects.</p>
          </Col>
        </Row>
      </Container>

      <Container fluid="md">
        <Row className="justify-content-md-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/img/Placeholder.png" />
            <Card.Body>
              <Card.Title>Productivity Tracker</Card.Title>
              <Card.Subtitle>Solo Project</Card.Subtitle>
              <Card.Text>App description.</Card.Text>
              <ButtonGroup aria-label="Basic example">
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
              </ButtonGroup>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/img/Klettersteig.png" />
            <Card.Body>
              <Card.Title>Klettersteig</Card.Title>
              <Card.Subtitle>Group Project</Card.Subtitle>
              <Card.Text>App description.</Card.Text>
              <ButtonGroup aria-label="Basic example">
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
              </ButtonGroup>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/img/ProfileGenerator.png" />
            <Card.Body>
              <Card.Title>Profile Generator</Card.Title>
              <Card.Subtitle>Solo Project</Card.Subtitle>
              <Card.Text>App description.</Card.Text>
              <ButtonGroup aria-label="Basic example">
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
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Row>

        <Row className="justify-content-md-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/img/EmployeeTracker.png" />
            <Card.Body>
              <Card.Title>Employee Tracker</Card.Title>
              <Card.Subtitle>Solo Project</Card.Subtitle>
              <Card.Text>App description.</Card.Text>
              <ButtonGroup aria-label="Basic example">
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
              </ButtonGroup>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/img/PersonalLibrary.png" />
            <Card.Body>
              <Card.Title>Personal Library</Card.Title>
              <Card.Subtitle>Group Project</Card.Subtitle>
              <Card.Text>App description.</Card.Text>
              <ButtonGroup aria-label="Basic example">
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
              </ButtonGroup>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/img/Placeholder.png" />
            <Card.Body>
              <Card.Title>Placeholder</Card.Title>
              <Card.Subtitle>Solo Project</Card.Subtitle>
              <Card.Text>App description.</Card.Text>
              <ButtonGroup aria-label="Basic example">
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
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;

// ----------------------------------------------------------------
