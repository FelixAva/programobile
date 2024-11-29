import apiManager from "./api-manager";
import { hashMd5 } from '@/helpers/md5.hashing';
import { Artist, ArtistResource } from '@/types/artist';
import { UserLogin, UserSession } from '@/types/user';

const api_key = process.env.EXPO_PUBLIC_API_KEY;
const shared_secret = process.env.EXPO_PUBLIC_SHARED_SECRET;

const getTopArtist = async ( country: string ) => {
  const params = {
    method: 'geo.gettopartists',
    country: country,
  };

  const { data } = await apiManager.get( '/', { params } );
  const artists = data.topartists.artist;

  return artists.map( (artist: ArtistResource) => {
    return {
      id: artist.mbid,
      name: artist.name,
      image: artist.image[0]["#text"]
    }
  });
};

const getArtistData = async ( mbid: string ): Promise<Artist> => {
  const params = {
    method: 'artist.getinfo',
    mbid: mbid,
  };

  const { data } = await apiManager.get( '/', { params } );
  const artist: ArtistResource = data.artist;

  return {
    id: `${artist.mbid}`,
    name: artist.name,
    image: artist.image[0]["#text"]
  };
};

const getMobileSession = async ( { username, password }: UserLogin ): Promise<UserSession> => {
  const api_signature = hashMd5(`api_key${api_key}methodauth.getMobileSessionpassword${password}username${username}${shared_secret}`);
  const params = {
    method: 'auth.getMobileSession',
    username,
    password,
    api_sig: api_signature,
  }

  const { data } = await apiManager.post( '/', params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });

  return data.session;
};

export {
  getTopArtist,
  getArtistData,
  getMobileSession
}
