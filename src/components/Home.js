import React from 'react';
import PageLayout from './PageLayout';
import BookRows from './BookRows';

function Home() {
  return (
    <PageLayout>
      <h1>Books</h1>
      <BookRows />
    </PageLayout>
  );
}

export default Home;
