// first datafetch
// testdata
import { rooms, messages, lastAccessedRoom } from './testdata';

let msgInit = [];
messages.map( m =>
	rooms[m.roomID].messages.push(m);
);

export const chatDataInit = rooms;
export const defaultRoom = lastAccessedRoom;

export const centralUIInit = {
	searching:	false,
	filter：		'',
	inputTmp:	''
}

export const roomFilterInit = {
	string:	'',
	status:	'all',
	type:	'all',
};
export const leftUIInit = {
	currentRoom:	defaultRoom,
	searching:		false,
	filter:			filterInit
};
