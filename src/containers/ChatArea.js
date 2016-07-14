import { connect } from 'react-redux'
import { newMessage } from '../actions/index'
import MessageList from '../components/MessageList'

const getChatMessages = ( data, ui ) => {
    return data[ui.currentRoom]
        .messages.map( m => {
            ...m,
            float: ( m.user !== 'david' )? 'left': 'right'
    })
}


const mapStateToProps = ( state ) => {
    return {
        messages: getChatMessages( state.data, state.centralUI )
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

ChatArea = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatArea)

export default VisibleTodoList
