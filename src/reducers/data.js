import { chatDataInit, userDataInit } from './initState';
//let roomTotal = Object.keys(chatDataInit).length;
console.log(userDataInit);
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
                unsentMsg: '',
                messages: [
                    messageData( null, action ),
                    ...state.messages
                ]
            }
        case 'UPDATE_INPUT':
            return {
                ...state,
                unsentMsg: action.val
            }
        case 'CREATE_ROOM':
            return {
                roomID: action.roomID,
                name: action.name,
                users: action.users
                    .filter( u => ( u !== '34' ) ),
                messages: [],
                unsentMsg: ''
            }
        default:
            return state
    }
}

const chatData = ( state = chatDataInit, action ) => {
    switch ( action.type ) {
        case 'NEW_MSG':
        case 'UPDATE_INPUT':
            return {
                ...state,
                [ action.roomID ]:
                    roomData( state[action.roomID], action )
            }
        case 'CREATE_ROOM':
            return {
                ...state,
                [ action.roomID ]: roomData( null, action )
            }
        default:
            return state
    }
}

const userData = ( state = userDataInit, action ) => {
    switch ( action.type ) {
        default:
            return state
    }
}

export { chatData, userData }
