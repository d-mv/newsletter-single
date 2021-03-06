const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongo = require("mongodb");
const mongoose = require("mongoose");
const db = mongoose.connection;
const dotenv = require("dotenv").config();
const compression = require("compression");
// routes
const indexRouter = require("./routes/api/index");

const app = express();

// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");
app.use(compression());
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

app.use("/api", indexRouter);

// * React

//Static file declaration
app.use(express.static(path.join(__dirname, "client-ts/build")));

//production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client-ts/build")));
  //
  app.get("/index.html", (req, res) => {
    res.sendfile(path.join((__dirname = "client-ts/build/index.html")));
  });
}

//build mode
app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname + "/client-ts/public/index.html"));
});

// * end of React

// app.get("*", (err, req, res, next) => {
//   console.log('unknown request')
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   res.status(err.status || 500);
//   res.send();
// });

module.exports = app;
