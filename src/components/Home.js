import React from "react";

const Home = () => {
  return (
    <>
      <p>Portrait</p>
      <img
        src="public/img/placeholder.png"
        class="img-fluid"
        alt="Portrait placeholder"
      />
      <section id="hero" class="d-flex align-items-center">
        <div
          class="container d-flex flex-column align-items-center"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h1 class="text-light">Andy Williams</h1>
          <h2 class="text-light">
            Full-stack developer based in Portland, Oregon
          </h2>
          {/* <a href="about.html" class="btn-about">
            About Me
          </a> */}
        </div>
      </section>
    </>
  );
};

export default Home;
