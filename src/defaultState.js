const defaultState = {
  books: [
    {
      title: 'David Copperfield',
      author: 'Alice author',
      slug: 'david-copperfield',
      id: 1,
    },
    {
      title: 'Peter Pan',
      author: 'Peter author',
      slug: 'peter-pan',
      id: 2,
    },
    {
      title: 'Dracula',
      author: 'Dracula',
      slug: 'dracula',
      id: 3,
    },
  ],
  theme: 'light',
  user: {
    books: [],
  },
};

export default defaultState;
