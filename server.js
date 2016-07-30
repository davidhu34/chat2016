//var debug = require('debug')('REM:server');
import app, { io } from '.server/app'
import http from 'http'

// Get port from environment and store in Express.
var port = normalizePort( process.env.PORT || '5000' );
app.set( 'port', port );

// Create HTTP server.
const server = http.createServer( app )
io.listen( server )

// Listen on provided port, on all network interfaces.
server.listen( port )
server.on( 'error', onError )
server.on( 'listening', onListening )

// Normalize a port into a number, string, or false.
const normalizePort = ( val ) => {
    const port = parseInt( val, 10 )

    if ( isNaN( port ) )
        return val  // named pipe

    if ( port >= 0 )
        return port // port number

    return false
}

// Event listener for HTTP server "error" event.
const onError = ( error ) => {
    if ( error.syscall !== 'listen' )
        throw error

    const bind = ( typeof port === 'string' )
        ? 'Pipe ' + port
        : 'Port ' + port

    // handle specific listen errors with friendly messages
    switch ( error.code ) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges')
            process.exit(1)
            break
        case 'EADDRINUSE':
            console.error(bind + ' is already in use')
            process.exit(1)
            break
        default:
            throw error
    }
}

// Event listener for HTTP server "listening" event.
const onListening = () => {
    const addr = server.address()
    const bind = ( typeof addr === 'string' )
        ? 'pipe ' + addr
        : 'port ' + addr.port
    // debug( 'Listening on ' + bind )
}
