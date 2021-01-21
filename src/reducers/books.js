const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [];

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_BOOK:
      return [];
    case REMOVE_BOOK:
      return [];
    default:
      return state;
  }
}

export default booksReducer;
