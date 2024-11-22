import * as React from 'react';
import { render, screen } from '@testing-library/react-native';
import ArtistDetailView from '@/app/(app)/(tabs)/(staticRoute)/ArtistDetailView';

jest.mock('expo-router', () => ({
  useNavigation: () => ({
    setOptions: jest.fn(),
  }),
  useLocalSearchParams: () => ({
    id: '123',
    name: 'Test Artist',
    image: 'https://t3.ftcdn.net/jpg/05/60/81/74/360_F_560817423_u3Lpcvw3XevtYQxaWnOcBVTZEe89UBbo.jpg'
  })
}))

describe('ArtisDetailView', () => {
  it('renders correctly', () => {
    render(<ArtistDetailView />);
    expect(screen.getByTestId('image-container')).toBeTruthy();
    expect(screen.getByTestId('name-container')).toBeTruthy();
  });

  it('renders the correct artist name', () => {
    render(<ArtistDetailView />);
    const nameContainer = screen.getByTestId('name-container');
    expect(nameContainer.props.children).toContain('Test Artist'); // Verifica que contiene el nombre
  });
})
