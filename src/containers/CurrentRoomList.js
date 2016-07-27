import { PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import moment from 'moment'

import { changeRoom } from '../actions/index'
import RoomList from '../components/RoomList'

const otherNames = ( users ) => {
    let str = ''
    users.map( u => {
        if ( u !== 'david' )
            str += ( u + ', ' )
    })
    return str.substr( 0, str.length - 2 )
}

const getRooms = ( chat, users, ui, currentRoom ) => {
    let filterText = ui.roomFilter.string.toLowerCase()
    let searching = ( ui.currentFocus === 'ROOM_SEARCH' )
    let { order } = ui

    let rooms = []
    order.map( id => {
        let r = chat[id]
        let others = otherNames(
            r.users.map( uid => users[uid].name )
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
    return rooms
}

const mapStateToProps = ( state, { params } ) => ({
    rooms: getRooms( state.chatData, state.userData, state.chatUI, params.roomID||'1' ),
    searching: state.chatUI.currentFocus === 'ROOM_SEARCH'
})

const mapDispatchToProps = ( dispatch ) => ({
    onRoomClick: (id) => dispatch( changeRoom(id) )
})

const CurrentRoomList = withRouter( connect(
    mapStateToProps,
    mapDispatchToProps
)( RoomList ) )

export default CurrentRoomList
