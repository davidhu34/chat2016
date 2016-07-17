export const newMessage = ( message ) => {
	return {
		type: 'NEW_MSG',
		message
	}
}

export const newRoom = () => {
	return {
		type: 'NEW_ROOM',
		modal: 'create room'
	}
}

export const createRoom = ( room ) => {
	return {
		type: 'CREATE_ROOM',
		room
	}
}

export const changeRoom = ( roomID, inputTmp ) => {
	return {
		type: 'CHANGE_ROOM',
		roomID
	}
}

export const changeFilter = ( filter ) => {
	return {
		type: 'CHANGE_FILTER',
		filter
	}
}
