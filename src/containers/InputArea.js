import moment from 'moment'
import React from 'react'
import { connect } from 'react-redux'
import { newMessage, updateInput } from '../actions/index'

const InputArea = ({
    newMessage, onInputChange,
    currentRoom, defaultInput
}) => {
    let input

    return ( <div>
        <textarea
            placeholder="message..."
            ref={ ref => { input = ref } }
            onChange={ () =>
                onInputChange( currentRoom, input.value ) }
        >{ defaultInput }
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
    state => {
        let id = state.chatUI.currentRoom
        return {
            currentRoom: id,
            defaultInput: state.chatData[id].unsendMsg
        }
    }, dispatch => ({
        newMessage: (msg) => dispatch( newMessage(msg) ),
        onInputChange: ( id, value ) => dispatch( updateInput( id, value ) )
    })
)( InputArea )
