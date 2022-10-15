import React, { memo, useEffect, useState } from 'react';
import { PokemonGrid } from '../../components';
import { api } from '../../resources/api';
import Pokemon from '../../types/pokemon';

import './Home.styles.sass';

const Home = (): JSX.Element => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    api.get('/cards').then(res => {
      setPokemons(res.data.data);
    })
  }, [])

  console.log(pokemons)
  return (
    <section id='home' className='home'>
      <PokemonGrid list={pokemons}/>
    </section>
  )
}

export default memo(Home);