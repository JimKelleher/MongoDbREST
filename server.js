var express = require('express');

// Morgan is logging middleware for node.js http apps:
var log = require('morgan')('dev');

// "body-parser" extracts the entire body portion of an incoming request stream and exposes it
// on req.body.  This body-parser module parses the JSON, buffer, string and URL encoded data
// submitted using HTTP POST request:
var bodyParser = require('body-parser');

var db = require('./Database.js');
var artistRoute = require('./artist/ArtistRoute.js');
var cors = require('cors')


// Startup:
var app = express();
var port = process.env.PORT || 3000;
app.set('port', port);

// Configure body parser:
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

// Initialise express router:
var router = express.Router();

// Call the database connectivity function:
db();

// Configure app.use():
app.use(express.static(__dirname));
app.use(cors());
app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
app.use('/artist',router);

// Error handling:
app.use(function(req, res, next) {
     res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader("Access-Control-Allow-Credentials", "true");
     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
   next();
 });

// Call artist routing:
artistRoute(router);

// Intialise server:
app.listen(port, (req, res) => {
  console.log(`Server is running on ${port} port.`);
})