import apiManager from "./api-manager";
import { hashMd5 } from '@/helpers/md5.hashing';
import { Artist, ArtistResource } from '@/types/artist';
import { UserSession } from '@/types/user';

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

export {
  getTopArtist
}
