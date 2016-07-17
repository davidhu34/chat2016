import React, { Component } from 'react';
import RoomListArea from '../containers/RoomListArea'
import ChatArea from '../containers/ChatArea'
import ObjectiveModal from '../containers/ObjectiveModal'

export default class App extends Component {
    render () {
        return (
            <div>
                <h1>Hello, Fuckers</h1>
                <div>
                    <RoomListArea />
                    <ChatArea />
                    <ObjectiveModal />
                </div>
            </div>
        )
    }
}
