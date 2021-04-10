import React from 'react';
import Header from './Header';
import BookForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import Post from './Post';
import User from './User';
import Counter from './Counter';

const App = () => (
  <div className="App">
    <Header />
    <Counter />
    <BooksList />
    <BookForm />
    <Post />
    <User />
  </div>
);

export default App;
