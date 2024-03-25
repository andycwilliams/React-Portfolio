// Material UI Imports
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
// Assets Imports
import profileImage from "/assets/images/profile_picture.webp";
// Data Imports
import { contactData, primarySkillsData } from "../data/aboutData";

// TODO: Add icons from Icons8
// https://icons8.com/icons/set/css

const About = () => {
  // const handleResumeDownload = () => {};

  return (
    <Fade in={true} timeout={1000}>
      <Box
        id="about-section"
        sx={{ mx: { xs: "0px", sm: "75px", md: "100px" } }}
      >
        <Typography variant="h2" sx={{ m: "2.5rem", textAlign: "center" }}>
          Accessible. Versatile. Efficient.
        </Typography>
        <Box>
          <Grid container>
            <Grid item xs={12} md={6} sx={{ px: 1, py: 1 }}>
              <Box>
                {/* Photo */}
                <CardMedia
                  component="img"
                  image={profileImage}
                  alt={`Profile of Andy Williams`}
                  sx={{
                    objectFit: "contain",
                    height: "200px",
                    width: "100%",
                    mb: "10px",
                  }}
                />
                {contactData.map(({ label, value }, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    textAlign={{ xs: "center", sm: "left" }}
                  >
                    <span style={{ fontWeight: "bold" }}>{label}: </span>
                    {value}
                  </Typography>
                ))}
              </Box>
              <Box sx={{ py: 2 }}>
                {/* Skills */}
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h5" component="h3">
                    Primary Skills
                  </Typography>
                </Box>
                {primarySkillsData.map(({ name, level }, index) => (
                  <Box key={index}>
                    <Typography>{name}</Typography>
                    <LinearProgress variant="determinate" value={level} />
                  </Box>
                ))}
              </Box>
            </Grid>
            {/* Bio */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{ px: 1, py: 1 }}
              textAlign={{ xs: "center", sm: "left" }}
            >
              <Typography variant="h6" component="h3" paragraph>
                Born in Silicon Valley, raised in Silicon Forest
              </Typography>
              <Typography variant="body1" paragraph>
                Hello, I'm Andy, a Portland-based full stack developer
                specializing in React and Java. I have experience with both
                front and back end, including UI and applying accessibility
                standards.
              </Typography>
              <Typography variant="body1" paragraph>
                I have certificates in MERN (from the University of Oregon),
                Java React Native (from Southern Methodist University), as well
                as Cloud Infrastructure 2022 Certified Foundations Associate.
              </Typography>
              <Typography variant="body1" paragraph>
                My goal is to help make tech more accessible and efficient for
                everyone. Always looking to contribute more for sustainability,
                universal education, and ethics in technology.
              </Typography>
              <Typography variant="body1" paragraph>
                When I'm not doing that I'm practicing music, volunteering with
                local civic tech organizations, or failing to read through my
                book collection.
              </Typography>
              <Typography variant="body1" paragraph>
                Always looking forward to what's next!
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Fade>
  );
};

export default About;
