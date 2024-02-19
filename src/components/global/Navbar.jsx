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
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";
// Material UI Icons Imports
import ArticleIcon from "@mui/icons-material/Article";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MailIcon from "@mui/icons-material/Mail";

const sections = [
  { label: "Home", icon: <HomeIcon />, backgroundColor: "#2196f3" },
  { label: "About", icon: <InfoIcon />, backgroundColor: "#4caf50" },
  { label: "Resume", icon: <ArticleIcon />, backgroundColor: "#ff9800" },
  { label: "Contact", icon: <MailIcon />, backgroundColor: "#e91e63" },
];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSectionClick = (destination) => {
    if (isSmallScreen) {
      handleToggleSidebar();
    }
    console.log(`Navigating to ${destination}`);
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          zIndex: "2",
          backgroundColor: "transparent",
        }}
      >
        <IconButton
          onClick={handleToggleSidebar}
          sx={{
            display: { xs: "block", sm: "none" },
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "3",
            color: "#fff",
          }}
        >
          <MenuIcon />
        </IconButton>
      </div>

      <div
        style={{
          width: sidebarOpen ? (isSmallScreen ? "100%" : "25%") : "0",
          overflowX: isSmallScreen ? "hidden" : "visible",
          transition: "width 0.3s",
          backgroundColor: "#111",
          color: "white",
          position: "fixed",
          top: "0",
          left: "0",
          bottom: "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          zIndex: "1",
        }}
      >
        <List>
          {sections.map((section, index) => (
            <ListItemButton
              key={section.label}
              onClick={() => handleSectionClick(section.destination)}
              onMouseEnter={() => setHoveredSection(index)}
              onMouseLeave={() => setHoveredSection(null)}
              component={ReactRouterLink}
              to={isSmallScreen ? section.destination : undefined}
              sx={{
                background: section.backgroundColor,
                paddingRight: `5vw`,
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: section.backgroundColor,
                  paddingRight: `10vw`,
                },
                "& svg": {
                  fontSize: "40px",
                  color: "white",
                },
              }}
            >
              {section.icon}
              <ListItemText sx={{ opacity: hoveredSection === index ? 1 : 0 }}>
                {section.label}
              </ListItemText>
            </ListItemButton>
          ))}
        </List>
      </div>
    </>
  );
};

export default Navbar;
