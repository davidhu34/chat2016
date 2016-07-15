import React, { PropTypes } from 'react'
import Room from './Room'

const RoomList = ({ rooms }) => (
    <ul>
        { rooms.map( r =>
            <Room
                key = { r.roomID }
                title = { r.title }
                preview = { r.preview }
                lastUpdate = { r.lastUpdate }
                onClick = { () =>
                    onRoomClick( r.id )
                }
            />
        )}
    </ul>
)

RoomList.propTypes = {
    rooms: PropTypes.arrayOf(
        Room.propTypes ).isRequired,
}

export default RoomList
