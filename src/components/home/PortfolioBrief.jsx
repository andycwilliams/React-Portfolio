// Material UI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
// Data Imports
import projects from "../data/portfolioData";

const ProjectCard = ({
  title,
  // projectSize,
  description,
  // role,
  image,
  links,
  techStack,
}) => {
  const theme = useTheme();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%" }}>
        <CardContent>
          <Typography
            variant="h4"
            component="div"
            sx={{ textAlign: "center", mb: 2 }}
          >
            {title ?? "Untitled Project"}
          </Typography>
          <CardMedia
            component="img"
            image={image ?? null}
            alt={`${title} image`}
            sx={{
              objectFit: "contain",
              height: "200px",
              width: "100%",
              mb: 1,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />

          {/* <Stack direction="row" spacing={1} justifyContent="center" mb={2}>
          <Chip label={role ?? "Role"} color="primary" />
          <Chip
            label={projectSize ?? "Size"}
            color={projectSize === "Group" ? "secondary" : "tertiary"}
          />
        </Stack> */}
          <CardActions sx={{ justifyContent: "center" }}>
            {links.map(({ href, icon }, index) => (
              <Tooltip
                key={index}
                title={index === 0 ? "GitHub link" : "Live deployment link"}
              >
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  // color="primary"
                  sx={{ color: theme.palette.primary.main }}
                >
                  {icon}
                </Link>
              </Tooltip>
            ))}
          </CardActions>
          <Typography variant="body2" color="textSecondary" paragraph>
            <strong>Description:</strong>{" "}
            {description ?? "No description available."}
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            <strong>Technology used:</strong>{" "}
            {techStack ? techStack.join(", ") : "N/A"}
          </Typography>
          <Button
            variant="outlined"
            color="accent"
            fullWidth
            // onClick={() => {}}
            disabled
          >
            Learn More
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

const PortfolioBrief = () => {
  return (
    <Fade in={true} timeout={1000}>
      <Box
        sx={{
          px: { xs: 2, sm: 0 },
          mx: { xs: "0px", sm: "75px", md: "100px" },
        }}
      >
        <Box id="portfolio-section" className="sections">
          <Typography variant="h2" sx={{ m: "2rem", textAlign: "center" }}>
            Featured Projects
          </Typography>
          <Grid
            container
            spacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="center"
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </Grid>
        </Box>
        {/* <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
          <Button
            variant="contained"
            sx={{ fontSize: "1.5rem", padding: "1rem 2rem" }}
          >
            Go to Portfolio
          </Button>
        </Box> */}
      </Box>
    </Fade>
  );
};

export default PortfolioBrief;
