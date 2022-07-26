const { mongo } = require("mongoose");

module.exports = (mongoose) => {
  return mongoose.model(
    "tutorial",
    mongoose.Schema(
      {
        title: String,
        article: String,
        published: Boolean,
      },
      {
        timestamps: true,
      }
    )
  );
};
