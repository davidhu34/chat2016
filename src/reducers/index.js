import { combineReducers } from 'redux'
import chatUI from './ui'
import chatData from './data'

const chatApp = combineReducers({
    chatUI,
    chatData
})

export default chatApp
