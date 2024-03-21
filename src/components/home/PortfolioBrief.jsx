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
import projects from "../data/projectsList";

const ProjectCard = ({
  title,
  // projectSize,
  description,
  // role,
  image,
  links,
  techStack,
}) => {
  const theme = useTheme();

  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ height: "100%" }}>
        <Typography
          variant="h5"
          component="div"
          sx={{ textAlign: "center", mb: 2 }}
        >
          {title ?? "Untitled Project"}
        </Typography>
        <CardMedia
          component="img"
          image={image ?? null}
          alt={`${title} image`}
          sx={{
            objectFit: "contain",
            height: "200px",
            width: "100%",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
        <CardContent>
          {/* <Stack direction="row" spacing={1} justifyContent="center" mb={2}>
          <Chip label={role ?? "Role"} color="primary" />
          <Chip
            label={projectSize ?? "Size"}
            color={projectSize === "Group" ? "secondary" : "tertiary"}
          />
        </Stack> */}
          <CardActions sx={{ justifyContent: "center" }}>
            {links.map(({ href, icon }, index) => (
              <Link
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                // color="primary"
                sx={{ color: theme.palette.accent.main }}
              >
                {icon}
              </Link>
            ))}
          </CardActions>
          <Typography variant="body2" color="textSecondary" paragraph>
            <strong>Description:</strong>{" "}
            {description ?? "No description available."}
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            <strong>Technology used:</strong>{" "}
            {techStack ? techStack.join(", ") : "N/A"}
          </Typography>
        </CardContent>

        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </Card>
    </Grid>
  );
};

const PortfolioBrief = () => {
  return (
    <Fade in={true} timeout={1000}>
      <Box sx={{ px: { xs: 2, sm: 0 }, mx: { xs: "0px", sm: "100px" } }}>
        <Box id="portfolio-section" className="sections">
          <Typography variant="h2" sx={{ textAlign: "center" }}>
            Featured Projects
          </Typography>
          <Grid container spacing={{ xs: 1, md: 3 }}>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </Grid>
        </Box>
        {/* <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
          <Button
            variant="contained"
            sx={{ fontSize: "1.5rem", padding: "1rem 2rem" }}
          >
            Go to Portfolio
          </Button>
        </Box> */}
      </Box>
    </Fade>
  );
};

export default PortfolioBrief;
