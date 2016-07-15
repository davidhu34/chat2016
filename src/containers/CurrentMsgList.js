import { connect } from 'react-redux'
import MessageList from '../components/MessageList'

const getChatMessages = ( data, ui ) => {
    return data[ui.currentRoom]
        .messages.map( m => {
            ...m,
            float: ( m.user !== 'david' )? 'left': 'right'
    })
}

const mapStateToProps = ( state, ownProps ) => {
    return {
        messages: getChatMessages( state.data, ownProps.ui )
    }
}

const CurrentMsgList = connect(
    mapStateToProps
)( MessageList )

export default CurrentMsgList
