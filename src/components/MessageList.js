import React, { PropTypes } from 'react'
import Message from './Message'

const MessageList = ({ messages }) => (
    <ul>
        { messages.map( msg =>
            <Message
                {...msg}
            />
        )}
    </ul>
)

MessageList.propTypes = {
    messages: PropTypes.arrayOf(
        Message.propTypes ).isRequired,
}

export default MessageList
