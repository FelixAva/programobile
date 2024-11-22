import * as React from 'react';
import { render, screen } from '@testing-library/react-native';
import StaticArtistList from '../staticRoute/ArtistList';
import { Artist } from '@/types/artist';

describe('ArtistList', () => {
  const artistList: Artist[] = [{ id: '123', name: 'Cameleon', image: 'https://t3.ftcdn.net/jpg/05/60/81/74/360_F_560817423_u3Lpcvw3XevtYQxaWnOcBVTZEe89UBbo.jpg' }];

  it('renders correctly', () => {
    render(<StaticArtistList artists={ artistList } />);
    expect(screen.getByTestId('artist-list')).toBeTruthy();
    artistList.map( item => {
      expect(screen.getByTestId(`artist-box-${ item.name }`)).toBeTruthy();
    } )
  })
});
