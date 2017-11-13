//connect database
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";
var db;
MongoClient.connect(url, function (err, database) {
    if (err) throw err;
    db = database;
    console.log("Connected to " + url);
});

function findAll(req, res) {
    //Get data from mogodb
    var query = {};
    db.collection("users").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result);
    });
}

function search(req, res) {
    var fname = req.query.fname;
    console.log(fname);
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var query = { first_name: new RegExp('.*' + fname + '.*') };
        console.log(query);
        db.collection("users").find(query).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
            res.json(result);
        });
    });
}

function sLastname(req, res) {
    var last_name = req.param('last_name');
        var query ={last_name: last_name};
    console.log(query);
    MongoClient.connect(url, function (err, db) {
        // if (err) throw err;
        //last_name:  last_name  var query = { };
        // console.log(query);
        db.collection("users").find(query).toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
            res.json(result);
        });
    });
}

function role(req, res) {
    var role = req.params.role;

      var query = { role: new RegExp('.*' + role + '.*') };
      db.collection("users").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
        res.json(result);
      });

}

module.exports = {
    findAll: findAll,
    search: search,
    sLastname:sLastname,
    role:role
};