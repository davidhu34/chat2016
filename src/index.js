import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import chatApp from './reducers/index';

import App from './components/App';

let store = createStore(chatApp);

render(
  <Provider store={store} > 
    <App />
  </Provider>,
  document.getElementById('root')
);
