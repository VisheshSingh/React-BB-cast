import React from 'react';
import Spinner from '../Spinner';
import CharacterCard from './CharacterCard';

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <div className='cards'>
      {items.map((item) => (
        <CharacterCard key={item.char_id} item={item}></CharacterCard>
      ))}
    </div>
  );
};

export default CharacterGrid;
