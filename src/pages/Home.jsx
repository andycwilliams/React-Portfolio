// Material UI Imports
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
// Component Imports
import {
  About,
  ContactForm,
  Hero,
  PortfolioBrief,
  ResumeBrief,
  // Quote,
} from "../components/home";

const Home = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.main,
        color: theme.palette.background.contrastText,
      }}
    >
      <Hero />
      <About />
      <ResumeBrief />
      {/* <Quote /> */}
      <PortfolioBrief />
      <ContactForm />
    </Box>
  );
};

export default Home;
