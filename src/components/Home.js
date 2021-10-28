import React from "react";
// import Img from "../placeholder.png";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container fluid>
        <h1>Andy Williams</h1>
        <h2>Full-stack developer based in Portland, Oregon</h2>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
      <p>Portrait</p>
      {/* <img src="placeholder.png" class="img-fluid" alt="Portrait placeholder" /> */}
      <section>
        <div>
          <h1>Andy Williams</h1>
          <h2>Full-stack developer based in Portland, Oregon</h2>
          <a href="about.html" class="btn-about">
            About Me
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
