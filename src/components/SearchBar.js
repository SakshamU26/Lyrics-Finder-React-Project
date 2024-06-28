import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');

  const handleSearch = () => {
    onSearch(artist, title);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Artist" 
        value={artist} 
        onChange={(e) => setArtist(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
