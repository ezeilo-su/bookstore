import React from 'react';
import Header from './Header';
import BookForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import Post from './Post';
import User from './User';

const App = () => (
  <div className="App">
    <Header />
    <BooksList />
    <BookForm />
    <Post />
    <User />
  </div>
);

export default App;
