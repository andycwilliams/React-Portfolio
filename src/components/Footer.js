import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <div class="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Andy</span>
              </strong>
              . All Rights Reserved.
            </div>
          </Col>
        </Row>
      </Container>
      {/* <footer id="footer" bg="dark" expand="lg" variant="dark">
        <div class="container">
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Andy</span>
            </strong>
            . All Rights Reserved.
          </div>
        </div>
      </footer> */}
    </>
  );
};

export default Footer;
