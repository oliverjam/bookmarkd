import React from 'react';

import {
  SearchBar,
  SearchLabel,
  SearchInput,
  // MenuButton,
} from './base/SearchBar';
// import IconMenu from './icons/IconMenu';

function Search({ value, handleChange }) {
  return (
    <SearchBar>
      {/* <MenuButton>
        <IconMenu description="Open menu" width="24" height="24" />
      </MenuButton> */}
      <SearchLabel htmlFor="search">
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
