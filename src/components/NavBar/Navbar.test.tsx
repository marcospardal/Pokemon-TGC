import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';

describe('Navbar tests', () => {
  test('Showing pokeball', () => {
    render(<BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}/>
      </Routes>
    </BrowserRouter>);

    const pokeballLogo = screen.getByAltText('pokeball-logo');

    expect(pokeballLogo).toBeInTheDocument();
  });

  test('Showing search bar', () => {
    render(<BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}/>
      </Routes>
    </BrowserRouter>);

    const searchBar = screen.getByPlaceholderText('Search Pokémon');

    expect(searchBar).toBeInTheDocument();
  });

  test('Showing Favorites Icon', () => {
    render(<BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}/>
      </Routes>
    </BrowserRouter>);

    const favoritesIcon = screen.getByAltText('favorite-icon');

    expect(favoritesIcon).toBeInTheDocument();
  })
})