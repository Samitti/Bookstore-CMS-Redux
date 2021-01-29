import React from 'react';
import PropTypes from 'prop-types';
import categoryOptions from '../containers/constants';
import './App.css';

function CategoryFilter({ category, handleCategory }) {
  const newCategoryOptions = (['All']).concat(categoryOptions);
  const options = newCategoryOptions.map(cat => (
    <option
      value={cat}
      key={cat}
    >
      {cat}
    </option>
  ));

  return (
    <div>
      <label htmlFor="category" id="catLabel">
        BOOKS
        {' '}
        <span>CATEGORIES</span>
        <select id="category-filter" value={category} onChange={handleCategory}>
          {options}
        </select>
      </label>
    </div>
  );
}

CategoryFilter.propTypes = {
  category: PropTypes.string.isRequired,
  handleCategory: PropTypes.func.isRequired,
};

export default CategoryFilter;
