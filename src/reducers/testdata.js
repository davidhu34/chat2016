import moment from 'moment'

export const msgs = [
	{
		msgID:	'8',
		time:	moment().subtract( 12, 'minutes'),
		roomID: '0',
		user: 'luke',
		message: 'hey what\'s up'
	},
	{
		msgID:	'0',
		time:	moment().subtract( 15, 'minutes'),
		roomID: '0',
		user: 'david',
		message: 'hi, luke'
	},
	{
		msgID:	'1',
		time:	moment().subtract( 7, 'minutes'),
		roomID: '1',
		user: 'han',
		message: 'u ugly af'
	},
	{
		msgID:	'2',
		time:	moment().subtract( 19, 'minutes'),
		roomID: '1',
		user: 'david',
		message: 'what is it?'
	},
	{
		msgID:	'3',
		time:	moment().subtract( 20, 'minutes'),
		roomID: '1',
		user: 'han',
		message: 'yo david'
	},
	{
		msgID:	'4',
		time:	moment().subtract( 1, 'minutes'),
		roomID: '2',
		user: 'david',
		message: 'so dumb'
	},
	{
		msgID:	'5',
		time:	moment().subtract( 58, 'minutes'),
		roomID: '2',
		user: 'luke',
		message: 'much stupid'
	},
	{
		msgID:	'6',
		time:	moment().subtract( 59, 'minutes'),
		roomID: '2',
		user: 'david',
		message: 'go away'
	},
	{
		msgID:	'7',
		time:	moment().subtract( 60, 'minutes'),
		roomID: '2',
		user: 'han',
		message: 'hey guys'
	}
];

export const rms = [
	{
		roomID: '2',
		name: 'rebels!',
		users: [ 'david', 'han', 'luke' ],
		messages: [ '4', '5', '6', '7' ]
	},
	{
		roomID: '1',
		name: '',
		users: [ 'david', 'han' ],
		messages: [ '1', '2', '3' ]
	},
	{
		roomID: '0',
		name: '',
		users: [ 'david', 'luke' ],
		messages: [ '8', '0' ]
	}
]
