// Material UI Imports
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// Material UI Icons Imports
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Social Media links
const socialMediaLinks = [
  {
    href: "https://github.com/andycwilliams",
    icon: <GitHubIcon sx={{ fontSize: 35 }} />,
    ariaLabel: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/andrewcharleswilliams/",
    icon: <LinkedInIcon sx={{ fontSize: 35 }} />,
    ariaLabel: "LinkedIn",
  },
];

const renderSocialLinks = socialMediaLinks.map(({ ariaLabel, href, icon }) => (
  <Link
    key={href}
    href={href}
    aria-label={`Find me on ${ariaLabel}`}
    target="_blank"
    rel="noopener noreferrer"
    // color="inherit"
    // underline="hover"
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
  return (
    <Box
      component="footer"
      sx={{
        mt: 3,
        py: 3,
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        textAlign: "center",
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
