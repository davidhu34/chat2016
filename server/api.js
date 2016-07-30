import ensureLogin from 'connect-ensure-login'
import { Router } from 'express'

export default ( io ) => {
    const authenticated = ensureLogin.ensureLoggedIn('/login')
    const router = Router()

    router.get( '/yo', (req, res, next) => {
        console.log('yo')
        res.send( 'yo' )
    })

    io.on('connection', ( socket ) => {
    	console.log('connect client')
        console.log(socket)
    })
    return router
}
