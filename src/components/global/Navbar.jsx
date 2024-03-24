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
import Grow from "@mui/material/Grow";
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
import { styled } from "@mui/system";
import { useMediaQuery, useTheme } from "@mui/material";
// Material UI Icons Imports
import ArticleIcon from "@mui/icons-material/Article";
import CollectionsIcon from "@mui/icons-material/Collections";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LightModeIcon from "@mui/icons-material/LightMode";
import MailIcon from "@mui/icons-material/Mail";
// Component Imports
import NavbarMobile from "./NavbarMobile";

const sidebarItems = [
  {
    label: "Home",
    icon: <HomeIcon fontSize="large" />,
    id: "home",
  },
  {
    label: "About",
    icon: <InfoIcon fontSize="large" />,
    id: "about",
  },
  {
    label: "Resume",
    icon: <ArticleIcon fontSize="large" />,
    id: "resume",
  },
  {
    label: "Portfolio",
    icon: <CollectionsIcon fontSize="large" />,
    id: "portfolio",
  },
  {
    label: "Contact",
    icon: <MailIcon fontSize="large" />,
    id: "contact",
  },
];

const NavItem = ({ item, isMobile, scrollToSection }) => {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <ListItem
      sx={{
        cursor: "pointer",
        color: isHovered
          ? theme.palette.primary.contrastText
          : theme.palette.primary.main,
        // color: isHovered
        //   ? theme.palette.primary.contrastText
        //   : theme.palette.primary.main,
        borderRadius: isMobile ? 0 : "25px",
        m: "5px",
        background: isMobile
          ? theme.palette.primary.main
          : isHovered
          ? theme.palette.primary.main
          : null,
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "flex-start",
        // width: "fit-content",
        // "&:hover": {
        //   "& .label": {
        //     width: "auto",
        //     opacity: 1,
        //     ml: 1,
        //   },
        // },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => scrollToSection(item.id)}
    >
      {item.icon}
      <Grow in={isHovered}>
        <ReactRouterLink
          to={`#${item.id}-section`}
          style={{
            textDecoration: "none",
            // color: "inherit",
            // display: "flex",
            // alignItems: "center",
            // overflow: "hidden",
          }}
        >
          <ListItemText
            primary={item.label}
            sx={{
              // width: 0,
              // opacity: 0,
              // transition: "width 0.3s, opacity 0.3s",
              ml: 1,
              color: theme.palette.primary.contrastText,
            }}
            // className="label"
          />
        </ReactRouterLink>
      </Grow>
    </ListItem>
  );
};

const Navbar = ({ darkMode, setDarkMode }) => {
  // const [hoveredSection, setHoveredSection] = useState(null);
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const theme = useTheme();

  const scrollToSection = (id) => {
    const element = document.getElementById(`${id}-section`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ToggleDarkMode = () => {
    const handleToggle = () => {
      setDarkMode((prevMode) => !prevMode);
    };

    return (
      <IconButton
        onClick={handleToggle}
        sx={{ color: theme.palette.primary.main }}
      >
        {darkMode ? (
          <LightModeIcon fontSize="large" />
        ) : (
          <DarkModeIcon fontSize="large" />
        )}
      </IconButton>
    );
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
          <ListItem
            sx={{
              cursor: "pointer",
              // color: theme.palette.primary.main,
              // m: "5px",
              // background: theme.palette.primary.contrastText,
            }}
          >
            <ToggleDarkMode />
          </ListItem>
        </List>
      )}
    </Box>
  );
};

export default Navbar;
