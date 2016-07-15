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

const getRooms = ( data, ui ) => {
    if ( ui.)
    return data[ui.currentRoom]
        .messages.map( m => {
            ...m,
            float: ( m.user !== 'david' )? 'left': 'right'
    })
}

const mapStateToProps = ( state, ownProps.ui ) => {
    return {
        rooms: getRooms( state.data, ownProps.ui )
    }
}

const mapDispatchToProps = ( dispatch, ownProps ) => {
    return {
        onRoomClick: dispatch( ownProps.onRoomClick )
    }
}

const CurrentRoomList = connect(
    mapStateToProps,
    mapDispatchToProps
)( RoomList )

export default CurrentRoomList
