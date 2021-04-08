import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CategoryFilter.css';

const bookCategories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

export default function CategoryFilter({ changeFilter }) {
  const handleFilterChange = ({ target: { value } }) => {
    changeFilter(value);
  };

  return (
    <div className="category-filter">
      <span>Filter by category</span>
      <select name="categories" onChange={handleFilterChange} defaultValue="All">
        {bookCategories.map((item) => <option value={item} key={`${item}_option`}>{item}</option>)}
      </select>
    </div>
  );
}

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
