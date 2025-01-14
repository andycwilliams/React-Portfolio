// React Router Imports
// import { Link } from "react-router-dom";
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

const FourZeroFour = () => {
  return (
    <Box>
      <Card
        sx={{
          height: "100%",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            component="div"
            sx={{
              textAlign: "center",
              mb: 2,
            }}
          >
            UH OH
          </Typography>
          <CardActions sx={{ justifyContent: "center" }}>
            {/* <Link to="/" className="btn primary">
              Take Me Home
            </Link> */}
            <Link color="text.secondary" href="/">
              Take Me Back
            </Link>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FourZeroFour;
