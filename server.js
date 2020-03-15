const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();
// const mongoose = require("mongoose");

// const bodyParser = require("body-parser");

connectDB();

//bodyParser middleware
// app.use(bodyParser.json());

// DB config
// const db = require("./config/Keys").mongoURI;

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));

//npm run dev runs both the server and react
