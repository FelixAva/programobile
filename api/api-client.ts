import axios from 'axios';
import { Artist, ArtistResource } from '@/types/artist';

const api_url = process.env.EXPO_PUBLIC_API_URL as string;
const api_key = process.env.EXPO_PUBLIC_API_KEY;

const getTopArtist = async ( country: string ) => {
  const params = {
    method: 'geo.gettopartists',
    country: country,
    api_key: api_key,
    format: 'json'
  };

  try {
    const { data } = await axios.get( api_url, { params } );
    const artists = data.topartists.artist;

    return artists.map( (artist: ArtistResource) => {
      return {
        id: artist.mbid,
        name: artist.name,
        image: artist.image[0]["#text"]
      }
    });

  } catch (error) {
    console.error('Error fetching top artists: ', error);
  }
};

const getArtistData = async ( mbid: string ) => {
  const params = {
    method: 'artist.getinfo',
    mbid: mbid,
    api_key: api_key,
    format: 'json'
  };

  const { data } = await axios.get( api_url, { params } );
  const artist: ArtistResource = data.artist;

  return {
    name: artist.name,
    image: artist.image[0]["#text"]
  };
};

export {
  getTopArtist,
  getArtistData
}
