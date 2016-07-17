import { chatAreaUIInit, roomListUIInit, roomFilterInit, modalUIInit } from './initState'

const chatAreaUI = ( state = chatAreaUIInit, action ) => {
    switch ( action.type ) {
        case 'CHANGE_ROOM':
			return {
                ...state,
				currentRoom: action.roomID
			}
        case 'CREATE_ROOM':
            return {
                ...state,
                currentRoom: action.room.roomID
            }
        case 'NEW_MSG':
        default:
            return state
    }
}

const roomListUI = (
    state = { ...roomListUIInit, filter: roomFilterInit },
    action
 ) => {
	switch ( action.type ) {
		case 'CHANGE_FILTER':
			return {
                ...state,
				filter: Object.assign( {},
                    state.filter, action.filter
                )
			}
		case 'CHANGE_ROOM':
			return {
                ...state,
				currentRoom: action.roomID
			}
        case 'CREATE_ROOM':
            return {
                ...state,
                currentRoom: action.room.roomID
            }
		default:
			return state;
	}

}
const modalUI = ( state = modalUIInit, action ) => {
    switch ( action.type ) {
        case 'NEW_ROOM':
            return {
                currentModal:   action.modal
            }
        case 'CREATE_ROOM':
            return modalUIInit
        default:
            return state
    }
}

export {
    chatAreaUI,
    roomListUI,
    modalUI
}
