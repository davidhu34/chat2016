import { rms, msgs } from './testdata';
console.log(msgs)
let chatData = {}

rms.map( r => {
	chatData[r.roomID.toString()] = {
		...r,
		messages: [],
		users: r.users.filter( u => ( u !== 'david') )
	}
})

console.log(chatData)
msgs.map( m => {
	console.log(m.roomID)
	console.log(chatData[m.roomID.toString()])
	chatData['0'].messages
		.unshift( m )
})

export const chatDataInit = chatData;

export const roomFilterInit = {
	string:	'',
	status:	'all',
	type:	'all'
}

export const UIInit = {
	currentRoom: '2',
	currentModal: '',
	searchingRoom: false,
	order: [ '2', '1', '0' ]
}
