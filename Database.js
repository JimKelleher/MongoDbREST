// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages
// relationships between data, provides schema validation, and is used to translate between
// objects in code and the representation of those objects in MongoDB:
var mongoose = require('mongoose');

// Module to give colors to console text:
var chalk = require('chalk');

//var dbURL = 'https://mongodbrest.adaptable.app/artist';
var dbURL = process.env.DATABASE_URL;
//var dbURL = 'mongodb+srv://mongodbrest-main-db-09a2d3f25de:Tyqt3Wk3XVJG1xhk31GDqNAbet7Q6Q@prod-us-central1-3.yr9so.mongodb.net/mongodbrest-main-db-09a2d3f25de/artist';

console.log(process.env.DATABASE_URL);

var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;

module.exports = function(){

    var options = {
        "server" : {
          "socketOptions" : {
            "keepAlive" : 300000,
            "connectTimeoutMS" : 30000
          }
        },
        "replset" : {
          "socketOptions" : {
            "keepAlive" : 300000,
            "connectTimeoutMS" : 30000
          }
        }
      }

    mongoose.connect(dbURL, options);

    mongoose.connection.on('connected', function(){
        console.log(connected("Mongoose default connection is open to ", dbURL));
    });

    mongoose.connection.on('error', function(err){
        console.log(error("Mongoose default connection has occured "+err+" error"));
    });

    mongoose.connection.on('disconnected', function(){
        console.log(disconnected("Mongoose default connection is disconnected"));
    });

    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log(termination("Mongoose default connection is disconnected due to application termination"));
            process.exit(0)
        });
    });
}
