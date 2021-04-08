import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, changeFilter } from '../actions/index';
import Book from '../components/Book';
import '../styles/BooksList.css';
import CategoryFilter from '../components/CategoryFilter';

export default function BooksList() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const fetchBook = () => (filter === 'All' ? useSelector((state) => state.books)
    : useSelector((state) => state.books).filter((book) => book.category === filter));

  function handleOnRemove(book) {
    dispatch(removeBook(book));
  }

  function handleFilterChange(filter) {
    dispatch(changeFilter(filter));
  }

  return (
    <div className="book-list">
      <CategoryFilter changeFilter={handleFilterChange} />
      {fetchBook().map((book, idx) => (
        <Book book={book} onRemoveBook={handleOnRemove} key={`item${idx + 1}`} />
      ))}
    </div>
  );
}
