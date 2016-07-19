import { rms, msgs, usrs } from './testdata';

let chatData = {}
let msgData = {}
let userData = {}

msgs.map( m => { msgData[m.msgID] = m } )
usrs.map( u => { userData[u.userID] = u } )

rms.map( r => {
	chatData[r.roomID] = {
		roomID: r.roomID,
		name: r.name,
		messages: r.messages.map( id => msgData[id] ),
		users: r.users.filter( u => ( u !== 'david') ),
		unsentMsg: ''
	}
})

export const chatDataInit = chatData;

export const roomFilterInit = {
	string:	'',
	status:	'ALL',
}

export const chatUIInit = {
	currentFocus: 'CHAT',
	currentRoom: '2',
	currentModal: '',
	searchingRoom: false,
	order: [ '2', '1', '3' ]
}

export const userDataInit = userData
