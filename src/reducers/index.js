import { combineReducers } from 'redux';
import bookReducer from './book';
import filterReducer from './filter';
import userReducer from './user';

const rootReducer = combineReducers({
  books: bookReducer,
  filter: filterReducer,
  user: userReducer,
});

export default rootReducer;
