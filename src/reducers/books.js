const initialBookState = [
  {
    id: Math.floor(Math.random() * 100),
    title: 'A Game of Thrones',
    category: 'Action',
  },
  {
    id: Math.floor(Math.random() * 100),
    title: 'Nineteen Eighty-Four',
    category: 'Sci-Fi',
  },
  {
    id: Math.floor(Math.random() * 100),
    title: 'JavaScript The Definitive Guide',
    category: 'Learning',
  },
  {
    id: Math.floor(Math.random() * 100),
    title: 'Harry Potter',
    category: 'Action',
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
