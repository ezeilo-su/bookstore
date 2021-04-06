import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BookForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import { createBook, removeBook } from '../actions/index';

const App = ({ book, onCreateBook, onRemoveBook }) => (
  <div className="App">
    <BookForm handleOnCreateBook={onCreateBook} />
    <BooksList booksList={book.bookList} handleOnRemoveBook={onRemoveBook} />
  </div>
);

const mapStateToProps = (state) => ({
  book: state.book,
});

const mapDispatchToProps = {
  onCreateBook: createBook,
  onRemoveBook: removeBook,
};

App.propTypes = {
  book: PropTypes.func.isRequired,
  onCreateBook: PropTypes.func.isRequired,
  onRemoveBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
