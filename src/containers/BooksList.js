import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import '../components/App.css';

function BooksList({
  books, removeBook, newCategory, category,
}) {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  const handleCategory = e => {
    newCategory(e.target.value);
  };

  const filteredBooks = category === 'All' ? books : books.filter(book => book.category === category);
  const bookList = filteredBooks.map(book => (
    <Book
      book={book}
      key={book.id}
      handleRemoveBook={handleRemoveBook}
    />
  ));
  return (
    <div>
      <div className="navBar">
        <h1>Bookstore CMS</h1>
        <CategoryFilter category={category} handleCategory={handleCategory} />
      </div>
      <div className="Books-list">
        {bookList}
      </div>
    </div>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
  removeBook: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  newCategory: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  category: state.category,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
  newCategory: category => {
    dispatch(changeFilter(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
