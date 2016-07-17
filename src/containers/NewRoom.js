import React from 'react'
import { connect } from 'react-redux'
import { newRoom, changeRoom } from  '../actions/index'

const NewRoom = ({ newRoom }) => {
    let input
    return (
        <div
            onClick={ newRoom }
        >
            <b>+ New Room</b>
        </div>
    )
}

export default connect( null,
    dispatch => ({
        newRoom: () => dispatch( newRoom() )
    })
)( NewRoom )
