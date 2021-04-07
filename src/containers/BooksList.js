import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../actions/index';
import Book from '../components/Book';
import '../styles/booklist.css';

export default function BooksList() {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books.bookList);

  function handleOnRemove(book) {
    dispatch(removeBook(book));
  }

  return (
    <div className="book-list">
      <table>
        <thead>
          <tr>
            <th>Book Id</th>
            <th>Title</th>
            <th colSpan="2">Category</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((book, idx) => (
            <Book book={book} onRemoveBook={handleOnRemove} key={`item${idx + 1}`} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

