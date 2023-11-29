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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsum
          sapiente sit corrupti veritatis vero fuga eos voluptatem unde
          deleniti, vitae molestiae nostrum maxime facere culpa laborum, harum
          rerum non quaerat, natus rem. Quasi cupiditate amet blanditiis vel
          unde saepe dolorum, consectetur iusto sint culpa quod molestiae,
          assumenda in aut. Nobis eos non fuga quis repellendus ratione nulla
          quasi iste animi soluta totam quisquam, ea accusamus accusantium esse
          ex. Dolore in facilis ea eaque sed molestias cum iure laudantium
          laboriosam officiis necessitatibus aliquid amet hic dicta, sapiente
          vero nemo tenetur omnis natus labore voluptatum nobis. Laborum
          veritatis quo, dolores inventore repudiandae quia? Aliquam corrupti
          incidunt consequatur ut, amet molestiae sunt earum minus, mollitia
          dolore exercitationem quas aperiam impedit deserunt sequi dolor veniam
          similique quasi ipsum quae nemo. Rem numquam delectus consectetur ex.
          A soluta, iusto quia aliquam excepturi aperiam nesciunt dolorum autem
          ducimus perspiciatis, voluptatem, iure libero nihil reprehenderit
          voluptas est! Non temporibus perferendis tempora quae culpa ipsum
          quisquam iusto? Dicta laudantium sunt distinctio quo error aliquid
          numquam voluptatibus, cupiditate enim deserunt nesciunt aliquam
          adipisci natus ea odit laboriosam nulla dolorum dolores aperiam earum
          voluptatem eum commodi reprehenderit. Sit nesciunt nobis aut cumque
          omnis? Mollitia illo exercitationem, eum nesciunt saepe tempora nihil
          reprehenderit harum commodi hic? Non culpa sint possimus officiis
          excepturi omnis labore numquam aliquid, nostrum suscipit dolore cumque
          temporibus expedita delectus placeat fugiat rerum, quas nihil hic.
          Alias delectus laudantium molestias eaque sit vitae porro quibusdam ab
          perspiciatis doloribus?
        </Typography>
      </Box>
      <Box>
        <Typography>Featured Projects</Typography>
        <Grid>
          <Card>
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
          </Card>
          <Card>
            <CardContent>
              <Typography>Project 2</Typography>
              <Chip label={"[role]"} />
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
              <Chip label={"Full-stack Developer"} />
              <CardMedia>Logo/screenshot</CardMedia>
              <Stack>Links: GitHub, Deployed...</Stack>
              <Typography>Technology used:</Typography>
            </CardContent>
            <CardActions>
              <Button>Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Button>Go to Portfolio</Button>
      </Box>
    </Container>
  );
};

export default Home;
