const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

let corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));

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
  res.json({ message: "Welcome to myblog." });
});

require("./app/routes/post.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
