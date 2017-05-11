import React from 'react';
import PageHeader from './PageHeader';
import BookGrid from './BookGrid';
import BookRows from './BookRows';

function Home() {
  return (
    <div>
      <PageHeader />
      <h1>Books</h1>
      <BookRows />
      {/* <BookGrid /> */}
    </div>
  );
}

export default Home;
