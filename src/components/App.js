import React from 'react';
import Header from './Header';
import BookForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import Post from './Post';

const App = () => (
  <div className="App">
    <Header />
    <BooksList />
    <BookForm />
    <Post />
  </div>
);

export default App;
