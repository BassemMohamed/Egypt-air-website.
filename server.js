// server.js

    // set up ========================
    var express  = require('express');
    var app      = express();
    var bodyParser     = require('body-parser');
    var methodOverride = require('method-override');                               // create our app w/ express
    
    // configuration =================
    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users

    // routes ======================================================================
    var html_dir = './public/html/';
    require('./routes.js')(app); // configure our routes

    // KOL dh msh moshkelaa dlw2ty.
    app.get('/boarding', function(req, res) {
        
        res.sendfile(html_dir + 'boarding.html');
    });
    
    app.get('/confirm', function(req, res) {
        
        res.sendfile(html_dir + 'confirm.html');
    });

    app.get('/flight', function(req, res) {
        
        res.sendfile(html_dir + 'flight.html');
    });

    app.get('/trackflight', function(req, res) {
        
        res.sendfile(html_dir + 'trackFlight.html');
    });

    app.get('/viewflights', function(req, res) {
        
        res.sendfile(html_dir + 'viewFlights.html');
    });

    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");

    // expose app           
    exports = module.exports = app; 