import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { freshStore, localStorageStore } from './configureStore'
import App from './components/App';

const store = freshStore()
//const store = localStorageStore()

render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
