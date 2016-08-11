export default ( socket ) => {
    const getUserInit = new Promise( ( resolve, reject ) => {
        socket.on( 'INIT_USER_DATA', ({ users }) => {
            console.log( 'init users: ', users )
    		resolve ( users.map(
                u => ({
        			userID: u._id,
        			...u
        		})
            ))
    })})
    const getMsgInit = new Promise( ( resolve, reject ) => {
        socket.on( 'INIT_MSG_DATA', ({ messages }) => {
            console.log( 'init msgs: ', messages )
            resolve ( messages.map(
                m => ({
                    msgID: m._id,
                    ...m
                })
            ))
    })})
    const getRoomInit = new Promise( ( resolve, reject ) => {
        socket.on( 'INIT_ROOM_DATA', ({ rooms }) => {
            console.log( 'init rooms: ', rooms )
    		resolve ( rooms.map(
                r => ({
        			roomID: r._id,
        			...r
        		})
            ))
    })})

    return Promise.all([
        getUserInit,
        getMsgInit,
        getRoomInit
    ]).then( ( values ) => {
        console.log('then',values)
        const userData = {}
        const msgData = {}
        const chatData = {}
        values[0].map( u => { userData[ u.userID ] = u } )
        values[1].map( m => { msgData[ m.msgID ] = m } )
        values[2].map( r => {
        	chatData[ r.roomID ] = {
                unsentMsg:'',
        		roomID:   r.roomID,
        		name:     r.name,
        		messages: r.messages.map( id => msgData[id] ),
        		users:    r.users.filter( u => ( u !== '34') )
        	}
        })
        return chatData
    })
}
