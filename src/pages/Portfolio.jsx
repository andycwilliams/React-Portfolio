// React Imports
import { useState } from "react";
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
import axios from "axios";

// https://github.com/codeforpdx/codepdx_website
// https://codeforpdx.github.io/
// https://github.com/codeforpdx/PASS

const Portfolio = () => {
  const [repo, setRepo] = useState("");

  const getData = () => {
    axios
      .get("https://api.github.com/users/andycwilliams/repos")
      .then((res) => {
        console.log(res.data);
        setRepo(res.data[7].description);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box>
      Option to filter
      <Grid>
        <Card>
          <CardContent>
            <Typography>PASS</Typography>
            <Chip label={"UI Developer"} />
            <CardMedia>Logo/screenshot</CardMedia>
            <Stack>Links: GitHub, Deployed...</Stack>
            https://passsmartwallet-967e217a2652.herokuapp.com/
            https://github.com/codeforpdx/PASS
            <Typography>
              Technology used: SOLID, React, Vite, JSDocs, Material UI, NPM, ES
              Lint
            </Typography>
          </CardContent>
          <CardActions>
            <Button>Learn More</Button>
            https://github.com/codeforpdx
          </CardActions>
          PASS is an open source digital wallet for providing home insecure
          individuals a safe place to store documents within their control. PASS
          additionally assists caseworkers with processing and providing
          documents needed to complete the housing assistance application
          process.
        </Card>
        <Card>
          <CardContent>
            <Typography>CODE PDX Website</Typography>
            <Chip label={"Developer"} />
            <CardMedia>Logo/screenshot</CardMedia>
            <Stack>Links: GitHub, Deployed...</Stack>
            <Typography>Technology used:</Typography>
          </CardContent>
          <CardActions>
            <Button>Learn More</Button>
          </CardActions>
        </Card>
        <Card>
          <CardContent>
            <Typography>Project 3</Typography>
            <Chip label={"[role]"} />
            <CardMedia>Logo/screenshot</CardMedia>
            <Stack>Links: GitHub, Deployed...</Stack>
            <Typography>Technology used:</Typography>
          </CardContent>
          <CardActions>
            <Button>Learn More</Button>
          </CardActions>
          "We are civic-minded residents committed to improving public services
          in Portland by working with local government to utilize open data,
          improve citizen knowledge, and implementing technological solutions.
          We are driven by our community for our community."
        </Card>
      </Grid>
      <Box>
        <Button onClick={getData}>Click</Button>
        {repo && <p>{repo}</p>}
      </Box>
    </Box>
  );
};

export default Portfolio;
