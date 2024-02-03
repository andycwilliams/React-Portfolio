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
// Component Imports
import {
  Bio,
  ContactForm,
  Hero,
  PortfolioBrief,
  Quote,
} from "../components/home";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Bio />
      <Quote />
      <PortfolioBrief />
      {/* <ContactForm /> */}
    </Box>
  );
};

export default Home;
