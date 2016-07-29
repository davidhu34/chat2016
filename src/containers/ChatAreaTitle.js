import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getChatAreaTitle } from '../reducers'

const ChatAreaTitle = ({ title, status }) => (
    <div>
        <h3> { title } </h3>
        <b> { status } </b>
    </div>
)

export default withRouter( connect(
    ( state, { params } ) =>
        getChatAreaTitle( state, params.roomID )
)( ChatAreaTitle ) )
