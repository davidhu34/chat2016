import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import throttle from 'lodash/throttle'

import { loadState, saveState } from './localStorage'
import chatApp from './reducers';

const freshStore = () => {
    const middlewares = [ promise ]
    middlewares.push( createLogger() )
    return createStore(
        chatApp,
        applyMiddleware( ...middlewares )
    )
}

const localStorageStore = () => {
    const middlewares = [ promise ]
    middlewares.push( createLogger() )
    const persistedState = loadState()
    const lss = createStore(
        chatApp,
        persistedState,
        applyMiddleware( ...middlewares )
    )
    lss.subscribe( throttle( () => {
        saveState( lss.getState() )
    }, 1000 ))
    return lss
}

export { freshStore, localStorageStore }
