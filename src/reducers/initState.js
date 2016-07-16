// first datafetch
// testdata
import { rooms, messages, lastAccessedRoom } from './testdata';

let msgInit = [];
let chatData = rooms
messages.map( m =>
	chatData[m.roomID].messages.push({
		user: 		m.user,
		message:	m.message
	})
);

export const chatDataInit = chatData;
export const defaultRoom = lastAccessedRoom;

export const chatAreaUIInit = {
	currentRoom:	defaultRoom,
	searching:	false,
	filter:		'',
	inputTmp:	''
}

export const roomFilterInit = {
	string:	'',
	status:	'all',
	type:	'all',
};
export const roomListInit = {
	currentRoom:	defaultRoom,
	searching:		false,
	filter:			roomFilterInit
};
