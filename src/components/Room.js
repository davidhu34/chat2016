import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Room = ({
    onClick, title, roomID,
    preview = null, lastUpdate = null, isCurrentRoom = false
}) => {
    const optionalInfo = (info) => (
        ( info )? (
            <span> {info} </span>
        ) : <span/>
    )

    let room = ( isCurrentRoom )? (
        <b> {title} </b>
    ) : (
        <span>{title}</span>
    )
    let roomInfo = ( <div>
        {optionalInfo(preview)}
        {optionalInfo(lastUpdate)}
    </div> )

    return (
        <Link to= { roomID }
        >
            { room }
            { roomInfo }
        </Link>
    )
}

Room.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    roomID: PropTypes.string.isRequired,
    preview: PropTypes.string,
    lastUpdate: PropTypes.string,
    isCurrentRoom: PropTypes.bool
}

export default Room
