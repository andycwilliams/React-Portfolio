import { Link as RouterLink } from "react-router-dom";
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
// Material UI Icons imports
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
// React Vertical Timeline imports
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const BioBrief = () => {
  const theme = useTheme();

  return (
    <VerticalTimeline layout={"1-column-left"} animate={false}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: theme.palette.primary.main,
          color: "#fff",
        }}
        contentArrowStyle={{
          borderRight: `7px solid  ${theme.palette.primary.main}`,
        }}
        date="Sep 2023 - Present"
        iconStyle={{ background: theme.palette.primary.main, color: "#fff" }}
        icon={<WorkIcon />}
        style={{ borderRadius: "5px" }}
      >
        <Fade in={true} timeout={1000}>
          <div>
            <h3 className="vertical-timeline-element-title">
              Full-stack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Portland, Oregon, United States
            </h4>
            <p>
              - Contributing heavily to civic tech efforts in Portland, Oregon
              <br />
              - Specializing in front-end development, prioritizing
              accessibility and real-world user experience <br />- Further
              expanding upon knowledge of React.js and frameworks including
              Material UI
            </p>
          </div>
        </Fade>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jul 2022 - Sep 2023"
        iconStyle={{ background: theme.palette.primary.main, color: "#fff" }}
        icon={<WorkIcon />}
      >
        <Fade in={true} timeout={1000}>
          <div>
            <h3 className="vertical-timeline-element-title">
              Associate - Projects
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Portland, Oregon, United States
            </h4>
            <p>
              - Worked for multiple consecutive projects, adapting to and
              fulfilling the each client's individual needs <br />
              - Trained in between projects, strengthening existing skills such
              as Java, SQL, and microservices <br />
              - Upskilled with new technologies such as Oracle Cloud
              cloud-native design <br />- Kept pace with ever-evolving tech
              landscape and security standards
            </p>
          </div>
        </Fade>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jan 2023 - Apr 2023"
        iconStyle={{ background: theme.palette.primary.main, color: "#fff" }}
        icon={<WorkIcon />}
      >
        <Fade in={true} timeout={1000}>
          <div>
            <h3 className="vertical-timeline-element-title">
              Front-end Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Portland, Oregon, United States
            </h4>
            <p>
              - Joined as one of the first regular contributors for the PASS
              project, an open source app to assist the housing insecure
              population in Portland, Oregon
              <br />
              - Served as sole UI developer and helped shape role of UI team
              going forward
              <br />
              - Helped research and test multiple front-end libraries and
              frameworks for what best suited the project
              <br />- Applied education in React.js and CSS to revamp entire
              design with Material UI framework
            </p>
          </div>
        </Fade>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="April 2022 - Jun 2022"
        iconStyle={{ background: theme.palette.secondary.main, color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <Fade in={true} timeout={1000}>
          <div>
            <h3 className="vertical-timeline-element-title">
              Southern Methodist University Continuing & Professional Education
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Java Full-stack Certification
            </h4>
            <p>
              Intensive 7-week program for Java, microservices,
              containerization, test-driven development, cloud-native
              architecture, data structures, encryption, Agile methodologies,
              Kubernetes, as well as continuous integration and continuous
              delivery.
            </p>
          </div>
        </Fade>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Apr 2021 - Oct 2021"
        iconStyle={{ background: theme.palette.secondary.main, color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <Fade in={true} timeout={1000}>
          <div>
            <h3 className="vertical-timeline-element-title">
              University of Oregon Continuing and Professional Education Boot
              Camps
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Full-stack MERN Certificate
            </h4>
            <p>
              Comprehensive 24-week program for strong foundational skills in
              web applications, object-oriented programming, Javascript,
              MongoDB, Express, React, Node.js, MySQL, NoSQL, Git, jQuery, and
              more.
            </p>
          </div>
        </Fade>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: theme.palette.secondary.main, color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <Fade in={true} timeout={1000}>
          <div>
            <h3 className="vertical-timeline-element-title">
              University of Oregon
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor of Arts
            </h4>
            <p>English Language and Literature major, Music minor</p>
          </div>
        </Fade>
      </VerticalTimelineElement>

      <Fade in={true} timeout={1000}>
        <Box sx={{ textAlign: "center", marginTop: "2rem", margin: "10px" }}>
          <Button
            component={RouterLink}
            to="/bio"
            variant="contained"
            color="primary"
            sx={{ fontSize: "1.5rem", padding: "1rem 2rem", color: "#fff" }}
          >
            Go to full resume
          </Button>
        </Box>
      </Fade>
    </VerticalTimeline>
  );
};

export default BioBrief;
