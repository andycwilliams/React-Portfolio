// React Imports
import React, { useState } from "react";
// Material UI Imports
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

const NavbarMobile = ({
  sidebarItems,
  scrollToSection,
  NavItem,
  isHovered,
}) => {
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
          textShadow: "2px 2px",
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

          {sidebarItems.map((item, isMobile) => (
            <NavItem
              key={item.id}
              item={item}
              isMobile={true}
              scrollToSection={scrollToSection}
              isHovered
              sx={{
                cursor: "pointer",
                borderRadius: isMobile ? 0 : "25px",
                m: "5px",
                backgroundColor: theme.palette.primary.main,
                color: isHovered
                  ? theme.palette.primary.contrastText
                  : theme.palette.text.primary,
                "&:hover": {
                  backgroundColor: isHovered
                    ? theme.palette.primary.main
                    : "transparent",
                },
                "& .MuiListItemIcon-root, & .MuiTypography-root": {
                  color: isHovered
                    ? theme.palette.primary.contrastText
                    : theme.palette.text.primary,
                },
              }}
            />
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default NavbarMobile;
