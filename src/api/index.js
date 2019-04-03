import config from './config'
const { apiKey } = config 
const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=colombia&api_key=${apiKey}&format=json`;

function getArtists(){
    fetch(url)
        .then(res => res.json())
        .then(json => json.topartists.artist)
}