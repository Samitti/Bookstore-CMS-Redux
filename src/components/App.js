import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div className="App">
      <h1>Book Store CMS</h1>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
