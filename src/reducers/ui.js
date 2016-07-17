import { chatAreaUIInit, roomListUIInit, roomFilterInit } from './initState'

const chatAreaUI = ( state = chatAreaUIInit, action ) => {
    switch ( action.type ) {
        case 'FILTER_MSG':
            return Object.assign( {}, state,
                { filter: action.filter }
            );
        case 'CHANGE_ROOM':
            return Object.assign( {}, state, {
                currentRoom:    action.roomID
            });
        case 'NEW_ROOM':
        case 'NEW_MSG':
            return chatAreaUIInit;

        default:
            return state;
    }
}

const editFilter = ( filter, entry ) =>
	Object.assign( {}, filter, entry );

const roomListUI = (
    state = { ...roomListUIInit, filter: roomFilterInit },
    action
 ) => {
	switch ( action.type ) {
		case 'CHANGE_FILTER':
			return Object.assign( {}, state, {
				filter: editFilter( state.filter, action.filter )
			});
		case 'CHANGE_ROOM':
			return Object.assign( {}, state,
				{ currentRoom: action.roomID }
			);
		default:
			return state;
	}
}

export {
    chatAreaUI,
    roomListUI
}
