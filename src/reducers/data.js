import { chatDataInit, defaultRoom } from './initState';

let roomTotal = Object.keys(chatDataInit).length;

const messageData = ( state, action ) => {
    switch ( action.type ) {
        case 'NEW_MSG':
            return {
                user:       action.message.user,
                message:    action.message.message
            }
        default:
            return state
    }
}

const chatData = ( state, action ) => {
    switch ( action.type ) {
        case 'NEW_MSG':
            console.log([
                ...state,
                messageData( undefined, action )
            ])
            return [
                ...state,
                messageData( undefined, action )
            ]
        default:
            return state
    }
}

const roomData = ( state, action ) => {
    switch ( action.type ) {
        case 'NEW_MSG':
            return {
                ...state,
                messages: chatData( state.messages, action )
            }
        case 'CREATE_ROOM':
            return {
                ...action.room,
                messages: []
            }
        default:
            return state
    }
}

const data = ( state = chatDataInit, action ) => {
    let newState = {...state}

    switch ( action.type ) {
        case 'NEW_MSG':
            let id = action.message.roomID
            newState[id] = roomData( state[id], action )
            return newState
        case 'CREATE_ROOM':
            newState['3'] = roomData( {
                roomID: '3'
            }, action )
            return newState
        default:
            return state
    }
}

export default data
