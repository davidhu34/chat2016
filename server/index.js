"use strict"
//var debug = require('debug')('REM:server');
import http     from 'http'
import path     from 'path'
import socketio from 'socket.io'
import express  from 'express'

import { normalizePort, onError, onListening } from './util'
import applyMiddlewares from './middlewares'
import api from './api'


const app = express()
const port = normalizePort( process.env.PORT || '5000' )
app.set( 'port', port )
app.use( express.static( path.join( __dirname, '..', 'public' ) ) )
applyMiddlewares( app )
app.get( '*', (req, res, next) => {
    res.sendFile( path.join( __dirname, '..', 'index.html' ) )
})

const server = http.createServer( app )
const io = new socketio(server)
app.use( '/', api(io) )


server.listen( port )
server.on( 'error', onError() )
server.on( 'listening', onListening(server) )
