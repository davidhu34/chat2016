import React from 'react'
import { connect } from 'react-redux'
import { newRoom, changeRoom } from  '../actions/index'

const NewRoom = ({ newRoom, enabled }) => {
    return enabled? (
        <div
            onClick={ newRoom }
        >
            <b>+ New Room</b>
        </div>
    ) : ( <div></div> )
}

export default connect(
    state => ({
        enabled: state.chatUI.currentFocus !== 'ROOM_SEARCH'
    }), dispatch => ({
        newRoom: () => dispatch( newRoom() )
    })
)( NewRoom )
