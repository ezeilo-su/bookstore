import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css';

export default function Book({ book, onRemoveBook }) {
  return (
    <tr>
      <td className="book-id">{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td className="remove-book">
        <button type="button" onClick={() => onRemoveBook(book)}>Remove Book</button>
      </td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.exact(
    {
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    },
  ).isRequired,
  onRemoveBook: PropTypes.func.isRequired,
};
