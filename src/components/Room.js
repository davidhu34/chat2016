import React, { PropTypes } from 'react'

const Room = ({ onClick, title, preview, lastUpdate, isCurrentRoom }) => {
    let roomInfo = ( preview && lastUpdate )? (
        <span> {preview} {lastUpdate} </span>
    ) : (
        <span/>
    )
    let room = ( isCurrentRoom )? (
        <b> {title} </b>
    ) : (
        <span>{title}</span>
    )

    return (
        <li onClick = { onClick }
        >
            { room }
            { roomInfo }
        </li>
    )
}

Room.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string,
    lastUpdate: PropTypes.string,
    isCurrentRoom: PropTypes.bool
}

export default Room
