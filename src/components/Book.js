import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function Book({ book, handleRemoveBook }) {
  return (
    <div className="bookPannel">
      <div className="catChapter">
        <span className="book-cat">{ book.category }</span>
        <span className="catChapter-chap">CURRENT CHAPTER</span>
      </div>
      <div className="title-update">
        <div className="left-pannel">
          <div className="title-percentile">
            <div className="title-author">
              <span className="book-title">{ book.title }</span>
              <p className="light-blue">Book By: Author</p>
            </div>
            <div className="book-percentile">
              <div className="progress-bar">
                progress
              </div>
              <div className="completed-percentage">
                <span className="percentage">
                  {book.id}
                  %
                </span>
                <span className="completed">Completed</span>
              </div>
            </div>
          </div>
          <div className="book-links light-blue">
            <span id="first-book-link">Comments</span>
            |
            <button className="book-links light-blue" id="remobe-book-btn" type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
            |
            <span>Edit</span>
          </div>
        </div>
        <div className="with-update-butn">
          <span>Chapter 6</span>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
