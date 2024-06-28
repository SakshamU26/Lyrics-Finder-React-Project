import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import LyricsDisplay from './components/LyricsDisplay';
import './App.css';

const App = () => {
  const [lyrics, setLyrics] = useState('');

  const fetchLyrics = async (artist, title) => {
    try {
      const response = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`);
      setLyrics(response.data.lyrics);
    } catch (error) {
      console.error('Error fetching lyrics', error);
      setLyrics('Lyrics not found.');
    }
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={fetchLyrics} />
      <LyricsDisplay lyrics={lyrics} />
    </div>
  );
};

export default App;
