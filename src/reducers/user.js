import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from '../actions/index';

const initialState = {
  loading: false,
  users: [],
  error: '',
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_USERS_REQUEST':
      return {
        ...state,
        loading: true,
      };

    case 'FETCH_USERS_SUCCESS':
      return {
        loading: false,
        users: payload,
        error: '',
      };

    case 'FETCH_USER_FAILURE':
      return {
        loading: false,
        users: '',
        error: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
