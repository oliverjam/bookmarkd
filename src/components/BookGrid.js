import React from 'react';
import styled from 'styled-components';

import Grid from './utilities/Grid';
import Book from './Book';

const books = [
  {
    title: 'Moby Dicks',
    author: 'The Dick guy',
    url: 'https://fakeurl.com/mobydick.epub',
  },
  {
    title: 'Another one',
    author: 'The other guy',
    url: 'https://fakeurl.com/other-one.epub',
  },
  {
    title: 'Third one',
    author: 'The third guy',
    url: 'https://fakeurl.com/third.epub',
  },
];

function BookGrid() {
  return (
    <Grid>
      {books.map(book => <li><Book details={book} /></li>)}
    </Grid>
  );
}

export default BookGrid;
