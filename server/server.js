const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

const db = require("../server/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// set port, listen for requests
app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
