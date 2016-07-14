export const messages = [
	{
		roomID: '0',
		user: 'david',
		message: 'hi, luke'
	},
	{
		roomID: '0',
		user: 'luke',
		message: 'hey what\'s up'
	},
	{
		roomID: '1',
		user: 'han',
		message: 'yo david'
	},
	{
		roomID: '1',
		user: 'david',
		message: 'what is it?'
	},
	{
		roomID: '1',
		user: 'han',
		message: 'u ugly af'
	},
	{
		roomID: '2',
		user: 'han',
		message: 'hey guys'
	},
	{
		roomID: '2',
		user: 'david',
		message: 'go away'
	},
	{
		roomID: '2',
		user: 'david',
		message: 'so dumb'
	},
	{
		roomID: '2',
		user: 'luke',
		message: 'much stupid'
	},

];

export const rooms = {
	'0': {
		name: '',
		users: [ 'david', 'luke' ],
		messages: []
	},
	'1': {
		name: '',
		users: [ 'david', 'han' ],
		messages: []
	},
	'2': {
		name: 'rebels!',
		users: [ 'david', 'han', 'luke' ],
		messages: []
	}
};

export const lastAccessedRoom = '2';
