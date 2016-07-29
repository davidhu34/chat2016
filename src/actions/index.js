export const newMessage = ( message ) => ({
	type: 'NEW_MSG',
	...message
})

export const newRoom = () => ({
	type: 'NEW_ROOM',
	modal: 'create room'
})

export const createRoom = ( room ) => ({
	type: 'CREATE_ROOM',
	...room
})
/*
export const changeRoom = ( roomID, ) => ({
	type: 'CHANGE_ROOM',
	roomID
})
*/
export const changeFilter = ( filter ) => ({
	type: 'CHANGE_FILTER',
	filter
})

export const changeFocus = ( focus ) => ({
	type: 'CHANGE_FOCUS',
	focus
})

export const updateInput = ( roomID, val ) => ({
	type: 'UPDATE_INPUT',
	roomID,
	val
})
