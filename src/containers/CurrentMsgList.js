import { connect } from 'react-redux'
import MessageList from '../components/MessageList'

const getChatMessages = ( messages ) => {
    return messages.map( m => ({
            ...m,
            float: ( m.user !== 'david' )? 'left': 'right'
    }))
}

const mapStateToProps = ( state, ownProps ) => {
    return {
        messages: getChatMessages( state.data[ownProps.currentRoom] )
    }
}

const CurrentMsgList = connect(
    mapStateToProps
)( MessageList )

export default CurrentMsgList
