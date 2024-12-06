import * as React from 'react';
import { render, screen } from '@testing-library/react-native';
import ArtistBox from '../artists/ArtistBox';
import { Artist } from '@/types/artist';

describe('ArtistBox', () => {
  const artist: Artist = { id: '123', name: 'Cameleon', image: 'https://t3.ftcdn.net/jpg/05/60/81/74/360_F_560817423_u3Lpcvw3XevtYQxaWnOcBVTZEe89UBbo.jpg' };

  it('renders good :)', () => {
    render(<ArtistBox { ...{artist} } />);
    expect(screen.getByTestId('artist-image')).toBeTruthy();
    expect(screen.getByTestId('artist-name')).toBeTruthy();
  })
});
