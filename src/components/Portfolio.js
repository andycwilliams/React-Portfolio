import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Portfolio = () => {
  const imgStyle = { width: "200px", height: "200px" };
  return (
    <>
      <section>
        <Container fluid="md">
          <h2>Portfolio</h2>
          <p>Select projects.</p>
          <Row>
            <Col>TEST</Col>
          </Row>
        </Container>

        <Container fluid="md">
          <Row>
            <Col>
              <img
                src="/img/Klettersteig.png"
                class="img-fluid"
                alt="Klettersteig screenshot"
                style={imgStyle}
              />
              <div>
                <h4>Klettersteig</h4>
                <p href="https://github.com/Windowmac/Klettersteig">
                  Group Project
                </p>
                <div>
                  <a
                    href="assets/img/portfolio/portfolio-2.jpg"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox"
                    title="Web 3"
                    style={{ width: "100%", height: "10px" }}
                  >
                    {/* <i class="bx bx-plus"></i> */}
                  </a>
                  <a
                    href="portfolio-details.html"
                    class="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                  >
                    <i class="bx bx-link"></i>
                  </a>
                  <p>Description</p>
                </div>
              </div>
            </Col>

            <Col>
              <div>
                <img
                  src="img/ProfileGenerator.png"
                  class="img-fluid"
                  alt="Placeholder"
                  style={imgStyle}
                />
                <div>
                  <h4>Profile Generator</h4>
                  <p href="https://github.com/andycwilliams/ProfileGen-Week10Homework">
                    Solo Project
                  </p>
                  <div>
                    <a
                      href="assets/img/portfolio/portfolio-5.jpg"
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="Web 2"
                    >
                      <i class="bx bx-plus"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      class="portfolio-details-lightbox"
                      data-glightbox="type: external"
                      title="Portfolio Details"
                    >
                      <i class="bx bx-link"></i>
                    </a>
                    <p>Description</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <img
                  src="img/EmployeeTracker.png"
                  class="img-fluid"
                  alt="Placeholder"
                  style={imgStyle}
                />
                <div>
                  <h4>Employee Tracker CMS</h4>
                  <p href="https://github.com/andycwilliams/EmployeeTracker-Week12Homework">
                    Solo Project
                  </p>
                  <div>
                    <a
                      href="assets/img/portfolio/portfolio-8.jpg"
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="Card 3"
                    >
                      <i class="bx bx-plus"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      class="portfolio-details-lightbox"
                      data-glightbox="type: external"
                      title="Portfolio Details"
                    >
                      <i class="bx bx-link"></i>
                    </a>
                    <p>Description</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col>
              <div>
                <img
                  src="img/PersonalLibrary.png"
                  class="img-fluid"
                  alt="Presonal Library screenshot"
                  style={imgStyle}
                />
                <div>
                  <h4>Personal Library</h4>
                  <p href="https://github.com/bleufox/Personal-Library">
                    Group Project
                  </p>
                  <div>
                    <a
                      href="assets/img/portfolio/portfolio-9.jpg"
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox"
                      title="Web 3"
                    >
                      <i class="bx bx-plus"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      class="portfolio-details-lightbox"
                      data-glightbox="type: external"
                      title="Portfolio Details"
                    >
                      <i class="bx bx-link"></i>
                    </a>
                    <p>Description</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Portfolio;
