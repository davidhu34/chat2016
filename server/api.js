import ensureLogin from 'connect-ensure-login'
import { Router } from 'express'

export default ( io, models ) => {
    const { User } = models
    const authenticated = ensureLogin.ensureLoggedIn('/login')
    const router = Router()
    router.get( '/yo', (req, res, next) => {
        console.log('yo')
        res.send( 'yo' )
    })

    io.on('connection', ( socket ) => {
    	console.log('connect client')
        socket.emit('soee', { data: 'data' } )
        socket.on( 'INIT_DATA', ( req ) => {
            console.log('init data req')
            User.find( {}, ( err, users ) => {
                console.log( users )
                io.emit( 'INIT_DATA', {
                    users
                })
            }).then( ( data ) => {
                console.log( 'onsuccess',data )
            })
        })
    })
    return router
}
