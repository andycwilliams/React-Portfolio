const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config({ path: ".env" });

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("*", (req, res) => res.send("Hello"));

export default app;
