var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [
    {"id": 1, "first_name": "Eve","last_name": "Highway","expired": false, "role": "admin"},
    {"id": 2,"first_name": "Peter","last_name": "Yellow Garden","expired": false, "role": "user"},
    {"id": 3,"first_name": "Hannah","last_name": "Park Lane","expired": false, "role": "admin"},
    {"id": 4,"first_name": "Michael","last_name": "Highway","expired": false, "role":"user"},
    {"id": 5,"first_name": "Sandy","last_name": "Lowstreet","expired": false, "role": "user"},
    {"id": 6, "first_name": "Betty","last_name": "Valley","expired": false, "role": "user"},
    {"id": 7, "first_name": "Richard","last_name": "Mountain","expired": false, "role": "user"},
    {"id": 8,"first_name": "Susan","last_name": "Apple","expired": false, "role": "admin"},
    {"id": 9,"first_name": "Ben","last_name": "Sideway ","expired": false, "role": "admin"},
    {"id": 10,"first_name": "William","last_name": "Main Road","expired": false, "role": "admin"},
  ];
  db.collection("users").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});