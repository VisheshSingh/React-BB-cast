import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/Search';

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await fetch(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      const items = await result.json();
      setItems(items);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
