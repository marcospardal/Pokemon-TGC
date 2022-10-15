import React, { memo } from 'react';
import Pokemon from '../../types/pokemon';
import PokemonTypes from '../PokemonTypes/PokemonTypes';

import './PokemonCard.styles.sass';

interface PokemonCardProps {
  pokemon: Pokemon
}

const PokemonCard = (props: PokemonCardProps): JSX.Element => {
  const { pokemon } = props

  return (
    <div role='listitem' key={pokemon.name} className='pokemon-card'>
      <PokemonTypes name={pokemon.name} types={['Grass', 'Fire', 'Darkness']}/>
      <img alt={`${pokemon.name}-card`} src={`${pokemon.images.large}`}/>
      <p>{pokemon.id}</p>
      <span>{pokemon.name}</span>
    </div>
  )
}

export default memo(PokemonCard);