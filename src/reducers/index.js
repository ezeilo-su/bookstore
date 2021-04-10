import { combineReducers } from 'redux';
import bookReducer from './book';
import filterReducer from './filter';
import userReducer from './user';
import counterReducer from './counter';

const rootReducer = combineReducers({
  books: bookReducer,
  filter: filterReducer,
  user: userReducer,
  count: counterReducer,
});

export default rootReducer;
