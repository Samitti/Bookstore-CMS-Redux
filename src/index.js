import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import App from './components/App';
import './index.css';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 100),
      title: 'The UFOs',
      category: 'Sci-Fi',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'The Origin of Mankind',
      category: 'Geography',
    },
  ],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store} className="mainCont">
    <App />
  </Provider>,
  document.getElementById('root'),
);
