import { createStore } from 'redux'
import throttle from 'lodash/throttle'
import { loadState, saveState } from './localStorage'
import chatApp from './reducers';

const supportPromise = ( store ) => ( next ) =>
    ( action ) =>
        ( typeof action.then === 'function' )? (
            action.then( next )
        ) : next( action )

const logger = ( store ) => ( next ) =>
    ( !console.group )? (
        next
    ) : ( ( action ) => {
        console.group( action.type )
        console.log( '%c prev state', 'color:grey', store.getState() )
        console.log( '%c action', 'color:blue', action )
        const returnValue = next( action )
        console.log( '%c next state', 'color:green', store.getState() )
        console.groupEnd( action.type )
        return returnValue
    })

const wrapDispatchMiddleware = ( middlewares, store ) => {
    middlewares.slice().reverse().forEach( middleware =>
        store.dipatch = middleware( store )( store.dispatch )
    )
}


const freshStore = () => {
    const store = createStore( chatApp )
    const middlewares = [ supportPromise, logger ]
    wrapDispatchMiddleware( middlewares, store )
    return store
}

const localStorageStore = () => {
    const persistedState = loadState()
    const lss = createStore(
        chatApp,
        persistedState
    )
    lss.dispatch = logDispatch( lss )
    lss.dispatch = supportPromiseForDispatch( lss )
    lss.subscribe( throttle( () => {
        saveState( lss.getState() )
    }, 1000 ))
    return lss
}

export { freshStore, localStorageStore }
