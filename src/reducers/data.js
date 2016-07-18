import { chatDataInit } from './initState';
//let roomTotal = Object.keys(chatDataInit).length;

const messageData = ( state, action ) => {
    switch ( action.type ) {
        case 'NEW_MSG':
            return {
                time: action.time,
                user: action.user,
                message: action.message
            }
        default:
            return state
    }
}

const roomData = ( state, action ) => {
    switch ( action.type ) {
        case 'NEW_MSG':
            return {
                ...state,
                messages: [
                    messageData( null, action ),
                    ...state.messages
                ]
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

const chatData = ( state = chatDataInit, action ) => {
    switch ( action.type ) {
        case 'NEW_MSG':
            return {
                ...state,
                [ action.roomID ]:
                    roomData( state[action.roomID], action )
            }
        case 'NEW_ROOM':
            return {
                ...state,
                [ action.roomID ]:
                    roomData( null, action )
            }
        default:
            return state
    }
}

export default chatData
