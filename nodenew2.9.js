var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27018/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("students");


  dbo.collection("studentmarks").find({"maths_marks":{$gte:50}, "english_marks":{$gte:50}}), function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
