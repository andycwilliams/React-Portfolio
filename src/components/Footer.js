import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <br></br>
      <Container id="footer">
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
    </>
  );
};

export default Footer;
