const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [];

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        action.book,
      ];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.book.id);
    default:
      return state;
  }
}

export default booksReducer;
