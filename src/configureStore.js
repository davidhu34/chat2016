import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import throttle from 'lodash/throttle'

import { loadState, saveState } from './localStorage'
import connection from './connection/index'
import chatApp from './reducers'
/*
const thunk ( store ) => ( next ) => ( action ) =>
    typeof action === 'function'
        ? action( store.dispatch )
        : next( action )
*/


const freshStore = () => {
    const middlewares = [ promise ]
    //const middlewares = [ thunk ]
    middlewares.push( createLogger() )

    return createStore(
        chatApp,
        applyMiddleware( ...middlewares )
    )
}

const localStorageStore = () => {
    const middlewares = [ promise ]// || [ thunk ]
    //middlewares.push( connection )
    middlewares.push( createLogger() )
    //middlewares.push( socketConnection )
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
