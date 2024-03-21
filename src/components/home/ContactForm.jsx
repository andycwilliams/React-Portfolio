// React Imports
import { useRef } from "react";
// Material UI Imports
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";
// emailjs Imports
import emailjs from "@emailjs/browser";

// const { REACT_APP_API_KEY, REACT_APP_TEMPLATE_ID, REACT_APP_SERVICE_ID } = process.env;

// console.log(REACT_APP_API_KEY, REACT_APP_TEMPLATE_ID, REACT_APP_SERVICE_ID);

const ContactForm = () => {
  const form = useRef();

  const handleContactFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      // .send(
      //   `${REACT_APP_SERVICE_ID}`,
      //   `${REACT_APP_TEMPLATE_ID}`,
      //   form.current,
      //   `${REACT_APP_API_KEY}`
      // )
      .send(
        "service_co2agxf",
        "template_20pnwni",
        form.current,
        "AkBl59Ya3226OfPyQ"
      )
      .then((result) => {
        console.log(result.text);
      }, console.error());
    e.target.reset();
  };

  return (
    <Fade in={true} timeout={1000}>
      <Box
        id="contact-section"
        // className="customName"
        sx={{
          // display: "flex",
          // flexDirection: "column",
          // alignItems: "center",
          // my: "2rem",
          // mx: "1rem",
          mx: { xs: "0px", sm: "200px" },
          px: { xs: 5, sm: 0 },
        }}
      >
        {/* <Typography component="h1" variant="h4" mb={2}> */}
        <Typography variant="h2" gutterBottom sx={{ textAlign: "center" }}>
          Contact Me
        </Typography>
        <Box
          component="form"
          noValidate
          ref={form}
          onSubmit={handleContactFormSubmit}
          // sx={{ mt: 3 }}
          // sx={{ width: "100%", maxWidth: "600px" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="subject"
                label="Subject"
                name="subject"
                autoComplete="subject"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="message"
                label="Message"
                type="message"
                id="message"
                autoComplete="message"
                multiline
                rows={5}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            // disabled={formCompleted}
            fullWidth
            variant="contained"
            sx={{ mt: "1rem" }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Fade>
  );
};

export default ContactForm;
