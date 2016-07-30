"use strict"
//var debug = require('debug')('REM:server');
import http     from 'http'
import path     from 'path'
import socketio from 'socket.io'
import express  from 'express'

import { normalizePort, onError, onListening } from './util'
import applyMiddlewares from './middlewares'
import api from './api'

const server = http.createServer( app )
const io = new socketio(server)

const app = express()
const port = normalizePort( process.env.PORT || '5000' )
app.use( express.static( path.join( __dirname, '/dist' ) ) )
applyMiddlewares( app )
app.use( '/', api(io) )
app.get( '/', (req, res, next) => {
    res.sendFile( 'index.html' )
})
app.set( 'port', port )


server.listen( port )
server.on( 'error', onError() )
server.on( 'listening', onListening(server) )
