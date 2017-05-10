import React from 'react';

import BookGrid from './BookGrid';
import BookRows from './BookRows';

function Home() {
  return (
    <div>
      <h1>Books</h1>
      <BookRows />
      {/* <BookGrid /> */}
    </div>
  );
}

export default Home;
