import React from 'react';
import PageHeader from './PageHeader';
import BookGrid from './BookGrid';

function Home() {
  return (
    <div>
      <PageHeader />
      <h1>Books</h1>
      <BookGrid />
    </div>
  );
}

export default Home;
