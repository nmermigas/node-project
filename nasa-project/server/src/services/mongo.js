const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://nasa-api:4XdnLzR4Dodc8WN5@cluster0.qschnpj.mongodb.net/nasa?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  mongoose.connect(
    MONGO_URL
    //   {
    //   useNewUrlParser: true, // how mongoose parses the connection string into the mongo url
    //   useFindAndModify: false,
    //   useCreateIndex: true, // use updated way to create indexes
    //   useUnifiedTopology: true, //use updated way of talking to clusters
    // }
  );
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
};
