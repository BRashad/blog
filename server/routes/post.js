const express = require("express");

const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/post").get(function (req, res) {
  let db_connect = dbo.getDb("posts");
  db_connect.collection("posts").find(
    {}.toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
  );
});

recordRoutes.route("/post/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myObj = {
    title: req.body.title,
    text: req.bpdy.text,
    img: req.body.img,
  };

  db_connect.collection("posts").insertOne(myObj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });

  recordRoutes.route("/uodate/:id").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
      $set: {
        title: req.body.title,
        text: req.body.text,
        img: req.body.img,
      },
    };
  });

  recordRoutes.route("/:id").post((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("posts").deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      response.json(obj);
    });
  });
});

module.exports = recordRoutes;
