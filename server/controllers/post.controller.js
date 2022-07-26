const db = require("../models");
const Post = db.posts;

//create new post
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a Tutorial
  const post = new Post({
    title: req.body.title,
    article: req.body.article,
    published: req.body.published ? req.body.published : false,
  });
  // Save Tutorial in the database
  post
    .save(post)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

//retrieve posts
exports.findAll = (req, res) => {
  const title = req.query.title;
  let condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};
  Post.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving posts.",
      });
    });
};

//find single post with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Post.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Post with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Post with id=" + id });
    });
};

//update a post
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }
  const id = req.params.id;
  Post.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Tutorial with id=${id}. Maybe Post was not found!`,
        });
      } else res.send({ message: "Post was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Post with id=" + id,
      });
    });
};

//delete a post
exports.delete = (req, res) => {
  const id = req.params.id;
  Post.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Post with id=${id}. Maybe Post was not found!`,
        });
      } else {
        res.send({
          message: "Post was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Post with id=" + id,
      });
    });
};

//delete all a post
exports.deleteAll = (req, res) => {
  Post.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Posts were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all Posts.",
      });
    });
};

//find all a post
exports.findAllPublished = (req, res) => {
  Post.find({ published: true })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Posts.",
      });
    });
};
