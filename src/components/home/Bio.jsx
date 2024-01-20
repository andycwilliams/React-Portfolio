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
      <Typography variant="h2">Bio</Typography>
      <Typography variant="subtitle1">
        My name is Andy I do stuff sometimes
      </Typography>
      <Typography variant="subtitle2">
        My name is Andy I do stuff sometimes
      </Typography>
      <Typography variant="body1">
        Born in Silicon Valley, raised in Silicon Forest
      </Typography>
      <Typography variant="body2">
        My name is Andy I do stuff sometimes
      </Typography>
      <Typography variant="caption">
        My name is Andy I do stuff sometimes
      </Typography>
      <Typography variant="body1">MERN stack</Typography>
      <Typography>
        University of Oregon Continuing and Professional Education Boot
        CampsUniversity of Oregon Continuing and Professional Education Boot
        Camps
      </Typography>
      <Typography>
        Full Stack Web Developer, Computer ProgrammingFull Stack Web Developer,
        Computer Programming
      </Typography>
      Apr 2021 - Oct 2021Apr 2021 - Oct 2021
      <Typography>
        Comprehensive 24-week program for strong foundational skills in web
        applications, object-oriented programming, Javascript, MongoDB, Express,
        React, Node.js, MySQL, NoSQL, Git, jQuery, and more.
      </Typography>
      <Typography>
        MySQL · GitHub · Responsive Web Design · Front-End Development ·
        React.js · NoSQL · Node.js · Cascading Style Sheets (CSS) ·
        Object-Oriented Programming (OOP) · MERN Stack · Back-End Web
        Development · REST APIs · HTML5 · GraphQL · Full-Stack Development ·
        Code Review · Programming · Microservices · JavaScript · Web Development
        · Teamwork · MongoDB
      </Typography>
      <Typography>
        Cognizant Java Full Stack Boot CampCognizant Java Full Stack Boot Camp
        SMU Continuing & Professional EducationSMU Continuing & Professional
        Education
      </Typography>
      Issued Jun 2022Issued Jun 2022
      <Typography>
        Back-End Web Development · React.js · Microservices · Web Development ·
        HTML5 · Spring Framework · Web Design · Full-Stack Development · REST
        APIs · Software Development · Problem Solving · Easily Adaptable ·
        Programming · Digital Literacy · GitHub · Java · Object-Oriented
        Programming (OOP) · Spring MVC · MySQL · Spring Boot
      </Typography>
      <Typography>
        <Typography>Skills</Typography>
        <h3>Front End Languages</h3>
        JavaScript ES6+, HTML5, CSS3, React, Material UI, Bootstrap, //
        Materialize
        <h3>Back End Languages</h3>
        Java, MongoDB, Express.js, Node.js, REST API, MySQL, NoSQL, Spring
        Framework, Maven, JPA, // Firebase
        <h3>Tools</h3>
        Git, Docker, Spring, Heroku, Netlify, Apollo, // RabbitMQ, GraphQL,
        Insomnia, Postman, MySQL Workbench
        <h3>Other/to sort</h3>
        Figma, // Kubernetes
      </Typography>
    </Box>
  );
};

export default Bio;
