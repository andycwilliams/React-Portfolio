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
import CollectionsIcon from "@mui/icons-material/Collections";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MailIcon from "@mui/icons-material/Mail";

const NavbarMobile = ({ sidebarItems, scrollToSection, NavItem }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <IconButton
        onClick={handleOpenDrawer}
        sx={{
          display: { xs: "block", sm: "none" },
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "3",
          color: theme.palette.mode === "dark" ? "#fff" : "#000",
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer open={openDrawer} onClose={handleOpenDrawer} variant="temporary">
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minWidth: "50vw",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              my: 1.5,
              fontWeight: "bold",
              color: theme.palette.primary.main,
            }}
          >
            MENU
          </Typography>

          {sidebarItems.map((item, index) => (
            <NavItem
              key={index}
              item={item}
              index={index}
              isMobile={true}
              scrollToSection={scrollToSection}
            />
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default NavbarMobile;
