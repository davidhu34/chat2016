import React from 'react'
import { connect } from 'react-redux'
import { newMessage } from '../actions/index'

const InputArea = ({ currentRoom, newMessage }) => {
    let input
    return (
        <div>
            <textarea
                placeholder="message..."
                ref={ (ref) => {
                    input = ref
                }}
            >
            </textarea>
            <button
                onClick={ () => {
                    let message = {
                        roomID: currentRoom,
                        user: 'david',
                        message: input.value
                    }
                    console.log(input.value)
                    newMessage(message)
                }}
            >
                Send
            </button>
        </div>
    )
}


export default connect( state => ({
    currentRoom: state.chatAreaUI.currentRoom
}), dispatch => ({
    newMessage: (msg) => dispatch( newMessage(msg) )
}))( InputArea )
