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
import { alpha } from "@mui/material/styles";
// Material UI Icons Imports
import ArticleIcon from "@mui/icons-material/Article";
import CollectionsIcon from "@mui/icons-material/Collections";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MailIcon from "@mui/icons-material/Mail";
// Component Imports
import NavbarMobile from "./NavbarMobile";

const sidebarItems = [
  {
    label: "Home",
    icon: <HomeIcon />,
    id: "home",
  },
  {
    label: "About",
    icon: <InfoIcon />,
    id: "about",
  },
  {
    label: "Resume",
    icon: <ArticleIcon />,
    id: "resume",
  },
  {
    label: "Portfolio",
    icon: <CollectionsIcon />,
    id: "portfolio",
  },
  {
    label: "Contact",
    icon: <MailIcon />,
    id: "contact",
  },
];

const NavItem = ({ item, index, isMobile, scrollToSection }) => (
  <ListItem
    key={index}
    sx={{
      cursor: "pointer",
      background: "#f8f9fa",
      transition: "background-color 0.3s ease",
      "&:hover": {
        background: "#8e44ad",
      },
    }}
    onClick={() => scrollToSection(item.id)}
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
    >
      <ListItemText primary={item.label} sx={{ ml: 1 }} />
    </ReactRouterLink>
  </ListItem>
);

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [hoveredSection, setHoveredSection] = useState(null);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const scrollToSection = (id) => {
    // if (isSmallScreen) {
    //   handleToggleSidebar();
    // }
    const element = document.getElementById(`${id}-section`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
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
        backgroundColor: "transparent",
      }}
    >
      {isSmallScreen && (
        <NavbarMobile
          sidebarItems={sidebarItems}
          scrollToSection={scrollToSection}
          NavItem={(props) => <NavItem {...props} isMobile />}
        />
      )}

      {!isSmallScreen && (
        <List>
          {sidebarItems.map((item, index) => (
            <NavItem
              key={index}
              item={item}
              index={index}
              isMobile={false}
              scrollToSection={scrollToSection}
            />
          ))}
        </List>
      )}
    </Box>
  );
};

export default Navbar;
