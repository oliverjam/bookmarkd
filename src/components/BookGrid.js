import React from 'react';
import uuid from 'uuid/v4';

import Grid from './utilities/Grid';
import Book from './Book';

const books = [
  {
    title: 'Alice in Wonderland',
    author: 'Alice Guy',
    slug: 'alice',
  },
  {
    title: 'Another one',
    author: 'The other guy',
    slug: 'another',
  },
  {
    title: 'Third one',
    author: 'The third guy',
    slug: 'third',
  },
];

function BookGrid() {
  return (
    <Grid>
      {books.map(book => <li key={uuid()}><Book details={book} /></li>)}
    </Grid>
  );
}

export default BookGrid;
