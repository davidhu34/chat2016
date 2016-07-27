import React from 'react'
import RoomListArea from './RoomListArea'
import ChatArea from './ChatArea'
import ObjectiveModal from '../containers/ObjectiveModal'

const App = () => (
    <div>
        <h1>Hello, Fuckers</h1>
        <div>
            <RoomListArea />
            <ChatArea />
            <ObjectiveModal />
        </div>
    </div>
)

export default App
