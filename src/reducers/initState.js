import { rooms, messages, lastAccessedRoom } from './testdata';

let msgInit = []
let chatData = rooms

messages.map( m =>
	chatData[m.roomID].messages.push({
		user: 		m.user,
		message:	m.message
	})
)

export const chatDataInit = chatData;

export const defaultRoom = lastAccessedRoom;

export const chatAreaUIInit = {
	currentRoom:	lastAccessedRoom,
	searching:	false,
	filter:		''
}

export const roomFilterInit = {
	string:	'',
	status:	'all',
	type:	'all'
}

export const roomListUIInit = {
	currentRoom:	lastAccessedRoom
}

export const modalUIInit = {
	currentModal: ''
}
