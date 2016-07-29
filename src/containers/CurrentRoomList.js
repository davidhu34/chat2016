import { PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { getRooms } from '../reducers'
import { changeRoom } from '../actions'
import RoomList from '../components/RoomList'

const CurrentRoomList = withRouter( connect(
    ( state, { params } ) =>
        getRooms( state, params.roomID || '1' ),
    ( dispatch ) => ({
        onRoomClick: (id) => dispatch( changeRoom(id) )
    })
)( RoomList ) )

export default CurrentRoomList
