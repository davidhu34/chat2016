export const newMessage = ( message ) => {
	return {
		type: 'NEW_MSG',
		message
	}
}

export const newRoom = ( room ) => {
	return {
		type: 'NEW_ROOM',
		room
	}
}

export const changeRoom = ( roomID, inputTmp ) => {
	return {
		type: 'CHANGE_ROOM',
		roomID
	}
}

// centralUI
export const toggleSearchMessage = () => {
	return {
		type: 'TOGGLE_SEARCH_MSG'
	}
}

export const filterMessage = ( filter ) => {
	return {
		type: 'FILTER_MSG',
		filter
	}
}

// leftUI
export const changeFilter = ( filter ) => {
	return {
		type: 'CHANGE_FILTER',
		filter
	}
}