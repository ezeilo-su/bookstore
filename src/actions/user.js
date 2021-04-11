const axios = require('axios');

const fetchUsersRequest = () => ({
  type: 'FETCH_USERS_REQUEST',
});

const fetchUsersSuccess = (users) => ({
  type: 'FETCH_USERS_SUCCESS',
  payload: users,
});

const fetchUsersFailure = (error) => ({
  type: 'FETCH_USERS_FAILURE',
  payload: error,
});

const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersRequest);
  try {
    const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch(fetchUsersSuccess(users));
  } catch (err) {
    dispatch(fetchUsersFailure(err.message));
  }
};

export default fetchUsers;
