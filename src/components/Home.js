import React from 'react';
import PageLayout from './PageLayout';
import BookRows from './BookRows';
import { Section } from './base/Section';

function Home() {
  return (
    <PageLayout title="Welcome to Bookmarkd 🤓📚">
      <Section>
        <p>
          We aim to provide a free, open source platform to read, and eventually upload books.
          You can browse our library of available books, and once you've opened a book it will be available offline for you to read later.
        </p>
      </Section>
      <BookRows />
    </PageLayout>
  );
}

export default Home;
