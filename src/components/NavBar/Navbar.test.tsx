import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Navbar from './Navbar';

describe('Navbar tests', () => {
  test('Showing pokeball', () => {
    render(<Navbar />);

    const pokeballLogo = screen.getByAltText('pokeball-logo');

    expect(pokeballLogo).toBeInTheDocument();
  });
})