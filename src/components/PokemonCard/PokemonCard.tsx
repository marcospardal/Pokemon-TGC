import React, { memo } from 'react';
import PokemonTypes from '../PokemonTypes/PokemonTypes';

import './PokemonCard.styles.sass';

interface PokemonCardProps {
  pokemonName: string
  pokemonId: string
  pokemonImg: string
}

const PokemonCard = (props: PokemonCardProps): JSX.Element => {
  const { pokemonName, pokemonId, pokemonImg } = props

  return (
    <div role='listitem' key={pokemonName} className='pokemon-card'>
      <PokemonTypes name={pokemonName} types={['Grass', 'Fire', 'Darkness']}/>
      <img alt={`${pokemonName}-card`} src={`${pokemonImg}`}/>
      <p>{pokemonId}</p>
      <span>{pokemonName}</span>
    </div>
  )
}

export default memo(PokemonCard);