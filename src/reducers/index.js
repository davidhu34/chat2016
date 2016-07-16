import { combineReducers } from 'redux'
import { chatAreaUI, roomListUI } from './ui'
import data from './data'

const chatApp = combineReducers({
    chatAreaUI,
    roomListUI,
    data
})

export default chatApp
