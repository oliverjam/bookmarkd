import React from 'react';
import uuid from 'uuid/v4';

const SearchResults = ({ books }) => (
  <ul>
    {books.map(book => <li key={uuid()}>{book.title}</li>)}
  </ul>
);

export default SearchResults;
