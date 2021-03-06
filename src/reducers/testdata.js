import moment from 'moment'

export const msgs = [
	{
		msgID:	'8',//57a9abe5f36d2840aa65debb
		time:	moment().subtract( 12, 'minutes'),
		roomID: '3',
		userID: '33',
		message: 'hey what\'s up'
	},
	{
		msgID:	'0',//57a9ac66f36d2840aa65dec7
		time:	moment().subtract( 15, 'minutes'),
		roomID: '3',
		userID: '34',
		message: 'hi, luke'
	},
	{
		msgID:	'1',//57a9ad98f36d2840aa65dee6
		time:	moment().subtract( 7, 'minutes'),
		roomID: '1',
		userID: '31',
		message: 'u ugly af'
	},
	{
		msgID:	'2',//57a9adcaf36d2840aa65deef
		time:	moment().subtract( 19, 'minutes'),
		roomID: '1',
		userID: '34',
		message: 'what is it?'
	},
	{
		msgID:	'3',//57a9adf3f36d2840aa65df01
		time:	moment().subtract( 20, 'minutes'),
		roomID: '1',
		userID: '31',
		message: 'yo david'
	},
	{
		msgID:	'4',//57a9ae49f36d2840aa65df07
		time:	moment().subtract( 1, 'minutes'),
		roomID: '2',
		userID: '34',
		message: 'so dumb'
	},
	{
		msgID:	'5',//57a9aeb1f36d2840aa65df36
		time:	moment().subtract( 58, 'minutes'),
		roomID: '2',
		userID: '33',
		message: 'much stupid'
	},
	{
		msgID:	'6',//57a9aedcf36d2840aa65df42
		time:	moment().subtract( 59, 'minutes'),
		roomID: '2',
		userID: '34',
		message: 'go away'
	},
	{
		msgID:	'7',//57a9aef6f36d2840aa65df46
		time:	moment().subtract( 60, 'minutes'),
		roomID: '2',
		userID: '31',
		message: 'hey guys'
	}
];

export const rms = [
	{
		roomID: '2',//57a0922af36d283aff2c5921
		name: 'rebels!',
		users: [ '34', '31', '33' ],
		messages: [ '4', '5', '6', '7' ]
	},
	{
		roomID: '1',//57a0950af36d283aff2c5996
		name: '',
		users: [ '34', '31' ],
		messages: [ '1', '2', '3' ]
	},
	{
		roomID: '3',//57a0955af36d283aff2c59a7
		name: '',
		users: [ '34', '33' ],
		messages: [ '8', '0' ]
	}
]

export const usrs = [
	{
		userID: '34',//57a09353f36d283aff2c595e
		name: 'david',
		rooms: [ 1, 2, 3 ]
	},
	{
		userID: '33',//57a09392f36d283aff2c596f
		name: 'luke',
		rooms: [ 2, 3 ]
	},
	{
		userID: '31',//57a093fbf36d283aff2c5986
		name: 'han',
		rooms: [ 1, 2 ]
	},
	{
		userID: '30',//57a09426f36d283aff2c5988
		name: 'leia',
		rooms: []
	}
]
