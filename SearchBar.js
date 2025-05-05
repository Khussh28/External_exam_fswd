import React from 'react';

function SearchBar({ setSearch }) {
  return (
    <input placeholder="Search events..." onChange={(e) => setSearch(e.target.value)} />
  );
}

export default SearchBar;
