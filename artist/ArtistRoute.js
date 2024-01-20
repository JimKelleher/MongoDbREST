var Artist = require('./ArtistController.js');

module.exports = function(router) {
    router.post('/create', Artist.createArtist);
    router.post('/createbatch/:file', Artist.createArtistBatch);
    router.get('/getall', Artist.getArtists);
    router.get('/get/:id', Artist.getArtist);
    router.put('/update/:id', Artist.updateArtist);
    router.delete('/remove/:id', Artist.removeArtist);
    router.delete('/removeall/', Artist.removeArtists);
}


// http://artistrest.herokuapp.com/artist/create/                                   POST

// http://artistrest.herokuapp.com/artist/createbatch/all_decade_genre_combos.js    POST

// http://artistrest.herokuapp.com/artist/getall/                                   GET

// http://artistrest.herokuapp.com/artist/get/ABBA                                  GET

// http://artistrest.herokuapp.com/artist/update/ABBA                               PUT

// http://artistrest.herokuapp.com/artist/remove/ABBA                               DELETE

// http://artistrest.herokuapp.com/artist/removeall/                                DELETE
