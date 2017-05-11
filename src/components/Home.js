import React from 'react';
import PageLayout from './PageLayout';
import BookRows from './BookRows';

function Home() {
  return (
    <PageLayout title="Books">
      <BookRows />
    </PageLayout>
  );
}

export default Home;
