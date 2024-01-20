var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var artistSchema = new Schema({
    
    id :{
        type: String,
        unique : true,
        required : true
    },

    decade : {
      //type: Number,
        type: String,
        unique : false,
        required : true
    },

    genre : {
        type: String,
        unique : false,
        required : true
    },

    image : {
        type: String,
        unique : false,
        required : true
    }
    
}, {
    timestamps: true,
    collection: 'artist'
});

module.exports = artistSchema;