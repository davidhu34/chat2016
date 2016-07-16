import { chatAreaUIInit, roomListUIInit, roomFilterInit } from './initState'

const chatAreaUI = ( state = chatAreaUIInit, action ) => {
    switch ( action.type ) {
        case 'TOGGLE_SEARCH_MSG':
            return Object.assign( {}, state,
                { searching: !state.searching }
            );
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
		case 'TOGGLE_SEARCH_ROOM':
			return Object.assign( {}, state,
				{ searching: !state.searching }
			);
		case 'CHANGE_FILTER':
			return Object.assign( {}, state,
				editFilter( state.filter, action.filter )
			);
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
