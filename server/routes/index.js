import path from 'path'
import express from 'express'
const router = express.Router()
import ensureloggin from 'connect-ensure-login'
import socketIO from 'socket.io'
const authenticated = ensureLogin.ensureLoggedIn('/login')
const io = socketIO()

router.get( '/', authenticated, (req, res, next) => {
  res.render('index')
})

io.on('connection', ( socket ) => {
	console.log('connect client')
    console.log(socket)
})

export default router
export io
