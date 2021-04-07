import React from 'react';
import BookForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

const App = () => (
  <div className="App">
    <BooksList />
    <BookForm />
  </div>
);

export default App;
