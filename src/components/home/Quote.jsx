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
// Data Imports
import sageWisdom from "./sageWisdom";

const Quote = () => {
  const item = sageWisdom[Math.floor(Math.random() * sageWisdom.length)];

  return (
    <Container>
      <Card sx={{ p: "20px", borderRadius: "25px" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: 30, fontStyle: "italic" }}>
            {item.text}
          </Typography>
        </Box>
        <Box sx={{ textAlign: "right", marginTop: 2 }}>
          <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
            {item.author}
          </Typography>
        </Box>
      </Card>
    </Container>
  );
};

export default Quote;
