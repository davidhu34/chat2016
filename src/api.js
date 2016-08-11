export default ( socket ) => {
    return {
        newMsg: ({ userID, roomID }) => {
            socket.emit( 'NEW_MSG', {
                user: userID,
                room: roomID
            })
        }
    }
}
