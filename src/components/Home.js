import React from 'react';
import PageLayout from './PageLayout';
import BookRows from './BookRows';

function Home() {
  return (
    <PageLayout>
      <h1>Books</h1>
      <p>
        <section>Welcome to Bookmarkd 🤓!</section>
        We aim to provide a free, open source platform to read, and eventually upload books.
        You can browse our library of available books, and download these books onto your local machine to peruse later.
      </p>
      <BookRows />
    </PageLayout>
  );
}

export default Home;
