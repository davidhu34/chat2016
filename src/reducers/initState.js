import { rms, msgs } from './testdata';
console.log(msgs)
let chatData = {}
let msgData = {}

msgs.map( m => { msgData[m.msgID] = m })

rms.map( r => {
	chatData[r.roomID] = {
		roomID: r.roomID,
		name: r.name,
		messages: r.messages.map( id => msgData[id] ),
		users: r.users.filter( u => ( u !== 'david') )
	}
})
console.log(chatData);

export const chatDataInit = chatData;

export const roomFilterInit = {
	string:	'',
	status:	'all',
	type:	'all'
}

export const chatUIInit = {
	currentRoom: '2',
	currentModal: '',
	searchingRoom: false,
	order: [ '2', '1', '3' ]
}
