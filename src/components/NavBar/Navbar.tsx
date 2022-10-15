import React, { useMemo, memo, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';

import './Navbar.styles.sass';

import SearchIcon from '../../assets/icons/search-icon.svg';
import PokeballLogo from '../../assets/images/pokeball-logo.svg';

const NavBar = (): JSX.Element => {
  return (
    <nav>
      <img alt='pokeball-logo' src={PokeballLogo}/>
      
      <section id='search-input'>
        <SearchBar />
        <img alt='search-icon' className='search-icon' src={SearchIcon} />
      </section>
      <div></div>
    </nav>
  )
}

export default memo(NavBar);