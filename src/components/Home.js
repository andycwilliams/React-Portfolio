import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container fluid="md">
        <img
          src="/img/Placeholder.png"
          class="img-fluid"
          alt="Portrait of developer"
          style={{ width: "200px", height: "200px" }}
        />
        <h1>Andy Williams</h1>
        <h2>Full-stack developer based in Portland, Oregon</h2>
        <Row>
          <Col>ABOUT ME BUTTON</Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
