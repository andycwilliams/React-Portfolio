// React Imports
import React, { useEffect, useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
// Material UI Imports
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";
// Material UI Icons Imports
import ArticleIcon from "@mui/icons-material/Article";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MailIcon from "@mui/icons-material/Mail";

const sidebarItems = [
  { label: "Home", icon: <HomeIcon />, id: "home", backgroundColor: "#2196f3" },
  {
    label: "About",
    icon: <InfoIcon />,
    id: "about",
    backgroundColor: "#4caf50",
  },
  {
    label: "Resume",
    icon: <ArticleIcon />,
    id: "resume",
    backgroundColor: "#ff9800",
  },
  {
    label: "Contact",
    icon: <MailIcon />,
    id: "contact",
    backgroundColor: "#e91e63",
  },
];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [hoveredSection, setHoveredSection] = useState(null);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const scrollToSection = (id) => {
    if (isSmallScreen) {
      handleToggleSidebar();
    }

    const element = document.getElementById(`${id}-section`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 2,
        width: isSmallScreen ? "100%" : "auto",
        backgroundColor: "transparent", // Set the background color to transparent
      }}
    >
      <List>
        {sidebarItems.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              background: item.backgroundColor,
              // display: "flex",
              // alignItems: "center",
            }}
          >
            {item.icon}
            <ReactRouterLink
              to={`#${item.id}-section`}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => scrollToSection(item.id)}
            >
              <ListItemText primary={item.label} sx={{ ml: 1 }} />
            </ReactRouterLink>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Navbar;
