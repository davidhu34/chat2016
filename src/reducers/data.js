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
            return Object.assign( {}, state, {
                messages: chatData( state.messages, action )
            })
        case 'NEW_ROOM':
            return {
                ...actions.room,
                messages: []
            }
        default:
            return state
    }
}

const data = ( state = chatDataInit, action ) => {
    switch ( action.type ) {
        case 'NEW_MSG':
            let id = action.message.roomID
            let newState = state
            newState[id] = roomData( state[id], action )
            return newState
        case 'NEW_ROOM':
            return {
                ...state,
                roomTotal: roomData( undefined, action )
            }
        default:
            return state
    }
}

export default data