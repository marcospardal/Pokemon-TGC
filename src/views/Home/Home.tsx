import React, { memo } from 'react';
import { PokemonGrid } from '../../components';

import './Home.styles.sass';

const Home = (): JSX.Element => {
  return (
    <section id='home' className='home'>
      <PokemonGrid list={[
        { pokemonName: 'Venusaur-EX', pokemonId: 'g1-1', pokemonImg: 'https://images.pokemontcg.io/g1/1_hires.png' },
        { pokemonName: 'Venusaur-EX', pokemonId: 'g1-1', pokemonImg: 'https://images.pokemontcg.io/g1/1_hires.png' },
        { pokemonName: 'Venusaur-EX', pokemonId: 'g1-1', pokemonImg: 'https://images.pokemontcg.io/g1/1_hires.png' },
        { pokemonName: 'Venusaur-EX', pokemonId: 'g1-1', pokemonImg: 'https://images.pokemontcg.io/g1/1_hires.png' },
        { pokemonName: 'Venusaur-EX', pokemonId: 'g1-1', pokemonImg: 'https://images.pokemontcg.io/g1/1_hires.png' },
        { pokemonName: 'Venusaur-EX', pokemonId: 'g1-1', pokemonImg: 'https://images.pokemontcg.io/g1/1_hires.png' },
        { pokemonName: 'Venusaur-EX', pokemonId: 'g1-1', pokemonImg: 'https://images.pokemontcg.io/g1/1_hires.png' },
      ]}/>
    </section>
  )
}

export default memo(Home);