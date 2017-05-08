const defaultState = {
  books: [
    {
      title: 'Moby Dicks',
      author: 'The Dick guy',
      slug: 'alice',
      id: 1,
      saved: false,
    },
    {
      title: 'Another one',
      author: 'The other guy',
      slug: 'alice',
      id: 2,
      saved: false,
    },
    {
      title: 'Third one',
      author: 'The third guy',
      slug: 'alice',
      id: 3,
      saved: false,
    },
  ],
  theme: 'light',
  user: {
    books: [],
  },
};

export default defaultState;
