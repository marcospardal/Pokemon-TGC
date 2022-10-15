import React, { memo, useState } from 'react';
import './SearchBar.styles.sass';

const SearchBar = (): JSX.Element => {
  const [value, setValue] = useState<string>('');

  return (
    <input 
      placeholder='Search Pokémon'
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  )
}

export default memo(SearchBar);