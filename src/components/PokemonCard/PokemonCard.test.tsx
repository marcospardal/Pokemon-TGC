import { render, screen } from '@testing-library/react';
import React from 'react';

import PokemonCard from './PokemonCard';

describe('testing PokemonCard', () => {
  test('Showing Pokemon name', () => {
    render(<PokemonCard pokemonName='name' pokemonId='id' pokemonImg=''/>);

    const name = screen.getByText('name');

    expect(name).toBeInTheDocument();
  });

  test('Showing Pokemon id', () => {
    render(<PokemonCard pokemonName='name' pokemonId='id' pokemonImg=''/>);

    const id = screen.getByText('id');
  
    expect(id).toBeInTheDocument();
  });

  test('Showing Pokemon image', () => {
    render(<PokemonCard pokemonName='name' pokemonId='id' pokemonImg=''/>);

    const image = screen.getByAltText('name-card');
  
    expect(image).toBeInTheDocument();
  });
})