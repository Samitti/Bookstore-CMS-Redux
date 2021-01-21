const BookForm = () => {
  const catagory = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div className="bookForm">
      <p>Book Title</p>
      <input />

      <p>Book Catagory</p>
      <select>
        {
          catagory.map(opt => (
            <option value={opt} key={opt}>{opt}</option>
          ))
        }
      </select>

      <input type="submit" value="Submit" />
    </div>

  );
};

export default BookForm;
