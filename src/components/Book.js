import React from 'react';
import PropTypes from 'prop-types';
import '../styles/book.css';

export default function Book({ book, handleOnRemove }) {
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>
        <button type="button" onClick={() => handleOnRemove(book)}>Remove Book</button>
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
  handleOnRemove: PropTypes.func.isRequired,
};
