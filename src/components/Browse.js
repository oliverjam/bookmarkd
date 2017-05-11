import React from 'react';
import PageLayout from './PageLayout';
import BookRows from './BookRows';

function Browse() {
  return (
    <PageLayout title="All the books">
      <BookRows />
    </PageLayout>
  );
}

export default Browse;
