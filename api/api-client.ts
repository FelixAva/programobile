import axios from 'axios';
import { ArtistResource } from '@/types/artist';
import { hashMd5 } from '@/helpers/md5.hashing';
import { User, UserSession } from '@/types/user';

const api_url = process.env.EXPO_PUBLIC_API_URL as string;
const api_key = process.env.EXPO_PUBLIC_API_KEY;
const shared_secret = process.env.EXPO_PUBLIC_SHARED_SECRET;

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

const getMobileSession = async ( username: string, password: string ): Promise<UserSession> => {
  const api_signature = hashMd5(`api_key${api_key}methodauth.getMobileSessionpassword${password}username${username}${shared_secret}`);
  const params = {
    method: 'auth.getMobileSession',
    username,
    password,
    api_key,
    api_sig: api_signature,
    format: 'json'
  }

  try {
    const { data } = await axios.post( api_url, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    } );

    return data.session;
  } catch (error: any) {
    console.error("Error getting the session:", error.response?.data.message || error.message);
    return error.response?.data.message || error.message;
  }
};

export {
  getTopArtist,
  getArtistData,
  getMobileSession
}
