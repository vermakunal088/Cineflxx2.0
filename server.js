const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
//config dotenv and connect to database
dotenv.config();
mongoose.connect(process.env.DB_CONNECT_URI, {}, () =>
  console.log("connected to db")
);
//middleware
app.use(express.json());
app.use(authRoutes);
app.use(cors());

// set up the server
if (process.env.NODE_ENV == "production"){

    app.use(express.static("movie-app/build"));
}

if (process.env.NODE_ENV !== "development")
    console.log = () => {};

const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'movie-app', 'build', 'index.html'));
  });
app.listen(process.env.PORT||3001, () => {
  console.log("server running on 3001");
});
