import { createStore } from 'redux'
import throttle from 'lodash/throttle'
import { loadState, saveState } from './localStorage'
import chatApp from './reducers/index';

const freshStore = () => {
    return createStore( chatApp )
}


const localStorageStore = () => {
    const persistedState = loadState()
    const lss = createStore(
        chatApp,
        persistedState
    )
    lss.subscribe( throttle( () => {
        saveState( lss.getState() )
    }, 1000 ))
    return lss
}

export { freshStore, localStorageStore }
