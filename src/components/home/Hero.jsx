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

const Hero = () => {
  return (
    <div
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
      <Typography variant="h1" sx={{ fontSize: "5rem", fontWeight: "bold" }}>
        Andy
      </Typography>
      {/* TODO: Add animation that combines "Front-end" and "Back-end" into "Full-stack" */}
      <Typography variant="subtitle1" sx={{ fontSize: "2.5rem" }} gutterBottom>
        Full-stack Developer
      </Typography>
    </div>
  );
};

export default Hero;
