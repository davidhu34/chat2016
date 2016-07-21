import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle'

import { loadState, saveState } from './localStorage'
import chatApp from './reducers/index';
import App from './components/App';

const persistedState = loadState()
const store = createStore(
    chatApp,
    persistedState
)
store.subscribe( throttle( () => {
    saveState( store.getState() )
}))

render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
