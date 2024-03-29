module.exports = (app) => {
  const posts = require("../controllers/post.controller.js");
  let router = require("express").Router();

  router.get("/", (req, res) => {
    res.send("In posts !");
  });

  // Create a new Tutorial
  router.post("/", posts.create);
  // Retrieve all posts
  router.get("/", posts.findAll);
  // Retrieve all published posts
  router.get("/published", posts.findAllPublished);
  // Retrieve a single Tutorial with id
  router.get("/:id", posts.findOne);
  // Update a Tutorial with id
  router.put("/:id", posts.update);
  // Delete a Tutorial with id
  router.delete("/:id", posts.delete);
  // Create a new Tutorial
  router.delete("/", posts.deleteAll);

  app.use("/api/posts", router);
};
