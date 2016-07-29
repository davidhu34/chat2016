import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { getChatMessages } from '../reducers'
import MessageList from '../components/MessageList'

const CurrentMsgList = withRouter( connect(
    ( state, { params } ) => ({
        messages: getChatMessages( state, params.roomID )
    })
)( MessageList ) )

export default CurrentMsgList
