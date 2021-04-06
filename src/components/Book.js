import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ book, handleOnRemove }) {
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>
        {book.category}
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
