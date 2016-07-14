import { centralUIInit, leftUIInit, roomFilterInit } from './initState'

const centralUI = ( state = centralUIInit, action) => {
    case 'TOGGLE_SEARCH_MSG':
        return Object.assign( {}, state,
            { searching: !state.searching }
        );
    case 'FILTER_MSG':
        return Object.assign( {}, state,
            { filter: action.filter }
        );
    case 'CHANGE_ROOM':
        return Object.assign( {}, state,
            { inputTmp: action.inputTmp }
        );
    case 'NEW_ROOM':
    case 'NEW_MSG':
        return centralUIInit;

    default:
        return state;
}

const editFilter = ( filter, entry ) =>
	Object.assign( {}, filter, entry );

const leftUI = ( state = leftUIInit, action ) => {
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

export default ({
    centralUI,
    leftUI
})
