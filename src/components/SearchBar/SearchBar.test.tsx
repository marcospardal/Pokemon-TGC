import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import SearchBar from './SearchBar';


describe('testing search bar', () => {
  test('chaging value', () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText('Search Pokémon');

    fireEvent.change(input, { target: { value: 'Pikachu' } });

    expect(input).toHaveValue('Pikachu');
  })
})