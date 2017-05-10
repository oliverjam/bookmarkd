import React from 'react';

import {
  SearchBar,
  SearchLabel,
  SearchInput,
  MenuButton,
} from './base/SearchBar';

function Search({ value, handleChange }) {
  return (
    <SearchBar>
      <MenuButton>☰</MenuButton>
      <SearchLabel for="search">
        Search for books
      </SearchLabel>
      <SearchInput
        id="search"
        value={value}
        onChange={handleChange}
        placeholder="Search for books"
        required
      />
    </SearchBar>
  );
}

export default Search;
