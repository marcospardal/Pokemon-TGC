import { render, screen } from '@testing-library/react';
import React from 'react';
import PokemonGrid from './PokemonGrid';

describe('Pokemon Grid', () => {
  test('Showing title', () => {
    render(<PokemonGrid list={[]}/>);

    const title = screen.getByText('All');

    expect(title).toBeInTheDocument();
  })

  test('Not showing empty list', () => {
    render(<PokemonGrid list={[]}/>);

    const list = screen.queryByRole('listitem')

    expect(list).toBe(null);
  })
})