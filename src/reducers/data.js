import moment from 'moment'
import { v4 } from 'uuid'
import { chatDataInit, userDataInit } from './initState';

const messageData = ( state, action ) => {
    switch ( action.type ) {
        case 'NEW_MSG':
            return {
                msgID: v4(),
                time: action.time,
                userID: action.userID,
                message: action.message
            }
        default:
            return state
    }
}

const roomData = ( state, action ) => {
    switch ( action.type ) {
        case 'NEW_MSG':
            return {
                ...state,
                unsentMsg: '',
                messages: [
                    messageData( null, action ),
                    ...state.messages
                ]
            }
        case 'UPDATE_INPUT':
            return {
                ...state,
                unsentMsg: action.val
            }
        case 'CREATE_ROOM':
            return {
                roomID: action.roomID,
                name: action.name,
                users: action.users
                    .filter( u => ( u !== '34' ) ),
                messages: [],
                unsentMsg: ''
            }
        default:
            return state
    }
}

const chatData = ( state = chatDataInit, action ) => {
    switch ( action.type ) {
        case 'NEW_MSG':
        case 'UPDATE_INPUT':
            return {
                ...state,
                [ action.roomID ]:
                    roomData( state[action.roomID], action )
            }
        case 'CREATE_ROOM':
            return {
                ...state,
                [ action.roomID ]: roomData( null, action )
            }
        default:
            return state
    }
}

const userData = ( state = userDataInit, action ) => {
    switch ( action.type ) {
        default:
            return state
    }
}

export { chatData, userData }

export const getUnsentMsg = ( state, id ) =>
    state.chatData[id].unsentMsg

export const getChatAreaTitle = ( state, id ) => {
    let room = state.chatData[id]
    let otherUsers = room.users
        .filter( u => u !== '34' )
        .map( u => state.userData[u] )

    let title = room.name
    let status = ''

    if ( otherUsers.length === 1 ) {
        title = otherUsers[0].name
    } else {
        otherUsers.map( u => {
            status += u.name + ', '
        })
        status = status.slice( 0, -2 )
    }

    return { title, status }
}

const otherNames = ( users ) => {
    let str = ''
    users.map( u => {
        if ( u !== 'david' )
            str += ( u + ', ' )
    })
    return str.substr( 0, str.length - 2 )
}

export const getRoomsData = ( state, ui, currentRoom ) => {
    let { filterText, searching, order } = ui

    let rooms = []
    order.map( id => {
        let r = state.chatData[id]
        let others = otherNames(
            r.users.map( uid => state.userData[uid].name )
        )
        let hasName = ( r.name !== '' )

        let room = {
            roomID: id,
            title: hasName? r.name : others
        }
        if ( searching ) {
            if ( r.name.toLowerCase().indexOf( filterText ) >= 0
                || others.indexOf( filterText ) >= 0 ) {
                if ( hasName )
                    room.preview = others
                rooms.push(room)
            }
        } else {
            if ( r.messages.length !== 0 ) {
                room.preview = r.messages[0].message
                room.lastUpdate = moment( r.messages[0].time )
                                .format('LT')
            }
            rooms.push({
                ...room,
                isCurrentRoom:
                    ( id === currentRoom )? true: false
            })
        }
    })
    return { rooms, searching }
}
