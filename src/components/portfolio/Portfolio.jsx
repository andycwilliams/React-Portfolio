// React Imports
import { useState } from "react";
// React Router Dom Imports
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
// Data Imports
import projects from "../global/projectsList";

const Portfolio = () => {
  return (
    <Box>
      <Typography>Featured Projects</Typography>
      <Grid>
        {projects.map(
          ({ title, description, role, logo, date, links, techStack }) => (
            <Card key={title ?? null}>
              <CardContent>
                <Typography>{title ?? null}</Typography>
                <Chip label={role ?? null} />
                <CardMedia>{logo ?? null}</CardMedia>
                <Typography>Description</Typography>
                <Typography>{description ?? null}</Typography>
                <Typography>Completion date: {date ?? null}</Typography>
                <Stack
                // direction="row" justifyContent="space-evenly" pt={{ xs: 0, sm: '1rem' }}
                >
                  {links.map(({ href, icon }) => (
                    <Link
                      // component={ReactRouterLink}
                      key={href}
                      to={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      // sx={linkStyle}
                    >
                      {icon}
                    </Link>
                  ))}
                </Stack>

                <Typography>Technology used</Typography>
                <Typography>{techStack ?? null}</Typography>
              </CardContent>
              <CardActions>
                <Button>Learn More</Button>
              </CardActions>
            </Card>
          )
        )}
      </Grid>
      <Button>Go to Portfolio</Button>
    </Box>
  );
};

export default Portfolio;
