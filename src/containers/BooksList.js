import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

function BooksList({ books, removeBook }) {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  const bookList = books.map(book => (
    <Book
      book={book}
      key={book.id}
      handleRemoveBook={handleRemoveBook}
    />
  ));
  return (
    <table className="Books-list">
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Book Title</th>
          <th>Book Category</th>
        </tr>
      </thead>
      <tbody>
        {bookList}
      </tbody>
    </table>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
