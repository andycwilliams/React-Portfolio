// React Imports
import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
// Material UI Imports
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
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

const NavItem = ({
  item,
  isMobile,
  isHovered,
  handleMouseEnter,
  handleMouseLeave,
  scrollToSection,
}) => {
  const theme = useTheme();

  return (
    <ListItem
      sx={{
        cursor: "pointer",
        borderRadius: isMobile ? 0 : "25px",
        m: "5px",
        backgroundColor: isMobile
          ? theme.palette.primary.main
          : isHovered
          ? theme.palette.primary.main
          : "transparent",
        color: !isMobile
          ? theme.palette.primary.main
          : isHovered
          ? theme.palette.primary.contrastText
          : theme.palette.text.primary,
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
            marginLeft: "8px",
            color: isHovered
              ? theme.palette.primary.contrastText
              : theme.palette.text.primary,
          }}
        >
          <ListItemText primary={item.label} />
        </ReactRouterLink>
      </Grow>
    </ListItem>
  );
};

const Navbar = ({ darkMode, setDarkMode }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
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

  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
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
              isMobile={false}
              isHovered={item.id === hoveredItem}
              handleMouseEnter={() => handleMouseEnter(item.id)}
              handleMouseLeave={handleMouseLeave}
              scrollToSection={scrollToSection}
            />
          ))}
          <ListItem
            sx={{
              cursor: "pointer",
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
