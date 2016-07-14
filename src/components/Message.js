import React, { PropTypes } from 'react'

const Message = ({ message, float }) => (
    <li style = {{ float, color }} >
        {text}
    </li>
)

Message.propTypes = {
    message: PropTypes.string.isRequired,
    float: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default Message
