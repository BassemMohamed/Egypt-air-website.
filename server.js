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



    


    // application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('./public/html/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");