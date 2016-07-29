import { chatUIInit, roomFilterInit } from './initState'

const chatUI = (
    state = { ...chatUIInit, roomFilter: roomFilterInit },
    action
 ) => {
	switch ( action.type ) {
        case 'NEW_MSG':
            return {
                ...state,
                order: [
                    action.roomID,
                    ...state.order.filter(
                        r => ( r !== action.roomID )
                )]
            }
		case 'CHANGE_FILTER':
			return {
                ...state,
                roomFilter: Object.assign( {},
                    state.roomFilter, action.filter
                )
			}
		case 'CREATE_ROOM':
            return {
                currentFocus: 'CHAT',
//                currentRoom: action.roomID,
                currentModal: '',
                roomFilter: roomFilterInit,
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
/*        case 'CHANGE_ROOM':
			return {
                ...state,
                currentRoom: action.roomID
			}*/
        case 'CHANGE_FOCUS':
            return {
                ...state,
                currentFocus: action.focus
            }
		default:
			return state;
	}

}

export default chatUI

export const getRoomsUI = ( state ) => {
    let ui = state.chatUI
    return {
        filterText: ui.roomFilter.string.toLowerCase(),
        searching:  ( ui.currentFocus === 'ROOM_SEARCH' ),
        order:      ui.order
    }
}
