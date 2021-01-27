import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="appConatiner">
        <BooksList />
        <BooksForm />
      </div>
    </div>
  );
}

export default App;
