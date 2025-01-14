// Material UI Imports
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
// Data Imports
import { socialMediaLinks } from "../data/aboutData";

const renderSocialLinks = socialMediaLinks.map(({ ariaLabel, href, icon }) => (
  <Link
    key={href}
    href={href}
    aria-label={`Find me on ${ariaLabel}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </Link>
));

const Copyright = () => (
  <Typography variant="body2" color="text.secondary" align="center">
    &copy;{new Date().getFullYear()} Andy Williams. All rights reserved.
    <Typography
      variant="body2"
      color="text.secondary"
      component="span"
      display="block"
      sx={{ my: 1 }}
    >
      {/* Icons by{" "}
      <Link
        href="https://icons8.com"
        color="inherit"
        underline="hover"
        target="_blank"
      >
        Icons8
      </Link> */}
    </Typography>
  </Typography>
);

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        // textAlign: "center",
        backgroundColor: theme.palette.neutral.default,
        // mb: 0,
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <Stack direction="row" spacing={1} justifyContent="center">
        {renderSocialLinks}
      </Stack>
      <Copyright />
    </Box>
  );
};

export default Footer;
