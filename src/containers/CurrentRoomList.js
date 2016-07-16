/*( name !== '' )? (
    name
) : (
    users => {
        let str = ''
        users.map( u =>
            str += ( u + ', ' )
        )
        return str.substr( 0, str.length - 2 )
    }
)
*/
import { connect } from 'react-redux'
import { changeRoom } from '../actions/index'
import RoomList from '../components/RoomList'

const getRooms = ( rooms, currnetRoom, searching ) => {
    return rooms.map( r => {
        let room = {
            title: ( r.name !== '' )? name : (
                otherUser(r.users)
            )
        }

        return ( searching )? (
            room
        ) : ({
            ...room,
            preview: r.messages[ r.messages.length - 1 ],
            lastUpdate: 'sometime',
            isCurrentRoom:
                ( r.roomID === currentRoom )? true: false
        })
    })
}

const mapStateToProps = ( state, ownProps ) => {
    return {
        rooms: getRooms( state.data,
            ownProps.currentRoom, ownProps.searching )
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        onRoomClick: dispatch( changeRoom )
    }
}

const CurrentRoomList = connect(
    mapStateToProps,
    mapDispatchToProps
)( RoomList )

export default CurrentRoomList
