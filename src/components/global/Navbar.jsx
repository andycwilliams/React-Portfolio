// React Imports
import { useState } from "react";
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
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";

const pages = ["Home", "Bio", "Portfolio"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      sx={
        {
          // flexGrow: 1,
          // display: "flex",
        }
      }
      // maxWidth="xl"
    >
      <AppBar
      // position="static"
      >
        <Toolbar
        // disableGutters
        >
          {/* Desktop Main */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              // mr: 2,
              display: { xs: "none", sm: "flex" },
              // fontFamily: "monospace",
              // fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Andy
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Tabs */}
          <Box
            sx={{
              // flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              // flexDirection: { sm: "flex-end" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  // my: 2,
                  color: "white",
                  display: "block",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu */}
          <Box
            sx={{
              // flexGrow: 1,
              display: { xs: "flex", sm: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Main */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              // mr: 2,
              display: { xs: "flex", sm: "none" },
              // flexGrow: 1,
              // fontFamily: "monospace",
              // fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Andy
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

{
  /* <AppBar>
me andy
<List>
  <ListItem
    // sx={hamburgerMenuTextStyle}
    component={Link}
    to="/"
    // onClick={handleClose}
  >
    Home
  </ListItem>
  <ListItem
    // sx={hamburgerMenuTextStyle}
    component={Link}
    to="/portfolio"
    // onClick={handleClose}
  >
    Portfolio
  </ListItem>
</List>
</AppBar> */
}
