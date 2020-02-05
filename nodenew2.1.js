var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27018/music";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
