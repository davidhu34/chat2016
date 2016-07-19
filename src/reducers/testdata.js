import moment from 'moment'

export const msgs = [
	{
		msgID:	'8',
		time:	moment().subtract( 12, 'minutes'),
		roomID: '3',
		userID: '33',
		message: 'hey what\'s up'
	},
	{
		msgID:	'0',
		time:	moment().subtract( 15, 'minutes'),
		roomID: '3',
		userID: '34',
		message: 'hi, luke'
	},
	{
		msgID:	'1',
		time:	moment().subtract( 7, 'minutes'),
		roomID: '1',
		userID: '31',
		message: 'u ugly af'
	},
	{
		msgID:	'2',
		time:	moment().subtract( 19, 'minutes'),
		roomID: '1',
		userID: '34',
		message: 'what is it?'
	},
	{
		msgID:	'3',
		time:	moment().subtract( 20, 'minutes'),
		roomID: '1',
		userID: '31',
		message: 'yo david'
	},
	{
		msgID:	'4',
		time:	moment().subtract( 1, 'minutes'),
		roomID: '2',
		userID: '34',
		message: 'so dumb'
	},
	{
		msgID:	'5',
		time:	moment().subtract( 58, 'minutes'),
		roomID: '2',
		userID: '33',
		message: 'much stupid'
	},
	{
		msgID:	'6',
		time:	moment().subtract( 59, 'minutes'),
		roomID: '2',
		userID: '34',
		message: 'go away'
	},
	{
		msgID:	'7',
		time:	moment().subtract( 60, 'minutes'),
		roomID: '2',
		userID: '31',
		message: 'hey guys'
	}
];

export const rms = [
	{
		roomID: '2',
		name: 'rebels!',
		users: [ '34', '31', '33' ],
		messages: [ '4', '5', '6', '7' ]
	},
	{
		roomID: '1',
		name: '',
		users: [ '34', '31' ],
		messages: [ '1', '2', '3' ]
	},
	{
		roomID: '3',
		name: '',
		users: [ '34', '33' ],
		messages: [ '8', '0' ]
	}
]

export const usrs = [
	{
		userID: '34',
		name: 'david',
		rooms: [ 1, 2, 3 ]
	},
	{
		userID: '33',
		name: 'luke',
		rooms: [ 2, 3 ]
	},
	{
		userID: '31',
		name: 'han',
		rooms: [ 1, 2 ]
	},
	{
		userID: '30',
		name: 'leia',
		rooms: []
	}
]
