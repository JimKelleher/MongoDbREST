var mongoose = require('mongoose');
var artistSchema = require('./ArtistModel');


// Data access object:

artistSchema.statics = {

    create: function(data, callBack) {
        var artist = new this(data);
        artist.save(callBack);
    },

    createbatch: async function(artists, res) {

        try {
            await this.insertMany(artists); 

            res.json({
                message: "Artists created successfully"
            })

        } catch (error) {

            res.json({
                error: error
            })

        }

    },

    get: function(query, callBack) {

        this.find(query, callBack);
        
    },

    getByName: function(query, callBack) {

        this.find(query, callBack);

    },

    update: function(query, updateData, callBack) {

        this.findOneAndUpdate(query, {$set: updateData}, {new: true}, callBack);

    },

    delete: function(query, callBack) {

        this.findOneAndDelete(query, callBack);

    },

    deleteAll: function(query, callBack) {

        this.deleteMany({}, callBack);

    }

}

var artistModel = mongoose.model('artist', artistSchema, 'artist');

module.exports = artistModel;