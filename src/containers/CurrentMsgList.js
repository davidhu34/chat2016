import { connect } from 'react-redux'
import MessageList from '../components/MessageList'

const getChatMessages = ( state ) => {
    return state
        .chatData[state.chatUI.currentRoom]
        .messages.map( m => ({
            ...m,
            username: state.userData[m.userID].name,
            float:
                ( m.userID !== '34' )? 'left': 'right'
        }))
}

const mapStateToProps = ( state ) => ({
    messages: getChatMessages( state )
})

const CurrentMsgList = connect(
    mapStateToProps
)( MessageList )

export default CurrentMsgList
