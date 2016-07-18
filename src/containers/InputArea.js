import moment from 'moment'
import React from 'react'
import { connect } from 'react-redux'
import { newMessage } from '../actions/index'

const InputArea = ({ currentRoom,
    newMessage
}) => {
    let input
    return ( <div>
        <textarea
            placeholder="message..."
            defaultValue=""
            ref={ ref => { input = ref } }
        >
        </textarea>
        <button
            onClick={ () => {
                let message = {
                    roomID: currentRoom,
                    time: moment(),
                    user: 'david',
                    message: input.value
                }
                newMessage(message)
            }}
        >
            Send
        </button>
    </div> )
}


export default connect(
    state => ({
        currentRoom: state.chatUI.currentRoom
    }), dispatch => ({
        newMessage: (msg) => dispatch( newMessage(msg) ),
    })
)( InputArea )
