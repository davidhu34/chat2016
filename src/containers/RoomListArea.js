import React from 'react'
import RoomListSearch from './RoomListSearch'
import CurrentRoomList from './CurrentRoomList'
import NewRoom from './NewRoom'

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
