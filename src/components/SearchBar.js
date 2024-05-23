// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ search, onSearchChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a coin"
        value={search}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBar;
