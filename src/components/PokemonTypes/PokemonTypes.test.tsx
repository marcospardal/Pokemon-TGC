import { render, screen } from '@testing-library/react';
import React from 'react';
import PokemonTypes from './PokemonTypes';

describe('Testing Pokemon Types Icons', () => {
  test('Showing every icon', () => {
    render(<PokemonTypes name='name' types={['Grass', 'Dragon']}/>)

    const grassIcon = screen.queryByAltText('grass-icon');
    const dragonIcon = screen.queryByAltText('dragon-icon');

    expect(grassIcon).toBeInTheDocument();
    expect(dragonIcon).toBeInTheDocument();
  });

  test('Not Showing wrong icon', () => {
    render(<PokemonTypes name='name' types={['Grass', 'Dragon']}/>)

    const fireIcon = screen.queryByAltText('fire-icon');

    expect(fireIcon).toBe(null);
  })
})