import React from 'react'
import RoomListSearch from '../containers/RoomListSearch'
import CurrentRoomList from '../containers/CurrentRoomList'
import NewRoom from '../containers/NewRoom'

const RoomListArea = () => {
    return (
        <div>
            <RoomListSearch />
            <CurrentRoomList />
            <NewRoom />
        </div>
    )
}

export default RoomListArea
