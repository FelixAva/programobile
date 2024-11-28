import axios from 'axios';
import React, { useState } from 'react';
import { ArtistResource } from '@/types/artist';
import { hashMd5 } from '@/helpers/md5.hashing';
import { User, UserSession } from '@/types/user';

const useApi = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const api_url = process.env.EXPO_PUBLIC_API_URL as string;
  const api_key = process.env.EXPO_PUBLIC_API_KEY;
  const shared_secret = process.env.EXPO_PUBLIC_SHARED_SECRET;

  const getTopArtist = async ( country: string ) => {
    setIsLoading( true );
    setError( undefined );

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

    } catch (error: any) {
      setError( error.response?.data.message || error.message );
      console.error('Error fetching top artists: ', error.response?.data.message || error.message);
    } finally {
      setIsLoading( false );
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

  return {
    // Properties
    isLoading,
    error,

    // Methods
    getTopArtist,
    getArtistData,
    getMobileSession
  };
};

export default useApi;
