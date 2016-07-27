import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import MessageList from '../components/MessageList'

const getChatMessages = ( state, currentRoom ) => {
    return state
        .chatData[currentRoom]
        .messages.map( m => ({
            ...m,
            username: state.userData[m.userID].name,
            float:
                ( m.userID !== '34' )? 'left': 'right'
        }))
}

const mapStateToProps = ( state, { params } ) => ({
    messages: getChatMessages( state, params.roomID )
})

const CurrentMsgList = withRouter( connect(
    mapStateToProps
)( MessageList ) )

export default CurrentMsgList
