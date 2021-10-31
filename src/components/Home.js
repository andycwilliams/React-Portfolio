import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
// import bg from "../img/Redwoods.jpg";
import "../App.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <Container fluid="md">
          <img
            src="/img/Placeholder.png"
            class="img-fluid"
            alt="Portrait of developer"
            style={{ width: "200px", height: "200px" }}
          />
          {/* <img
            src="/img/Redwoods.jpg"
            alt="Wallpaper of redwood forest"
            // style={{ width: "200px", height: "200px" }}
          /> */}
          <h1>Andy Williams</h1>
          <h3>Full-stack developer based in Portland, Oregon</h3>
          <Row>
            <Col>
              <Button>ABOUT ME BUTTON</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
