import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions/index';
import Book from '../components/Book';
import '../styles/booklist.css';

function BooksList({ books, onRemoveBook }) {
  function handleOnRemove(book) {
    onRemoveBook(book);
  }

  return (
    <div className="book-list">
      <h1>Book Store</h1>
      <table>
        <thead>
          <tr>
            <th>Book Id</th>
            <th>Title</th>
            <th colSpan="2">Category</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, idx) => (
            <Book book={book} onRemoveBook={handleOnRemove} key={`item${idx + 1}`} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = {
  onRemoveBook: removeBook,
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemoveBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
