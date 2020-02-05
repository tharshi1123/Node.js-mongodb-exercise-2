var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27018/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("students");
  var myobj = [
    { "name": "Mala","maths_marks": 45,"english_marks":53,"science_marks":72},
    {" name":"Venu", "maths_marks": 80,"english_marks":75,"science_marks":85},
    {"name": "Kala", "maths_marks": 32,"english_marks":46,"science_marks":53},
    {"name": "Aruli"," maths_marks": 78,"english_marks":85,"science_marks":80},
    {"name": "Shayu", "maths_marks":80,"english_marks":76,"science_marks":65},
{"name": "Kumaran"," maths_marks":32,"english_marks":73,"science_marks":84},
{"name": "Lucky"," maths_marks":64,"english_marks":90,"science_marks":45},
{"name": "Gva", "maths_marks":71,"english_marks":75,"science_marks":56},
{"name": "Raam"," maths_marks":41,"english_marks":65,"science_marks":88},
  ];
  dbo.collection("studentmarks").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
