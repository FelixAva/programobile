import { ArtistResource } from '@/types/artist';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const URLBase = process.env.EXPO_PUBLIC_API_URL;

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
