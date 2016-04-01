// routes.js

module.exports = function(app) {

        // server routes ===========================================================

        app.get('/api/flights', function(req, res) {

        //	res.send();
        });


        app.get('*', function(req, res) {
            res.sendfile('./public/index.html'); // load our public/index.html file
        });

    };
