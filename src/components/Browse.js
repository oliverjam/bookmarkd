import React from 'react';
import PageLayout from './PageLayout';
import BookRows from './BookRows';

function Browse() {
  return (
    <PageLayout>
      <h1>Browse all books</h1>
      <BookRows />
    </PageLayout>
  );
}

export default Browse;
