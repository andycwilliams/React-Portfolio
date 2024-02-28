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
// Data Imports
import projects from "../global/projectsList";
// Dependency Imports
import axios from "axios";

const ProjectCard = ({
  title,
  projectSize,
  description,
  role,
  image,
  links,
  techStack,
}) => (
  <Grid item xs={12} md={4}>
    <Card sx={{ height: "100%" }}>
      <CardMedia
        component="img"
        image={image ?? null}
        alt={`${title} image`}
        sx={{
          objectFit: "contain",
          height: "200px",
          width: "100%",
        }}
      />
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{ textAlign: "center", mb: 2 }}
        >
          {title ?? "Untitled Project"}
        </Typography>
        <Stack direction="row" spacing={1} justifyContent="center" mb={2}>
          <Chip label={role ?? "Role"} color="primary" />
          {/* <Chip label={projectSize ?? "Size"} /> */}
        </Stack>
        <Typography variant="body2" color="textSecondary" paragraph>
          {description ?? "No description available."}
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          <strong>Technology used:</strong>{" "}
          {techStack ? techStack.join(", ") : "N/A"}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        {links.map(({ href, icon }, index) => (
          <Link
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
          >
            {icon}
          </Link>
        ))}
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  </Grid>
);

const PortfolioBrief = () => {
  return (
    <Fade in={true} timeout={1000}>
      <Container>
        <Box id="portfolio-section">
          <Typography variant="h2" sx={{ textAlign: "center" }}>
            Featured Projects
          </Typography>
          <Grid container spacing={{ xs: 1, md: 3 }}>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </Grid>
        </Box>
        <Container sx={{ textAlign: "center", marginTop: "2rem" }}>
          <Button
            variant="contained"
            sx={{ fontSize: "1.5rem", padding: "1rem 2rem" }}
          >
            Go to Portfolio
          </Button>
        </Container>
      </Container>
    </Fade>
  );
};

export default PortfolioBrief;
