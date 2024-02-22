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
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";
// Material UI Icons Imports
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
// React Vertical Timeline Imports
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// TODO: Add icons from Icons8
// https://icons8.com/icons/set/css

const About = () => {
  // const handleResumeDownload = () => {};

  return (
    <Fade in={true} timeout={1000}>
      <Container>
        <Box id="about-section">
          {/* Bio */}
          <CardMedia
            component="img"
            image={"/assets/images/placeholder.png"}
            alt={`Headshot of Andy`}
            sx={{
              objectFit: "contain",
              height: "200px",
              width: "100%",
            }}
          />
          <Typography variant="h2" gutterBottom sx={{ textAlign: "center" }}>
            Accessible. Versatile. Efficient.
          </Typography>
          <Typography variant="body1" paragraph>
            Born in Silicon Valley, raised in Silicon Forest.
          </Typography>
          <Typography variant="body1" paragraph>
            Front and back end developer utilizing an extensive and diverse
            background in communication and technical knowledge. Experienced in
            both self-directed work and collaborating across departments,
            communicating technical issues to non-technical clients. Earned
            full-stack development certificate from the University of Oregon
            with a focus on JavaScript and keeping pace with newer technologies
            such as React and MongoDB. Additionally graduated from Southern
            Methodist University for Java React Native. Collaborated on key
            programming projects as well as pursuing independent endeavors, such
            as supervising a team of multilingual workers and coding apps
            individually. Leveraging problem-solving abilities and creativity to
            adapt and remain competitive in the ever-evolving tech landscape.
            Eager to continue promoting sustainability, universal education, and
            ethics in technology.
          </Typography>
          <Typography variant="body1" paragraph>
            When I'm not doing that, I'm playing music, volunteering for
            open-source projects, or learning some cool new tech.
          </Typography>
          <Typography variant="body1">
            Always looking forward to what's next!
          </Typography>
          <Typography variant="body1">Name: Andy Williams</Typography>
          <Typography variant="body1">Title: Web Developer</Typography>
          <Typography variant="body1">
            Email: andywilliamscoding@gmail.com
          </Typography>
          <Typography variant="body1">Phone:</Typography>
        </Box>
      </Container>
    </Fade>
  );
};

export default About;
