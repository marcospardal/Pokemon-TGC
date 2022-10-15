import React, { memo, useMemo } from 'react';

import './PokemonTypes.styles.sass';

import FireIcon from '../../assets/icons/fire-icon.png';
import FairyIcon from '../../assets/icons/fairy-icon.png';
import GrassIcon from '../../assets/icons/grass-icon.png';
import MetalIcon from '../../assets/icons/metal-icon.png';
import WaterIcon from '../../assets/icons/water-icon.png';
import DragonIcon from '../../assets/icons/dragon-icon.png';
import PsychicIcon from '../../assets/icons/psychic-icon.png';
import DarkenessIcon from '../../assets/icons/darkness-icon.png';
import LightningIcon from '../../assets/icons/lightning-icon.png';
import FightningIcon from '../../assets/icons/fightning-icon.png';
import ColorlessIcon from '../../assets/icons/colorless-icon.png';

interface PokemonTypesProps {
  name: string
  types: string[]
}

const PokemonTypes = (props: PokemonTypesProps): JSX.Element => {
  const { name, types } = props;
  const grassIcon = useMemo(() => <img alt='grass-icon' src={GrassIcon}/>, [])
  const dragonIcon = useMemo(() => <img alt='dragon-icon' src={DragonIcon}/>, [])
  const fireIcon = useMemo(() => <img alt='fire-icon' src={FireIcon}/>, [])
  const fairyIcon = useMemo(() => <img alt='fairy-icon' src={FairyIcon}/>, [])
  const metalIcon = useMemo(() => <img alt='metal-icon' src={MetalIcon}/>, [])
  const waterIcon = useMemo(() => <img alt='water-icon' src={WaterIcon}/>, [])
  const psychicIcon = useMemo(() => <img alt='psychic-icon' src={PsychicIcon}/>, [])
  const darknessIcon = useMemo(() => <img alt='darkness-icon' src={DarkenessIcon}/>, [])
  const lightningIcon = useMemo(() => <img alt='lightning-icon' src={LightningIcon}/>, [])
  const fightningIcon = useMemo(() => <img alt='fightning-icon' src={FightningIcon}/>, [])
  const colorlessIcon = useMemo(() => <img alt='colorless-icon' src={ColorlessIcon}/>, [])

  return (
    <section id={`${name}-types`} className='pokemon-types'>
      {types.includes('Grass') && grassIcon}
      {types.includes('Dragon') && dragonIcon}
      {types.includes('Fairy') && fairyIcon}
      {types.includes('Metal') && metalIcon}
      {types.includes('Water') && waterIcon}
      {types.includes('Psychic') && psychicIcon}
      {types.includes('Darkness') && darknessIcon}
      {types.includes('Lightning') && lightningIcon}
      {types.includes('Fightning') && fightningIcon}
      {types.includes('Colorless') && colorlessIcon}
      {types.includes('Fire') && fireIcon}
    </section>
  )
}

export default memo(PokemonTypes)