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
// Material UI Icons imports
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
// React Vertical Timeline imports
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
    <Container>
      <Box id="about-section">
        {/* Bio */}
        <Typography variant="h2" gutterBottom sx={{ textAlign: "center" }}>
          Accessible. Versatile. Efficient.
        </Typography>
        <Typography variant="body1" paragraph>
          Born in Silicon Valley, raised in Silicon Forest.
        </Typography>
        <Typography variant="body1" paragraph>
          When I'm not doing that, I'm playing music, volunteering for
          open-source projects, or learning some cool new tech.
        </Typography>
        <Typography variant="body1">
          Always looking forward to what's next!
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
