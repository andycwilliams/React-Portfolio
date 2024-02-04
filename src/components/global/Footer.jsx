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
// Material UI Icons Imports
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Social Media links
const socialMediaLinks = [
  {
    href: "https://github.com/andycwilliams",
    icon: <GitHubIcon />,
    ariaLabel: "Github",
  },
  {
    href: "https://www.linkedin.com/in/andrewcharleswilliams/",
    icon: <LinkedInIcon />,
    ariaLabel: "Linked In",
  },
];

const renderSocialLinks = socialMediaLinks.map(({ ariaLabel, href, icon }) => (
  <Link
    key={href}
    href={href}
    aria-label={`You can find me on ${ariaLabel} here`}
    target="_blank"
    rel="noopener"
  >
    {icon}
  </Link>
));

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      &copy; {new Date().getFullYear()} This website itself | Icons by{" "}
      <Link
        href="https://icons8.com"
        color="inherit"
        underline="hover"
        target="_blank"
      >
        Icons8
      </Link>
    </Typography>
  );
};

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // minHeight: "100vh",
        color: "inherit",
      }}
    >
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h4" component="h2" gutterBottom>
          Footer
        </Typography>

        <Typography variant="body1" component="h3">
          placeholder text
        </Typography>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          // px: 2,
          // mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            My sticky footer can be found here.
          </Typography>
          <Stack
            direction="row"
            // spacing={{ xs: 2, sm: 3 }}
          >
            {renderSocialLinks}
          </Stack>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
