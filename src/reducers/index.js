import { combineReducers } from 'redux'
import { chatAreaUI, roomListUI, modalUI } from './ui'
import data from './data'

const chatApp = combineReducers({
    chatAreaUI,
    roomListUI,
    modalUI,
    data
})

export default chatApp
