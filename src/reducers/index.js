import { combineReducers } from 'redux'
import chatUI from './ui'
import { chatData, userData } from './data'

const chatApp = combineReducers({
    chatUI,
    chatData,
    userData
})

export default chatApp
