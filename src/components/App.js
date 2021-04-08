import React from 'react';
import BookForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import Header from './Header';

const App = () => (
  <div className="App">
    <Header />
    <BooksList />
    <BookForm />
  </div>
);

export default App;
