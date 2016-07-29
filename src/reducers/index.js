import { combineReducers } from 'redux'
import chatUI, {
    getRoomsUI } from './ui'
import { chatData, userData,
    getUnsentMsg as getUM,
    getChatAreaTitle as getCAT,
    getChatMessages as getCM,
    getRoomsData } from './data'

const chatApp = combineReducers({
    chatUI,
    chatData,
    userData
})

export default chatApp

export const getUnsentMsg = ( state, id ) =>
    getUM( state, id )

export const getChatAreaTitle = ( state, id ) =>
    getCAT( state, id )

export const getRooms = ( state, currentRoom ) =>
    getRoomsData( state, getRoomsUI( state ), currentRoom )

export const getChatMessages = ( state, currentRoom ) =>
    getCM( state, currentRoom )
