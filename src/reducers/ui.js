import { chatUIInit, roomFilterInit } from './initState'

const chatUI = (
    state = { ...chatUIInit, roomFilter: roomFilterInit },
    action
 ) => {
	switch ( action.type ) {
        case 'INIT':
            return {
                ...state,
                order: ['57a0922af36d283aff2c5921',
            	'57a0950af36d283aff2c5996',
            	'57a0955af36d283aff2c59a7']
            }
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
    const ui = state.chatUI
    return {
        filterText: ui.roomFilter.string.toLowerCase(),
        searching:  ( ui.currentFocus === 'ROOM_SEARCH' ),
        order:      ui.order
    }
}
