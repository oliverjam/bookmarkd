const defaultState = {
  books: [
    {
      title: 'Moby Dicks',
      author: 'The Dick guy',
      url: 'https://s3-eu-west-1.amazonaws.com/react-reader/alice.epub',
      id: 1,
    },
    {
      title: 'Another one',
      author: 'The other guy',
      url: 'https://s3-eu-west-1.amazonaws.com/react-reader/alice.epub',
      id: 2,
    },
    {
      title: 'Third one',
      author: 'The third guy',
      url: 'https://s3-eu-west-1.amazonaws.com/react-reader/alice.epub',
      id: 3,
    },
  ],
  theme: 'light',
  guestUser: {
    books: [
      {
        title: '',
        location: '',
      },
    ],
  },
};

export default defaultState;
