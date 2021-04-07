const initialBookState = [
  {
    id: Math.floor(Math.random() * 100),
    title: 'Trillion Dollar Coach',
    category: 'Eric Schmidt',
  },
  {
    id: Math.floor(Math.random() * 100),
    title: 'Learn Enough JavaScript',
    category: 'Michael Hartl',
  },
  {
    id: Math.floor(Math.random() * 100),
    title: 'JavaScript The Definitive Guide',
    category: 'David Flanagan',
  },
  {
    id: Math.floor(Math.random() * 100),
    title: 'Learn Enough Ruby on Rails',
    category: 'Michael Hartl',
  },
];

const bookReducer = (state = initialBookState, { type, payload }) => {
  switch (type) {
    case 'CREATE_BOOK':
      return [...state, payload];
    case 'REMOVE_BOOK': {
      return [...state].filter((book) => book.id !== payload.id);
    }
    default:
      return state;
  }
};

export default bookReducer;
