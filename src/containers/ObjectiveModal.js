import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { createRoom } from '../actions'

const ObjectiveModal = ({ objective, modal }) => {
    let objText = modal

    return ( <div>
        {'Modal Area'}
        <Link to='/5'>
            <button
                onClick={ () => objective({
                    roomID: '5',
                    name: 'espss',
                    users: ['34', '30', '31']
                })}
            >
                { objText }
            </button>
        </Link>
    </div> )
}

export default connect(
    state => ({
        modal: state.chatUI.currentModal
    }), dispatch => ({
        objective: (r) => dispatch( createRoom(r) )
    })
)( ObjectiveModal )
