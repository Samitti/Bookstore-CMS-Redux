const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [
  { id: 0, title: 'React', category: 'Learning' },
  { id: 1, title: 'Dune', category: 'Sci-Fi' },
  { id: 2, title: 'Real-Help', category: 'Learning' },
];

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
