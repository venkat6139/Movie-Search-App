import React, { useState } from 'react';
import './index.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      onSearch(query);
      //setQuery('');
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a movie..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
