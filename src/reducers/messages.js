import { combineReducers } from 'Redux';
import { rooms, messages, defaultRoom } from './testdata.js';

let rooomsInit = rooms;
let messagesInit = messages;

Object.assign( roomsInit, rooms, {
	selected: false;
});
roomsInit[defaultRoom].selected = true;

messages.map( m => {
	if ( m.roomID === defaultRoom )
		messagesInit.push();
});

const messages = ( state = messagesInit, action ) => {
	switch ( action.type ) {
		case 'NEW_MSG':
			return [
				...state,
				message( undefined, action )
			];
		case 'NEW_ROOM':
			return [
				...state,
				action
			]
		case 'CHANGE_ROOM':


	}
}
const room = ( state, action ) => {
	switch ( action.type ) {
		case 'NEW_ROOM':
			return action.room;
		case 'CHANGE_ROOM':
			return ( action.roomID === state.roomID )?
				Object.assign( {}, state, { selected: true } ):
				state;
		default:
			return state;
	}
}

const roomData = ( state = roomsInit, action ) => {
	switch ( action.type ) {
		case 'NEW_ROOM':
			return [
				...state,
				room( undefined, action );
			];
		case 'CHANGE_ROOM':
			return state.map( s => {
				room( s, action );
			});
		default:
			return state;
	}
}

let filterInit = {
	string:	'',
	status:	'all',
	type:	'all',
};
let leftUIInit = {
	currentRoom:	defaultRoom,
	searching:		false,
	filter:			filterInit
};


const editFilter = ( filter, entry ) =>
	Object.assign( {}, filter,
		entry
	);

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

const chatApp = combineReducers({
	centralUI,
	leftUI,
	roomData
});

export default chatApp;
