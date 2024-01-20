var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');

var Artist = require('./ArtistDao.js');
var artistSchema = require('./ArtistModel');


exports.createArtist = function (req, res, next) {

    var artist = {
        _id: req.body._id,
        id: req.body.id,
        decade: req.body.decade,
        genre: req.body.genre,
        image: req.body.image
    };

    Artist.create(artist, function(err, artist) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            message: "Artist created successfully",
            _id: artist._id
        })
    })

}

exports.createArtistBatch = function (req, res, next) {

    var artists = JSON.parse(fs.readFileSync(path.resolve(__dirname, req.params.file), 'UTF-8'));

    var Artist = mongoose.model('Artist', artistSchema);

    Artist.createbatch(artists, res);
    
}

exports.getArtists = function(req, res, next) {

    Artist.get({}, function(err, artist) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            artist: artist
        })
    })

}

exports.getArtist = function(req, res, next) {

    Artist.get({id: req.params.id}, function(err, artist) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            artist: artist
        })
    })

}

exports.updateArtist = function(req, res, next) {

    var artist = {
        _id: req.params.id,
        id: req.body.id,
        decade: req.body.decade,
        genre: req.body.genre,
        image: req.body.image
    }

    Artist.update({id: req.body.id}, artist, function(err, artist) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            message: "Artist updated successfully"
        })
    })

}

exports.removeArtist = function(req, res, next) {

    Artist.delete({_id: req.params.id}, function(err, artist) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            message: "Artist deleted successfully"
        })
    })

}

exports.removeArtists = function(req, res, next) {

        Artist.deleteAll({args: req.params.args}, function(err, artist) {

        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            message: "All artists deleted successfully"
        })
    })

}