// React Imports
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";
// Material UI Icons Library
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandComponent = ({ defaultContent, additionalContent }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleShowMore = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      {defaultContent}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {additionalContent}
      </Collapse>
      <Button
        onClick={toggleShowMore}
        aria-expanded={expanded}
        variant="contained"
        sx={{
          width: "100%",
          mt: "10px",
        }}
      >
        {expanded ? "Show Less" : "Show More"}
        {expanded ? (
          <ExpandLessIcon sx={{ ml: 1 }} />
        ) : (
          <ExpandMoreIcon sx={{ ml: 1 }} />
        )}
      </Button>
    </Box>
  );
};

const primarySkillsData = [
  { name: "JavaScript", level: 75 },
  { name: "CSS", level: 75 },
  { name: "HTML", level: 75 },
  { name: "React", level: 75 },
  { name: "Java", level: 75 },
  { name: "MongoDB", level: 75 },
  { name: "Express", level: 75 },
  { name: "Node.js", level: 75 },
];

const fullSkillsData = [
  {
    type: "Front End",
    skills: [
      // { name: "JavaScript", level: 75 },
      // { name: "CSS", level: 75 },
      // { name: "HTML", level: 75 },
      // { name: "React", level: 75 },
      { name: "Material UI", level: 75 },
      { name: "Bootstrap", level: 75 },
      { name: "Materialize", level: 75 },
      { name: "SASS", level: 75 },
      { name: "Bulma", level: 75 },
    ],
  },
  {
    type: "Back End",
    skills: [
      // { name: "Java", level: 75 },
      // { name: "MongoDB", level: 75 },
      // { name: "Express", level: 75 },
      // { name: "Node.js", level: 75 },
      { name: "REST API", level: 75 },
      { name: "MySQL", level: 75 },
      { name: "NoSQL", level: 75 },
      { name: "Spring Framework", level: 75 },
      { name: "Maven", level: 75 },
      { name: "JPA", level: 75 },
      { name: "Firebase", level: 75 },
    ],
  },
  {
    type: "Applications",
    skills: [
      { name: "Heroku", level: 75 },
      { name: "Netlify", level: 75 },
      { name: "Apollo GraphQL", level: 75 },
      { name: "Insomnia", level: 75 },
      { name: "Postman", level: 75 },
      { name: "Docker", level: 75 },
      { name: "RabbitMQ", level: 75 },
      { name: "MySQL Workbench", level: 75 },
    ],
  },
];

const RenderPrimarySkills = () => (
  <Box>
    {primarySkillsData.map(({ name, level }, index) => (
      <Box key={index}>
        <Typography>{name}</Typography>
        <LinearProgress variant="determinate" value={level} />
      </Box>
    ))}
  </Box>
);

const RenderFullSkills = () => (
  <Box>
    {fullSkillsData.map(({ type, skills }, index) => (
      <Box key={index}>
        <Typography variant="h5" component="h3" sx={{ textAlign: "center" }}>
          {type}
        </Typography>
        {skills.map(({ name, level }, index) => (
          <Box key={index}>
            <Typography>{name}</Typography>
            <LinearProgress variant="determinate" value={level} />
          </Box>
        ))}
      </Box>
    ))}
  </Box>
);



const Skills = () => {
  return (
    <Fade in={true} timeout={1000}>
      <Container>
        <Box
          sx={
            {
              // p: { xs: "10px", sm: "20px" },
              // mx: { xs: "0px", sm: "50px" },
              // my: "10px",
            }
          }
        >
          <Typography variant="h2" gutterBottom sx={{ textAlign: "center" }}>
            Skills
          </Typography>
          <RenderPrimarySkills />
          <RenderFullSkills />
        </Box>
      </Container>
    </Fade>
  );
};

export default Skills;
