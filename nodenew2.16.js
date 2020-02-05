var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27018/";MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("students");
  dbo.collection("studentmarks").find({$or:[{"name":"Kala"},{"name":"Aruli"} ]} ,{ projection:{_id:0}}).toArray(function(err, result){

    if (err) throw err;
    console.log(result);
    db.close();
  });
});
