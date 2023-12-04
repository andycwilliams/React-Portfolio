// Material UI Imports
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
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";
// Other Imports
import dayjs from "dayjs";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        This website itself
      </Link>{" "}
      {/* {new Date().getFullYear()} */}
      `©${dayjs().year()}`{"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
    // sx={{
    //   display: "flex",
    //   flexDirection: "column",
    //   minHeight: "100vh",
    // }}
    >
      <Container
        component="main"
        // sx={{ mt: 8, mb: 2 }}
        // maxWidth="sm"
      >
        <Typography
          variant="h2"
          component="h1"
          // gutterBottom
        >
          Sticky footer
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          // gutterBottom
        >
          {"Pin a footer to the bottom of the viewport."}
          {"The footer will move as the main element of the page grows."}
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography>
      </Container>
      <Box
        component="footer"
        // sx={{
        //   py: 3,
        //   px: 2,
        //   mt: "auto",
        //   backgroundColor: (theme) =>
        //     theme.palette.mode === "light"
        //       ? theme.palette.grey[200]
        //       : theme.palette.grey[800],
        // }}
      >
        <Container
        // maxWidth="sm"
        >
          <Typography variant="body1">
            My sticky footer can be found here.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
