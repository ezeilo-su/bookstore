import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions/index';
import '../styles/bookform.css';

const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

export default function BooksForm() {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    title: '',
    category: '',
  });

  function handleOnChange({ target: { name, value } }) {
    if (name === 'title') {
      setState((prevState) => ({ ...prevState, title: value }));
    } else {
      setState((prevState) => ({ ...prevState, category: value }));
    }
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    if (!(state.title && state.category)) {
      return;
    }
    const book = {
      id: Math.floor(Math.random() * 100),
      title: state.title,
      category: state.category,
    };
    dispatch(createBook(book));
    document.getElementById('new-book-form').reset();
    setState((prevState) => ({ ...prevState, category: '', title: '' }));
  }

  return (
    <div>
      <h1>Add New Book</h1>
      <form onSubmit={handleOnSubmit} id="new-book-form">
        <input value={state.title} type="text" name="title" onChange={handleOnChange} placeholder="Book Title" />
        <select name="categories" onChange={handleOnChange}>
          <option selected disabled>Select a category</option>
          {bookCategories.map((item) => <option value={item} key={`${item}_option`}>{item}</option>)}
        </select>
        <button className="btn btn-primary" type="submit">Add Book</button>
      </form>
    </div>
  );
}
