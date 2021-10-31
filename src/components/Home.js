import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
// import bg from "../img/Redwoods.jpg";
import "../App.css";

const Home = () => {
  return (
    <>
      <div className="backgroundImg">
        <Container fluid="md">
          <Row className="justify-content-md-center">
            <Col md="auto">
              <div>
                <img
                  src="/img/Placeholder.png"
                  class="img-fluid"
                  alt="Portrait of developer"
                  style={{ width: "200px", height: "200px" }}
                />
                <h1>Andy Williams</h1>
                <h3>Full-stack developer based in Portland, Oregon</h3>
                <Button>About Me</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
