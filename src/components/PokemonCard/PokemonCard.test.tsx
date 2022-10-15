import { render, screen } from '@testing-library/react';
import React from 'react';
import Pokemon from '../../types/pokemon';

import PokemonCard from './PokemonCard';

describe('testing PokemonCard', () => {
  test('Showing Pokemon name', () => {
    render(<PokemonCard pokemon={{ name: 'name', id: 'id', images: { large: '' } } as Pokemon}/>);

    const name = screen.getByText('name');

    expect(name).toBeInTheDocument();
  });

  test('Showing Pokemon id', () => {
    render(<PokemonCard pokemon={{ name: 'name', id: 'id', images: { large: '' } } as Pokemon}/>);

    const id = screen.getByText('id');
  
    expect(id).toBeInTheDocument();
  });

  test('Showing Pokemon image', () => {
    render(<PokemonCard pokemon={{ name: 'name', id: 'id', images: { large: '' } } as Pokemon}/>);

    const image = screen.getByAltText('name-card');
  
    expect(image).toBeInTheDocument();
  });
})