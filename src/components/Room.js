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
    preview: PropTypes.string,
    lastUpdate: PropTypes.string,
    isCurrentRoom: PropTypes.bool
}

export default Room
