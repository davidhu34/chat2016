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

const getRooms = ( roomsData, ui ) => {
    let filterText = ui.filter.string.toLowerCase()
    let searching = ( filterText === '' )? false: true

    let rooms = []
    Object.keys( roomsData ).map( id => {
        let r = roomsData[id]
        let others = otherUser(r.users)
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
            rooms.push({
                ...room,
                preview: r.messages[ r.messages.length - 1 ].message,
                lastUpdate: 'sometime',
                isCurrentRoom:
                    ( id === ui.currentRoom )? true: false
            })
        }
    })
    return rooms
}

const mapStateToProps = ( state ) => {
    return {
        rooms: getRooms( state.data, state.roomListUI )
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
