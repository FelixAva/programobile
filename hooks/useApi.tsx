import axios from 'axios';
import React, { useState } from 'react';
import { hashMd5 } from '@/helpers/md5.hashing';
import { Artist, ArtistResource } from '@/types/artist';
import { UserSession } from '@/types/user';

const useApi = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Specific states of each API response
  const [session, setSession] = useState<UserSession>();
  const [topArtist, setTopArtist] = useState<Artist[]>();
  const [artistData, setArtistData] = useState<Artist>();

  const api_url = process.env.EXPO_PUBLIC_API_URL as string;
  const api_key = process.env.EXPO_PUBLIC_API_KEY;
  const shared_secret = process.env.EXPO_PUBLIC_SHARED_SECRET;

  const getTopArtist = async ( country: string ) => {
    setIsLoading( true );
    setError( null );

    const params = {
      method: 'geo.gettopartists',
      country: country,
      api_key: api_key,
      format: 'json'
    };

    try {
      const { data } = await axios.get( api_url, { params } );
      const artists = data.topartists.artist;

      setTopArtist(artists.map( (artist: ArtistResource) => {
        return {
          id: artist.mbid,
          name: artist.name,
          image: artist.image[0]["#text"]
        }
      }));

    } catch (error: any) {
      setError( error.response?.data.message || error.message );
      console.error('Error fetching top artists: ', error.response?.data.message || error.message);
    } finally {
      setIsLoading( false );
    }
  };

  const getArtistData = async ( mbid: string ) => {
    setIsLoading( true );
    setError( null );

    const params = {
      method: 'artist.getinfo',
      mbid: mbid,
      api_key: api_key,
      format: 'json'
    };

    try {
      const { data } = await axios.get( api_url, { params } );
      const artist: ArtistResource = data.artist;

      setArtistData({
        id: `${artist.mbid}`,
        name: artist.name,
        image: artist.image[0]["#text"]
      });
    } catch ( error: any ) {
      setError( error.response?.data.message || error.message );
      console.error('Error getting the artist data: ', error.response?.data.message || error.message);
    } finally {
      setIsLoading( false );
    }
  };

  const getMobileSession = async ( username: string, password: string ) => {
    setIsLoading( true );
    setError( null );

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

      setSession( data.session );
    } catch (err: any) {
      console.error("Error getting the session:", err.response?.data.message || err.message);
      setError( err.response?.data.message || err.message );
    } finally {
      setIsLoading( false );
    }
  };

  return {
    // Properties
    isLoading,
    error,
    session,
    topArtist,
    artistData,

    // Methods
    getTopArtist,
    getArtistData,
    getMobileSession
  };
};

export default useApi;
