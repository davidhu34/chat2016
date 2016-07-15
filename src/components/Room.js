import React, { PropTypes } from 'react'

const Room = ({ onClick, title, preview, lastUpdate }) => (
    <li
        onClick = { onClick }
    >
        <b> {title} </b>
        { preview }
        { lastUpdate }
    </li>
)

Room.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    lastUpdate: PropTypes.string.isRequired,
}

export default Room
