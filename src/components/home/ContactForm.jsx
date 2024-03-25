// React Imports
import { useRef } from "react";
// Material UI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
// emailjs Imports
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const handleContactFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_co2agxf",
        "template_20pnwni",
        form.current,
        "AkBl59Ya3226OfPyQ"
      )
      .then(() => {
        e.target.reset();
      }),
      () => {
        console.error();
      };
  };

  return (
    <Fade in={true} timeout={1000}>
      <Box
        id="contact-section"
        sx={{
          mx: { xs: "0px", sm: "150px", md: "200px", lg: "300px" },
          px: { xs: 2, sm: 0 },
        }}
      >
        <Typography variant="h2" sx={{ m: "2rem", textAlign: "center" }}>
          Contact Me
        </Typography>
        <Box
          component="form"
          noValidate
          ref={form}
          onSubmit={handleContactFormSubmit}
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
          <Button type="submit" fullWidth variant="contained" sx={{ my: 2 }}>
            Send
          </Button>
        </Box>
      </Box>
    </Fade>
  );
};

export default ContactForm;
