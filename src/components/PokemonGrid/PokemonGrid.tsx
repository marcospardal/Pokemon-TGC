import React, { memo } from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';

import './PokemonGrid.styles.sass';

interface PokemonGridProps {
  list: any[]
}

const PokemonGrid = (props: PokemonGridProps): JSX.Element => {
  const { list } = props;
  return (
    <section id='pokemon-grid' className='pokemon-grid'>
      <h2>All</h2>
      <section className='grid'>
        {list.map(pokemon => (
          <PokemonCard pokemonId={pokemon.pokemonId} pokemonImg={pokemon.pokemonImg} pokemonName={pokemon.pokemonName} />
        ))}
      </section>
    </section>
  )
}

export default memo(PokemonGrid);