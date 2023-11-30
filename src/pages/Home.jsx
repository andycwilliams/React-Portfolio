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
// Custom Imports
import ContactForm from "../components/ContactForm";
import projects from "../components/projects";

const Home = () => {
  return (
    <Container>
      <Box>
        <Typography variant="h1">Andy</Typography>
        <Typography variant="subtitle">Head image or something</Typography>
      </Box>
      <Box>
        <Typography variant="h2">Bio</Typography>
        <Typography variant="p">
          My name is Andy I do stuff sometimes
        </Typography>
      </Box>
      <Box>
        <Typography>Featured Projects</Typography>
        <Grid>
          {projects.map(
            ({ title, description, role, logo, date, links, techStack }) => (
              <Card key={title ?? null}>
                <CardContent>
                  <Typography>{title ?? null}</Typography>
                  <Chip label={role ?? null} />
                  {/* <CardMedia>{logo ?? null}</CardMedia> */}
                  <Typography>Description</Typography>
                  <Typography>{description ?? null}</Typography>
                  {/* <Stack>{links ?? null}</Stack> */}
                  <Typography>Technology used</Typography>
                  <Typography>{techStack ?? null}</Typography>
                </CardContent>
                <CardActions>
                  <Button>Learn More</Button>
                </CardActions>
              </Card>
            )
          )}
          {/* <Card>
            <CardContent>
              <Typography>PASS</Typography>
              <Chip label={"UI Developer"} />
              <CardMedia>Logo/screenshot</CardMedia>
              <Stack>Links: GitHub, Deployed...</Stack>
              https://passsmartwallet-967e217a2652.herokuapp.com/
              https://github.com/codeforpdx/PASS
              <Typography>Technology used:</Typography>
            </CardContent>
            <CardActions>
              <Button>Learn More</Button>
              https://github.com/codeforpdx
            </CardActions>
          </Card> */}
        </Grid>
        <Button>Go to Portfolio</Button>
      </Box>
      <ContactForm />
    </Container>
  );
};

export default Home;
