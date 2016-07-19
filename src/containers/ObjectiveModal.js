import React from 'react'
import { connect } from 'react-redux'
import { createRoom } from '../actions/index'

const ObjectiveModal = ({ objective, modal }) => {
    let objText = modal

    return ( <div>
        {'Modal Area'}
        <button
            onClick={ () => objective({
                roomID: '5',
                name: 'espss',
                users: ['david', 'leia', 'han']
            })}
        >
            { objText }
        </button>
    </div> )
}

export default connect(
    state => ({
        modal: state.chatUI.currentModal
    }), dispatch => ({
        objective: (r) => dispatch( createRoom(r) )
    })
)( ObjectiveModal )
