// Component Imports
import {
  About,
  ContactForm,
  Hero,
  PortfolioBrief,
  ResumeBrief,
  Quote,
} from "../components/home";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ResumeBrief />
      {/* <Quote /> */}
      <PortfolioBrief />
      <ContactForm />
    </>
  );
};

export default Home;
