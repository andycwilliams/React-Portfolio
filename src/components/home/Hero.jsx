// Material UI Imports
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
// Assets Imports
import heroBackgroundImage from "/assets/images/hero.webp";
// React Animation Imports
import { TypeAnimation } from "react-type-animation";

const CURSOR_CLASS_NAME = "custom-type-animation-cursor";

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      id="home-section"
      style={{
        position: "relative",
        backgroundImage: `url(${heroBackgroundImage})`,
        backgroundSize: "cover",
        height: "700px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.65)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Fade in={true} timeout={1000}>
          <Typography
            variant="h1"
            sx={{ fontSize: "5rem", fontWeight: "bold" }}
          >
            Andy
          </Typography>
        </Fade>

        <Fade in={true} timeout={1000} style={{ transitionDelay: "200ms" }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2 }}
            >
              <Typography
                variant="h3"
              >
                Developing
              </Typography>
              <TypeAnimation
                className={CURSOR_CLASS_NAME}
                sequence={[
                  "Web design",
                  1000,
                  "Front-end",
                  1000,
                  "Back-end",
                  1000,
                  "Full-stack",
                  (el) => el.classList.remove(CURSOR_CLASS_NAME),
                ]}
                wrapper="p"
                style={{ color: theme.palette.primary.main }}
              />
            </Stack>
          </Typography>
        </Fade>
      </Box>
    </Box>
  );
};

export default Hero;
