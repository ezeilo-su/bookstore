import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css';

export default function Book({ book, onRemoveBook }) {
  return (
    <div className="book-card">
      <div className="book-details">
        <h4 className="category-heading">{book.category}</h4>
        <h2 className="book-title">{book.title}</h2>
        <p className="book-author">Author</p>
        <div className="comment-remove-edit">
          <p className="comments">Comment</p>
          <button className="remove-btn" type="button" onClick={() => onRemoveBook(book)}>Remove</button>
          <p className="edit">Edit</p>
        </div>
      </div>
      <div className="progress-stat">
        <div className="progress" />
        <div className="completed">
          <h2>
            {`${book.id}%`}
          </h2>
          <p>Completed</p>
        </div>
      </div>
      <div className="chapter-container ">
        <h4 className="chapter">CURRENT CHAPTER</h4>
        <p className="chapter-title">CHAPTER 10: &quot;The story of life&quot;</p>
        <button type="submit" className="update-progress">UPDATE PROGRESS</button>
      </div>
    </div>
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
