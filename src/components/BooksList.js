import Book from './Book';

const BooksList = () => {
  <div className="booksList">
    <tr>
      <td>{Book.ID}</td>
      <td>{Book.title}</td>
      <td>{Book.catagory}</td>
    </tr>
  </div>;
};

export default BooksList;
