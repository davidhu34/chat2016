import { combineReducers } from 'redux'
import { centralUI, leftUI } from './ui'
import { data } from './data'

const chatApp = combineReducers({
    centralUI,
    leftUI,
    data
})

export default chatApp
