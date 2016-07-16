import { connect } from 'react-redux'
import { changeRoom } from '../actions/index'
import RoomList from '../components/RoomList'

const otherUser = ( users ) => {
    let str = ''
    users.map( u =>
        str += ( u + ', ' )
    )
    return str.substr( 0, str.length - 2 )
}

const getRooms = ( roomsData, ui ) => {
    let filterText = ui.filter.string
    let searching = ( filterText === '' )? false: true

    let rooms = []
    Object.keys( roomsData ).map( id => {
        let r = roomsData[id]
        let room = {
            roomID: r.roomID,
            title: ( r.name !== '' )? name : (
                otherUser(r.users)
            )
        }

        if ( searching ) {
            if ( room.title.indexOf( filterText ) >= 0
            ||  r.name.indexOf( filterText ) >= 0  )
                rooms.push( room )
        } else {
            rooms.push({
                ...room,
                preview: r.messages[ r.messages.length - 1 ].message,
                lastUpdate: 'sometime',
                isCurrentRoom:
                    ( r.roomID === ui.currentRoom )? true: false
            })
        }
    })
    return rooms
}

const mapStateToProps = ( state ) => {
    console.log(state)
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
