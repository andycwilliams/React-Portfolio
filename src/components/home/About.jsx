// Material UI Imports
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import LinearProgress from "@mui/material/LinearProgress";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";

// TODO: Add icons from Icons8
// https://icons8.com/icons/set/css

const contactInfo = [
  { label: "Name", value: "Andy Williams" },
  { label: "Title", value: "Full-stack Developer" },
  { label: "Email", value: "" },
  { label: "Phone", value: "" },
];

const primarySkillsData = [
  { name: "JavaScript", level: 90 },
  { name: "CSS", level: 90 },
  { name: "HTML", level: 90 },
  { name: "React", level: 80 },
  { name: "Java", level: 80 },
  { name: "MongoDB", level: 80 },
  { name: "Express", level: 90 },
  { name: "Node.js", level: 90 },
];

const About = () => {
  // const handleResumeDownload = () => {};

  return (
    <Fade in={true} timeout={1000}>
      <Box id="about-section" sx={{ mx: { xs: "0px", sm: "150px" } }}>
        <Typography variant="h2" gutterBottom sx={{ textAlign: "center" }}>
          Accessible. Versatile. Efficient.
        </Typography>
        <Paper
        // sx={{ p: 5 }}
        >
          <Grid container>
            <Grid item xs={12} md={6} sx={{ p: 5 }}>
              {/* Bio */}
              <CardMedia
                component="img"
                image={"/assets/images/placeholder.png"}
                alt={`Profile of Andy`}
                sx={{
                  objectFit: "contain",
                  height: "200px",
                  width: "100%",
                  mb: "10px",
                }}
              />
              {contactInfo.map(({ label, value }, index) => (
                <Typography key={index} variant="body1">
                  <span style={{ fontWeight: "bold" }}>{label}: </span>
                  {value}
                </Typography>
              ))}
              {primarySkillsData.map(({ name, level }, index) => (
                <Box key={index}>
                  <Typography>{name}</Typography>
                  <LinearProgress variant="determinate" value={level} />
                </Box>
              ))}
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 5 }}>
              <Typography variant="body1" paragraph>
                Born in Silicon Valley, raised in Silicon Forest.
              </Typography>
              <Typography variant="body1" paragraph>
                Front and back end developer utilizing an extensive and diverse
                background in communication and technical knowledge. Experienced
                in both self-directed work and collaborating across departments,
                communicating technical issues to non-technical clients. Earned
                full-stack development certificate from the University of Oregon
                with a focus on JavaScript and keeping pace with newer
                technologies such as React and MongoDB. Additionally graduated
                from Southern Methodist University for Java React Native.
                Collaborated on key programming projects as well as pursuing
                independent endeavors, such as supervising a team of
                multilingual workers and coding apps individually. Leveraging
                problem-solving abilities and creativity to adapt and remain
                competitive in the ever-evolving tech landscape. Eager to
                continue promoting sustainability, universal education, and
                ethics in technology.
              </Typography>
              <Typography variant="body1" paragraph>
                When I'm not doing that, I'm playing music, volunteering for
                open-source projects, or learning some cool new tech.
              </Typography>
              <Typography variant="body1">
                Always looking forward to what's next!
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Fade>
  );
};

export default About;
