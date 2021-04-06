import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import '../styles/booklist.css';

export default function BooksList({ booksList, handleOnRemoveBook }) {
  return (
    <div>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Book Id</th>
            <th>Title</th>
            <th colSpan="2">Category</th>
          </tr>
        </thead>
        <tbody>
          {booksList.map((book) => (
            <Book book={book} handleOnRemove={handleOnRemoveBook} key={`item${book + 1}`} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

BooksList.propTypes = {
  booksList: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleOnRemoveBook: PropTypes.func.isRequired,
};
