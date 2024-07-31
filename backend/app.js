const express = require('express');
const router = express.router();
const app = express();
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyapi = new SpotifyWebApi({
    clientId: 'd575702781d4491aae3036edf2d5c28f',
    clientSecret: '009a36003e7742b5a9efaa5d04146093',
    redirectUri: ''
})

router.get('/', (req, res, next) => {

})

app.use('/', router)
app.listen(9000, () => {
    console.log('running')
})