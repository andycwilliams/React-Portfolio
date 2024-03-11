import { Link as RouterLink } from "react-router-dom";
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
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";
// Material UI Icons Imports
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
// React Vertical Timeline Imports
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// Data Imports
import resumeData from "./resumeData";

const cardStyle = {
  // xs: 12,
  // md: 6,
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
  // flexDirection: "column",
  p: { xs: "10px", sm: "20px" },
  // m: "0 100px 0 100px",
  mx: { xs: "10px", sm: "140px" },
  my: "10px",
};

const ResumeItem = () => {
  const theme = useTheme();

  return (
    <Fade in={true} timeout={1000}>
      <Box id="resume-section">
        <Typography variant="h2" gutterBottom sx={{ textAlign: "center" }}>
          Resume
        </Typography>
        {resumeData.map(
          ({ title, location, description, date, icon }, index) => (
            <Paper key={index} sx={cardStyle}>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  display: "flex",
                  color: theme.palette.primary.main,
                }}
              >
                {icon && (
                  <span
                    style={{
                      marginRight: "8px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {icon}
                  </span>
                )}
                {title}
              </Typography>
              <Typography variant="body1">{location ?? null}</Typography>
              {Object.keys(description).map((key) => (
                <Typography key={key} variant="body2">
                  {description[key] !== null ? description[key] : null}
                </Typography>
              ))}
              <Typography variant="body2">{date ?? null}</Typography>
            </Paper>
          )
        )}
      </Box>
    </Fade>
  );
};

const ResumeBrief = () => {
  return (
    <>
      <ResumeItem />
      {/* <{>PreviousStyle /> */}
    </>
  );
};

export default ResumeBrief;
