import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
    getQuery(e.target.value);
  };

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          value={text}
          onChange={onChange}
          placeholder='Search characters'
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
