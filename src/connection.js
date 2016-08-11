import io from 'socket.io-client'
import isEmpty from 'lodash/isEmpty'
import init from './init'
import api from './api'


const socket = io('http://localhost:5000')
const initPromise = init(socket)
const {
    newMsg
} = api(socket)
socket.on( 'connect', () => {
    socket.emit( 'INIT_DATA', {req:'req'})
})



export default ( store ) => ( next ) => ( action ) => {
    switch ( action.type ) {
        case 'INIT':
            return initPromise
                .then( ( data ) => {
                    next({
                        data,
                        ...action
                    })
                })
        default:
            return next( action )
    }
}
