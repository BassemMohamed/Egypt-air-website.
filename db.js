var mongodb = require('mongodb')
var MongoClient = mongodb.MongoClient;
var dburl = 'mongodb://localhost:27017/egyptair';
var assert = require('assert');
var DB = null;

exports.connect = function(cb)
{
    MongoClient.connect(dburl, function(err, db) 
    {
        DB = db;
        if(db != null)
        {
          console.log("Connected To DB");
          cb(true);
        }
        if(err != null)
        {
          console.log("Error Connecting To DB");
          console.log(err);
          cb(false);
        }
    });
}

exports.seed = function(collectionName,data)
{
  DB.collection(collectionName).insert(data, function(err, doc) {
        console.log(data);
    if(err) throw err;
  });
}

// Needs Tweaking Not At all done
exports.getFlights = function(cb) {
    var flights = DB.collection('flights').find().toArray(function(err, docs) {
        var intCount = docs.length;
        if (initCount = 0)
        {
          console.log("Database Empty");
        }
        if (intCount > 0) {
            var strJson = "[";
            for (var i = 0; i < intCount;) {
                strJson += strJson = '{"author": "' + docs[i].author + '","text": "' + docs[i].text + '"}';
                i = i + 1;
                if (i < intCount) {
                    strJson += ',';
                }
            }
            strJson += ']';
            cb(strJson);
            console.log("Quotes Retrived from DB");
        }
    });
}

exports.db = function() 
{
  if (DB === null) throw Error('DB Object has not yet been initialized');
    return DB;
};

exports.clearDB = function(done) 
{
    DB.listCollections().toArray().then(function (collections) 
    {
      collections.forEach(function (c) 
      {
         DB.collection(c.name).removeMany();   
      });
      done();
    }).catch(done);
};