// Seeding DB with the json files
var db = require('./db.js');
var fs = require('fs');

exports.seed = function(callback) {
    db.connect(function(cb) {
        if (cb == true) {
            // Clear DB to avoid duplicates
            db.clearDB(function(cb) {
                console.log("DB Cleared");
            });

            // Seeding airplane
            fs.readFile('json/airplane.json', 'utf8', function(err, data) {
                if (err) throw err;
                console.log("Data Retrieved from json");

                db.seed('airplane',JSON.parse(data));
            });

            // Seeding airport
            fs.readFile('json/airport.json', 'utf8', function(err, data) {
                if (err) throw err;
                console.log("Data Retrieved from json");

                db.seed('airport',JSON.parse(data));
            });

            // Seeding flights
            fs.readFile('json/flights.json', 'utf8', function(err, data) {
                if (err) throw err;
                console.log("Data Retrieved from json");

                db.seed('flights',JSON.parse(data));
            });

            callback(true);
        }
    });
}