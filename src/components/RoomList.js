import React, { PropTypes } from 'react'
import Room from './Room'

const RoomList = ({ onRoomClick,
    rooms, searching
}) => (
    <ul>
        { rooms.map( r =>
            <Room
                key={ r.roomID }
                { ...r }
                onClick = { () =>
                    onRoomClick( r.roomID )
                }
            />
        )}
    </ul>
)

RoomList.propTypes = {
    rooms: PropTypes.arrayOf(
        Room.propTypes ).isRequired
}

export default RoomList
