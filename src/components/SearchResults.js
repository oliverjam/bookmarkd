import React from 'react';
import uuid from 'uuid/v4';
import { Link } from 'react-router-dom';

import { SearchList, SearchResult } from './base/SearchBar';

const SearchResults = ({ books }) => (
  <SearchList>
    {books.map(book => (
      <SearchResult key={uuid()}>
        <Link to={`/reader/${book.slug}`}>{book.title}</Link>
      </SearchResult>
    ))}
  </SearchList>
);

export default SearchResults;
