import io from 'socket.io-client'

const socket = io('http://localhost:5000')
let iusrs = {}
let imsgs = {}
let irms = {}

socket.on( 'connect', () => {
    socket.emit( 'INIT_DATA', {req:'req'})
    socket.on( 'INIT_USER_DATA', ({ users }) => {
        console.log( 'init: ', users )
		iusrs = users.map( u => ({
			userID: u._id,
			...u
		}))
    })
    socket.on( 'INIT_ROOM_DATA', ({ rooms }) => {
        console.log( 'init: ', rooms )
		irms = rooms.map( r => ({
			roomID: r._id,
			...r
		}))
    })
    socket.on( 'INIT_MSG_DATA', ({ messages }) => {
        console.log( 'init: ', messages )
		imsgs = messages.map( m => ({
			msgID: m._id,
			...m
		}))
    })
})

export default ( store ) => ( next ) =>
    ( action ) => {
        switch ( action.type ) {
            default:
                return next( action )
        }
}
