import React from 'react'
import { connect } from 'react-redux'
import { changeFilter } from  '../actions/index'

const RoomListSearch = ({ filter, changeFilter }) => {
    let input
    return (
        <div>
            <b>SearchBox</b>
            <input
                type="text"
                placeholder="search room..."
                ref={ ref => {
                    input = ref
                }}
                onChange={ () => {
                    changeFilter({
                        string:input.value
                    })
                }}
            />
        </div>
    )
}

export default connect(
    state => ({
        filter: state.roomListUI.filter
    }), dispatch => ({
        changeFilter: (filter) => dispatch( changeFilter(filter) )
    })
)( RoomListSearch )
