import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";

const Portfolio = () => {
  // const imgStyle = { width: "200px", height: "200px" };
  return (
    <>
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
              <Card.Subtitle>Solo Project</Card.Subtitle>
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

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/img/Klettersteig.png" />
            <Card.Body>
              <Card.Title>Klettersteig</Card.Title>
              <Card.Subtitle>Group Project</Card.Subtitle>
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

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/img/ProfileGenerator.png" />
            <Card.Body>
              <Card.Title>Profile Generator</Card.Title>
              <Card.Subtitle>Solo Project</Card.Subtitle>
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
        </Row>

        <Row>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/img/EmployeeTracker.png" />
            <Card.Body>
              <Card.Title>Employee Tracker</Card.Title>
              <Card.Subtitle>Solo Project</Card.Subtitle>
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

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/img/PersonalLibrary.png" />
            <Card.Body>
              <Card.Title>Personal Library</Card.Title>
              <Card.Subtitle>Group Project</Card.Subtitle>
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

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="/img/Placeholder.png" />
            <Card.Body>
              <Card.Title>Placeholder</Card.Title>
              <Card.Subtitle>Solo Project</Card.Subtitle>
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
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;

// ----------------------------------------------------------------
