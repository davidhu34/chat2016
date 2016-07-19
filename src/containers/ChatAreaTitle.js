import React from 'react'
import { connect } from 'react-redux'


const ChatAreaTitle = ({ title, status }) => (
    <div>
        <h3> { title } </h3>
        <b> { status } </b>
    </div>
)

export default connect(
    state => {
        let room = state
            .chatData[state.chatUI.currentRoom]
        let otherUsers = room.users
            .filter( u => u !== '34' )
            .map( u => state.userData[u] )

        let title = room.name
        let status = ''
        if ( otherUsers.length === 1 ) {
            title = otherUsers[0].name
        } else {
            otherUsers.map( u => {
                status += u.name + ', '
            })
            status = status.slice( 0, -2 )
        }
        return { title, status }
    }
)( ChatAreaTitle )
