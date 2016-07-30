"use strict"
import express      from 'express'
import session      from 'express-session'
import path         from 'path'
import favicon      from 'serve-favicon'
import logger       from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser   from 'body-parser'
import compression  from 'compression'

import routes, { io }       from './routes/index'

//using let

const app = express()
app.io = io
/*app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')*/
app.use( logger('dev') )
app.use( session( {
    secret: 'secret',
    cookie: {}
}))
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: false } ) )
app.use( cookieParser() )
app.use( express.static( path.join( __dirname, 'public' ) ) )
app.use( compression() )

app.use( '/', routes )

// using arrow syntax
app.use( (req, res, next) => {
  let err = new Error('Not Found')
  err.status = 404
  next( err )
})
if ( app.get( 'env' ) === 'development' ) {
    app.use( ( err, req, res, next) => {
        res.status( err.status || 500 )
        res.render( 'error', {
            message:    err.message,
            error:      err
        })
    })
}
app.use( ( err, req, res, next) => {
    res.status( err.status || 500 )
    res.render( 'error', {
        message:    err.message,
        error:      {}
    })
})

export default app
export io
