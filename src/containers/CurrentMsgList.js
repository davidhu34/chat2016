import { connect } from 'react-redux'
import MessageList from '../components/MessageList'

const getChatMessages = ( room ) => {
    return room.messages.map( m => ({
            ...m,
            float: ( m.user !== 'david' )? 'left': 'right'
    }))
}

const mapStateToProps = ( state ) => {
    return {
        messages: getChatMessages( state.data[state.chatAreaUI.currentRoom] )
    }
}

const CurrentMsgList = connect(
    mapStateToProps
)( MessageList )

export default CurrentMsgList
