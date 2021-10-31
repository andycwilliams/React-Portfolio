import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Document, Page } from "react-pdf";

const Resume = () => {
  const [numPages, setNumPages] = useState(null);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h4>Resume</h4>
            <p>Resume Here</p>
            <div>
              <Document
                file="https://docs.google.com/document/d/1FaNgv2zT53WuWUjClzNN6jMa-ClH24IIrQFVslUQwxU/edit?usp=sharing"
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                style={{ width: "100%" }}
              >
                {Array.apply(null, Array(numPages))
                  .map((x, i) => i + 1)
                  .map((page) => (
                    <Page pageNumber={page} size="A4" />
                  ))}
              </Document>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Resume;
