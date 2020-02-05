var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("students");
  var myquery = {name:"john"};
  var newvalues = { $rename: {"englishmarks":"sciencemarks"} };
  dbo.collection("studentmarks").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
