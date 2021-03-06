export const createBook = (newBook) => ({
  type: 'CREATE_BOOK',
  payload: newBook,
});

export const removeBook = (book) => ({
  type: 'REMOVE_BOOK',
  payload: book,
});

export const changeFilter = (filter) => ({
  type: 'CHANGE_FILTER',
  payload: filter,
});
