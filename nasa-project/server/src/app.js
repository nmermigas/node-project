const express = require("express");
const cors = require("cors");

const planetsRouter = require("./routes/planets/planets.router");

const app = express();

app.use(
  cors({
    origin: "http://localhost",
  })
); //middleware for cors: cross origin requests
app.use(express.json());
app.use(planetsRouter);

module.exports = app;

// convenient as it separates middleware from server
