import React, { PropTypes } from 'react'

const Room = ({ onClick, title, preview, lastUpdate, isCurrentRoom }) => {
    let roomInfo = ( preview && lastUpdate )? (
        <span> {preview} {lastUpdate} </span>
    ) : (
        <span/>
    )
    return (
        <li onClick = { onClick }
        >
            {( isCurrentRoom )? (
                <b> {title} </b>
            ) : (
                {title}
            )}
            { roomInfo }
        </li>
    )
}

Room.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    lastUpdate: PropTypes.string.isRequired,
    isCurrentRoom: PropTypes.bool.isRequired
}

export default Room
