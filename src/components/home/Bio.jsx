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

// TODO: Add icons from Icons8
// https://icons8.com/icons/set/css

const Bio = () => {
  return (
    <Box>
      {/* Bio */}
      <Typography variant="h2" gutterBottom>
        My name is Andy I do stuff sometimes
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        Full-stack Developer
      </Typography>
      <Typography variant="body1" paragraph>
        Born in Silicon Valley, raised in Silicon Forest.
      </Typography>
      <Typography variant="body1" paragraph>
        When I'm not doing that, I'm playing music, volunteering for open-source
        projects, or learning some cool new tech.
      </Typography>
      <Typography variant="body1">
        Always looking forward to what's next!
      </Typography>
      {/* Education history */}
      <div>
        <Typography variant="h3" gutterBottom>
          Education
        </Typography>

        <List sx={{ display: "flex", flexDirection: "column" }}>
          <ListItem sx={{ display: "block" }}>
            <Typography variant="h5">
              University of Oregon Continuing and Professional Education Boot
              Camps
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Full Stack Web Developer, Computer Programming
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              University of Oregon, Apr 2021 - Oct 2021
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Comprehensive 24-week program for strong foundational skills in
              web applications, object-oriented programming, Javascript,
              MongoDB, Express, React, Node.js, MySQL, NoSQL, Git, jQuery, and
              more.
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              MySQL · GitHub · Responsive Web Design · Front-End Development ·
              React.js · NoSQL · Node.js · Cascading Style Sheets (CSS) ·
              Object-Oriented Programming (OOP) · MERN Stack · Back-End Web
              Development · REST APIs · HTML5 · GraphQL · Full-Stack Development
              · Code Review · Programming · Microservices · JavaScript · Web
              Development · Teamwork · MongoDB
            </Typography>
          </ListItem>

          <ListItem sx={{ display: "block" }}>
            <Typography variant="h3">High School Diploma</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Example High School, Graduation Date: June 20XX
            </Typography>
          </ListItem>
        </List>
      </div>
      {/*  */}
      <Typography>
        Cognizant Java Full Stack Boot CampCognizant Java Full Stack Boot Camp
        SMU Continuing & Professional EducationSMU Continuing & Professional
        Education
      </Typography>
      April 2022 - Jun 2022
      <Typography>
        Back-End Web Development · React.js · Microservices · Web Development ·
        HTML5 · Spring Framework · Web Design · Full-Stack Development · REST
        APIs · Software Development · Problem Solving · Easily Adaptable ·
        Programming · Digital Literacy · GitHub · Java · Object-Oriented
        Programming (OOP) · Spring MVC · MySQL · Spring Boot
      </Typography>
      <div>
        <Typography variant="h3" gutterBottom>
          Skills
        </Typography>
        <List>
          <ListItem>
            <Typography variant="subtitle">Front End Languages</Typography>
            <Typography>
              JavaScript ES6+, HTML5, CSS3, React, Material UI, Bootstrap,
              Materialize
            </Typography>
          </ListItem>

          <ListItem>
            <Typography variant="subtitle">Back End Languages</Typography>
            <Typography>
              Java, MongoDB, Express.js, Node.js, REST API, MySQL, NoSQL, Spring
              Framework, Maven, JPA, Firebase
            </Typography>
          </ListItem>

          <ListItem>
            <Typography variant="subtitle">Tools</Typography>
            <Typography>
              Git, Docker, Spring, Heroku, Netlify, Apollo, RabbitMQ, GraphQL,
              Insomnia, Postman, MySQL Workbench
            </Typography>
          </ListItem>

          <ListItem>
            <Typography variant="subtitle">Other/to sort: </Typography>
            <Typography>Figma, Kubernetes</Typography>
          </ListItem>
        </List>
      </div>
      {/* Work history */}
      <div>
        <List>
          <ListItem>
            <Typography variant="subtitle">Job</Typography>
            <Typography>Description</Typography>
          </ListItem>
        </List>
      </div>
    </Box>
  );
};

export default Bio;
