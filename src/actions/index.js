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

export const fetchUsersRequest = () => ({
  type: 'FETCH_USERS_REQUEST',
});

export const fetchUsersSuccess = (users) => ({
  type: 'FETCH_USERS_SUCCESS',
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: 'FETCH_USERS_FAILURE',
  payload: error,
});
