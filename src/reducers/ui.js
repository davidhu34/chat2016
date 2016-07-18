import {UIInit, roomFilterInit } from './initState'

const UI = (
    state = { ...UIInit, filter: roomFilterInit },
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
                currentRoom: action.roomID,
                currnetModal: '',
                order: [
                    action.roomID,
                    ...state.order
                ]
            }
        case 'NEW_ROOM':
            return {
                ...state,
                currentModal: action.modal
            }
        case 'SEARCH_ROOM_DISABLE':
            return {
                ...state,
                searchingRoom: false
            }
        case 'SEARCH_ROOM_ENABLE':
            return {
                ...state,
                searchingRoom: true
            }
		default:
			return state;
	}

}

export default chatUI
