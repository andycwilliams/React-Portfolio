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

const Skills = () => {
  return (
    <Fade in={true} timeout={1000}>
      <Container>
        <Box>
          <Typography variant="h2" gutterBottom sx={{ textAlign: "center" }}>
            Skills
          </Typography>

          <div>
            <Typography>Front End</Typography>
          </div>
          <div>
            <Typography>JavaScript</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>
          <div>
            <Typography>CSS</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>
          <div>
            <Typography>HTML</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>
          <div>
            <Typography>React</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>
          <div>
            <Typography>Material UI</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>
          <div>
            <Typography>Bootstrap</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>
          <div>
            <Typography>Materialize</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>
          <div>
            <Typography>SASS</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>
          <div>
            <Typography>Bulma</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>

          <div>
            <Typography>Back End</Typography>
          </div>
          <div>
            <Typography>Java</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>
          <div>
            <Typography>MongoDB</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>
          <div>
            <Typography>Express</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>
          <div>
            <Typography>Node.js</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>
          <div>
            <Typography>REST API</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>
          <div>
            <Typography>MySQL</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>
          <div>
            <Typography>NoSQL</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>
          <div>
            <Typography>Spring Framework</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>
          <div>
            <Typography>Maven</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>
          <div>
            <Typography>JPA</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>
          <div>
            <Typography>Firebase</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>

          <div>
            <Typography>Applications</Typography>
          </div>
          <div>
            <Typography>Heroku</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>
          <div>
            <Typography>Netlify</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>
          <div>
            <Typography>Apollo GraphQL</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>
          <div>
            <Typography>Insomnia</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>
          <div>
            <Typography>Postman</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>
          <div>
            <Typography>Docker</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>
          <div>
            <Typography>RabbitMQ</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>
          <div>
            <Typography>MySQL Workbench</Typography>
            <LinearProgress variant="determinate" value={75} />
          </div>
        </Box>
      </Container>
    </Fade>
  );
};

export default Skills;
