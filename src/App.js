import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Loader from './components/Loader';
import { fetchMovies } from './components/Api';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    setLoading(true);
    setError('');
    try {
      const results = await fetchMovies(query);
      setMovies(results);
    } catch (err) {
      setError('Failed to fetch movies.');
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <h1>Movie Search App</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <p className="error">{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
