import React, { PropTypes } from 'react'

const Message = ({ message, username, float }) => (
    <li
    //    style = {{ float }}
    >
        { username + ': ' + message }
    </li>
)

Message.propTypes = {
    message: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    float: PropTypes.string.isRequired,
}

export default Message
