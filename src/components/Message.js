import React, { PropTypes } from 'react'

const Message = ({ message, user, float }) => (
    <li style = {{ float }} >
        { user + ': ' + message }
    </li>
)

Message.propTypes = {
    message: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    float: PropTypes.string.isRequired,
}

export default Message
