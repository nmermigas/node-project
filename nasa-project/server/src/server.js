const PORT = process.env.PORT || 8000;
const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");

const MONGO_URL =
  "mongodb+srv://nasa-api:4XdnLzR4Dodc8WN5@cluster0.qschnpj.mongodb.net/nasa?retryWrites=true&w=majority";

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(
    MONGO_URL
    //   {
    //   useNewUrlParser: true, // how mongoose parses the connection string into the mongo url
    //   useFindAndModify: false,
    //   useCreateIndex: true, // use updated way to create indexes
    //   useUnifiedTopology: true, //use updated way of talking to clusters
    // }
  );
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
