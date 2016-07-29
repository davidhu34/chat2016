import { createStore } from 'redux'
import throttle from 'lodash/throttle'
import { loadState, saveState } from './localStorage'
import chatApp from './reducers';

const supportPromiseForDispatch = ( store ) => {
    const rawDispatch = store.dispatch
    return ( action ) => {
        return ( typeof action.then === 'function' )? (
            action.then( rawDispatch )
        ) : rawDispatch( action )
    }
}

const logDispatch = ( store ) => {
    const rawDispatch = store.dispatch
    return ( !console.group )? (
        rawDispatch( action )
    ) : ( ( action ) => {
        console.group( action.type )
        console.log( '%c prev state', 'color:grey', store.getState() )
        console.log( '%c action', 'color:blue', action )
        const returnValue = rawDispatch( action )
        console.log( '%c next state', 'color:green', store.getState() )
        console.groupEnd( action.type )
        return returnValue
    })
}

const freshStore = () => {
    const store = createStore( chatApp )
    store.dispatch = logDispatch( store )
    store.dispatch = supportPromiseForDispatch( store )
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
