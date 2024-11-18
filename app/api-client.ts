import { ArtistResource } from '@/types/artist';

const API_KEY = '6f70012877720d0a018cb6ee9bf33799';
const URLBase = `https://ws.audioscrobbler.com/2.0/?method=`;

function getMusicData() {
  return fetch(`${ URLBase }geo.gettopartists&country=spain&api_key=${API_KEY}&format=json`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => data.topartists.artist)
  .then(artists => artists.map( (artist: ArtistResource) => {
    return {
      id: artist.mbid,
      name: artist.name,
      image: artist.image[0]['#text']
    }
  } ))
  .catch((error) => console.log(error));
}

function getArtistData( mbid: string ) {
  return fetch(`${ URLBase }artist.getinfo&mbid=${mbid}&api_key=${API_KEY}&format=json`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then( response => response.json() )
  .then( data => data.artist )
  .then( artist => {
    return {
      name: artist.name,
      image: artist.image[0]['#text']
    }
  })
  .catch((error) => console.log(error));
}

export { getMusicData, getArtistData }
