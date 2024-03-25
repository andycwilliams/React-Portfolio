// Material UI Imports
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
// Data Imports
import resumeData from "../data/resumeData";

const ResumeBrief = () => {
  const theme = useTheme();

  return (
    <Fade in={true} timeout={1000}>
      <Box
        id="resume-section"
        sx={{
          px: { xs: 2, sm: 0 },
          mx: { xs: "0px", sm: "75px", md: "100px" },
        }}
      >
        <Typography variant="h2" sx={{ m: "2.5rem", textAlign: "center" }}>
          Resume
        </Typography>
        {resumeData.map(
          ({ title, location, description, date, icon }, index) => (
            <Paper
              key={index}
              sx={{ p: { xs: "10px", sm: "20px" }, my: "10px" }}
            >
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
                  - {description[key] !== null ? description[key] : null}
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

export default ResumeBrief;
