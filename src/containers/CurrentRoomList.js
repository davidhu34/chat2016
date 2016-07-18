import { connect } from 'react-redux'
import { changeRoom } from '../actions/index'
import RoomList from '../components/RoomList'

const otherUser = ( users ) => {
    let str = ''
    users.map( u => {
        if ( u != 'david' )
            str += ( u + ', ' )
    })
    return str.substr( 0, str.length - 2 )
}

const getRooms = ( data, ui ) => {
    let filterText = ui.roomFilter.string.toLowerCase()
    let { order, searchingRoom } = ui
    console.log(Object.keys(data))
    let rooms = []
    order.map( id => {
        console.log(rooms)
        let r = data[id]
        let others = otherUser(data[id].users)
        let hasName = ( r.name !== '' )
        let room = {
            roomID: id,
            title: hasName? r.name : others
        }

        if ( searchingRoom ) {
            if ( r.name.toLowerCase().indexOf( filterText ) >= 0
            || others.indexOf( filterText ) >= 0 ) {
                if ( hasName )
                    room.preview = others
                rooms.push(room)
            }
        } else {
            if ( r.messages.length !== 0 ) {
                room.preview = r.messages[0].message
                room.lastUpdate = r.messages[0].time.format('LT')
            }
            rooms.push({
                ...room,
                isCurrentRoom:
                    ( id === ui.currentRoom )? true: false
            })
        }
    })
    return rooms
}

const mapStateToProps = ( state ) => {
    return {
        rooms: getRooms( state.chatData, state.chatUI )
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        onRoomClick: (id) => dispatch( changeRoom(id) )
    }
}

const CurrentRoomList = connect(
    mapStateToProps,
    mapDispatchToProps
)( RoomList )

export default CurrentRoomList
