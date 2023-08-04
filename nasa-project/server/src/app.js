const express = require("express");
const cors = require("cors");

const planetsRouter = require("./routes/planets/planets.router");

const app = express();

<<<<<<< HEAD
app.use(cors({
    origin:"http://localhost"
})); //middleware for cors: cross origin requests
=======
app.use(
  cors({
    origin: "http://localhost",
  })
); //middleware for cors: cross origin requests
>>>>>>> c3d12c47129c2c1edf2bd9105eed9cae6528efa6
app.use(express.json());
app.use(planetsRouter);

module.exports = app;

<<<<<<< HEAD

=======
>>>>>>> c3d12c47129c2c1edf2bd9105eed9cae6528efa6
// convenient as it separates middleware from server
