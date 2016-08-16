import React, { PropTypes } from 'react'
import Message from './Message'

const MessageList = ({ messages }) => (
    <ul>
        { messages.map( msg =>
            <Message
                key={ msg.msgID }
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
