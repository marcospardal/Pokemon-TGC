import React, { useMemo, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

import './Navbar.styles.sass';

import SearchIcon from '../../assets/icons/search-icon.svg';
import PokeballLogo from '../../assets/images/pokeball-logo.svg';
import FavoriteIcon from '../../assets/icons/favorites-icon.svg';

const NavBar = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <nav>
      <img alt='pokeball-logo' className='icon' src={PokeballLogo} onClick={() => navigate('/')}/>
      
      <section id='search-input'>
        <SearchBar />
        <img alt='search-icon' className='search-icon' src={SearchIcon} />
      </section>
      
      <img alt='favorite-icon' className='icon' src={FavoriteIcon} onClick={() => navigate('/favorites')}/>
    </nav>
  )
}

export default memo(NavBar);