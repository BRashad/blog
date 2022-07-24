const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log("DataBase", Db);

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (db) {
        _db = db.db("posts");
        console.log("Successfully connected to MongoDB!");
      }
      return callback(err);
    });
  },
  getDb: function () {
    return _db;
  },
};
