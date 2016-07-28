import moment from 'moment'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
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
            value={ defaultInput }
        >
        </textarea>
        <button
            onClick={ () => {
                let message = {
                    roomID: currentRoom,
                    time: moment(),
                    userID: '34',
                    message: input.value
                }
                newMessage(message)
            }}
        >
            Send
        </button>
    </div> )
}


export default withRouter( connect(
    ( state, { params } ) => {
        let id = params.roomID
        return {
            currentRoom: id,
            defaultInput: state.chatData[id].unsentMsg
        }
    }, dispatch => ({
        newMessage: (msg) => dispatch( newMessage(msg) ),
        onInputChange: ( id, value ) => dispatch( updateInput( id, value ) )
    })
)( InputArea ) )
