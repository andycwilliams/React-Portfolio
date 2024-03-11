import { useState, useEffect } from "react";
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
import heroBackgroundImage from "/assets/images/heroBackground.jpg";
// Material UI Icons Imports
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// React Animation Imports
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const theme = useTheme();

  return (
    <div
      id="home-section"
      style={{
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
      <Fade in={true} timeout={1000}>
        <div>
          <Typography
            variant="h1"
            sx={{ fontSize: "5rem", fontWeight: "bold" }}
          >
            Andy
          </Typography>
        </div>
      </Fade>

      <Fade in={true} timeout={1000} style={{ transitionDelay: "200ms" }}>
        <div>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "2.5rem",
              // color: theme.palette.primary.main
            }}
            gutterBottom
          >
            <TypeAnimation
              sequence={[
                "Web ",
                1000,
                "Front-end ",
                1000,
                "Back-end ",
                1000,
                "Full-stack ",
              ]}
              wrapper="span"
              cursor={false}
            />
            Developer
          </Typography>
        </div>
      </Fade>
    </div>
  );
};

export default Hero;
