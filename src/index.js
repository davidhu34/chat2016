import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import { freshStore, localStorageStore } from './configureStore'
import App from './components/App'

const store = freshStore()
//const store = localStorageStore()

render(
  <Provider store={store} >
    <Router history={ browserHistory }>
        <Route path="/(:roomID)" component={ App } />
    </Router>
  </Provider>,
  document.getElementById('root')
).then(()=>{
store.dispatch({type:'yoyo'})
})
